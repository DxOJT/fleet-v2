import { useContext, useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
// third party libraries
import { Button, Table, Tooltip } from "antd";
import Typography from "antd/es/typography/Typography.js";
import { observer } from "mobx-react";
import moment from "moment";

// context
import { MyContext } from "../../../context/context.jsx";

// helpers
import { displayFulllName } from "../../../helper/name.cjs";
import GatekeeperModal from "./GatekeeperModal.jsx";

import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../graphql/query.cjs";
const GatekeeperTable = () => {
  const { gatekeeperData, tableLoading } = useContext(MyContext);
  const [modalIdOpen, setModalIdOpen] = useState(null);
  const { loading: LoadingUser, data: DataUser, refetch } = useQuery(GET_USER);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",

      render: (_, record) => (
        <Typography.Text className="capitalize">
          {displayFulllName(record.first_name, "", record.last_name)}
        </Typography.Text>
      ),

      filters: [],
      onFilter: (value, record) =>
        record.first_name.indexOf(value) === 0 ||
        record.last_name.indexOf(value) === 0,
      sorter: (a, b) =>
        a.first_name.length +
        a.last_name.length -
        b.first_name.length -
        b.last_name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const employeeID = record.id;

        const filteredId =
          !LoadingUser &&
          DataUser.user.filter((id) => id.employee_id === employeeID);
        return (
          <div className="flex gap-8 ">
            <Tooltip
              title={() => <div className=" text-gray-900">View details</div>}
              color="#ffcc84"
            >
              <BsBoxArrowUpRight fontSize={20} color="#Ce7936" />
            </Tooltip>
            <Tooltip
              title={() => (
                <div className=" text-gray-900">Create New Account</div>
              )}
              color="#ffcc84"
            >
              <FiUserPlus
                fontSize={20}
                color="#Ce7936"
                visibility={filteredId[0]?.id ? " hidden" : "visible"}
                onClick={() => setModalIdOpen(record.id)}
              />
            </Tooltip>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Table
        loading={tableLoading}
        className="lg:block hidden mb-5"
        columns={columns}
        dataSource={gatekeeperData}
        pagination={false}
      />
      <GatekeeperModal
        key={modalIdOpen}
        modalIdOpen={modalIdOpen}
        setModalIdOpen={setModalIdOpen}
        refetch={refetch}
      />
    </>
  );
};

export default observer(GatekeeperTable);
