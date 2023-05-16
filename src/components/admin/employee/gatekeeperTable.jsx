import { useContext } from "react";
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

const GatekeeperTable = () => {
  const { gatekeeperData, tableLoading } = useContext(MyContext);

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
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
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
            <FiUserPlus fontSize={20} color="#Ce7936" />
          </Tooltip>
        </div>
      ),
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
    </>
  );
};

export default observer(GatekeeperTable);
