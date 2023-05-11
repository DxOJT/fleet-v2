// third party libraries
import { Button, Card, Input, Typography, Pagination } from "antd";
import { useQuery } from "@apollo/client";
import { action, makeAutoObservable } from "mobx";

// context
import { MyContext } from "../../../context/context";

// graphql
import { GET_EMPLOYEES } from "../../../graphql/query.cjs";

// components
import GatekeeperTable from "../../../components/admin/employee/gatekeeperTable";
import { useEffect, useState } from "react";
class GatekeeperListStore {
  gatekeeperData = [];
  tableLoading = true;
  refetch;

  constructor() {
    makeAutoObservable(this, {
      setGatekeeper: action.bound,
      setRefetch: action.bound,
      onViewButton: action.bound,
    });
  }

  setGatekeeper(gatekeeper) {
    this.gatekeeperData = gatekeeper;
  }

  toggleTableLoading(loading) {
    this.tableLoading = loading;
  }

  setRefetch(refetchFunction) {
    this.refetch = refetchFunction;
  }

  onViewButton(id) {
    return () => {
      console.log(id);
    };
  }
}
const store = new GatekeeperListStore();

const GatekeeperList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(20);
  const [totalItems, setTotalItems] = useState();
  const {
    data: gatekeepers,
    loading: gatekeepersLoading,
    refetch,
  } = useQuery(GET_EMPLOYEES, {
    variables: {
      orderBy: { first_name: "asc" },
      limit: currentPageSize,
      where: { employee_type: { _eq: "gatekeeper" } },
      offset: currentPage * currentPageSize - currentPageSize,
    },
  });

  // fuctions
  const handleChangePage = (page, pageSize) => {
    setCurrentPageSize(pageSize);
    setCurrentPage(page);
    refetch({
      orderBy: { first_name: "asc" },
      limit: pageSize,
      where: { employee_type: { _eq: "gatekeeper" } },
      offset: page * pageSize - pageSize,
    });
  };

  // useEffects
  useEffect(() => {
    if (gatekeepers && !gatekeepersLoading) {
      setTotalItems(gatekeepers.employee_aggregate.aggregate.count);
      store.setGatekeeper(gatekeepers.employee);
      console.log(gatekeepers.employee);
    }
  }, [gatekeepers]);
  useEffect(() => {
    store.toggleTableLoading(gatekeepersLoading);
  }, [gatekeepersLoading]);

  return (
    <MyContext.Provider value={store}>
      <Card className="mb-5">
        <div className="block lg:flex justify-between w-full">
          <Typography.Title
            className="block lg:hidden"
            level={4}
            style={{ margin: 0 }}
          >
            Gatekeepers
          </Typography.Title>
          <Typography.Title
            className="hidden lg:block"
            level={2}
            style={{ margin: 0 }}
          >
            Gatekeepers
          </Typography.Title>
          <div className="block lg:flex items-center">
            <Input.Search
              className="lg:w-40 my-5 lg:mr-5 lg:my-0"
              placeholder="Search"
            />
            <Button className="w-full lg:w-auto" type="primary" ghost>
              Add Gatekeeper
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <GatekeeperTable />
        <div className=" text-right">
          <Pagination
            current={currentPage}
            defaultPageSize={currentPageSize}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            onChange={handleChangePage}
            total={totalItems}
          />
        </div>
      </Card>
    </MyContext.Provider>
  );
};

export default GatekeeperList;
