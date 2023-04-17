import { useContext } from "react";
// third party libraries
import { Table, Tooltip } from "antd";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Typography from "antd/es/typography/Typography.js";
import { observer } from "mobx-react";
import moment from "moment";
// context
import { MyContext } from "../../../context/context.jsx";
// helpers
import { displayFulllName } from "../../../helper/name.cjs";
// components
import List from "../../etc/list.jsx";
import DriverModal from "./DriverModal.jsx";

const DriverTable = () => {
  const { driverData, tableLoading, onViewButton } = useContext(MyContext);
  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_, record) => (
        <Typography.Text className="capitalize">
          {displayFulllName(record.first_name, "", record.last_name)}
        </Typography.Text>
      ),
    },
    {
      title: "	LICENSE EXPIRY",
      dataIndex: "licence_expiration",
      key: "licence_expiration",
      render: (text) => (
        <Typography.Text>
          {moment(new Date(text)).format(
            import.meta.env.VITE_DATE_DISPLAY_FORMAT
          )}
        </Typography.Text>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className=" flex gap-2 text-orange-500">
          <Tooltip
            title={() => <div className="text-black">View Details</div>}
            color={"#Ce7936"}
          >
            <BsBoxArrowUpRight
              className=" mt-1"
              onClick={onViewButton(record.id)}
            />
          </Tooltip>
          <Tooltip
            title={() => <div className=" text-black">Create User Account</div>}
            color={"#Ce7936"}
          >
            <DriverModal props={record} />
          </Tooltip>
        </div>
      ),
    },
  ];
  const listRender = (record) => (
    <>
      <Typography.Paragraph strong className="capitalize">
        Name: {displayFulllName(record.first_name, "", record.last_name)}
      </Typography.Paragraph>
      <Typography.Text>
        Licence expiry:
        {moment(new Date(record.licence_expiration)).format(
          import.meta.env.VITE_DATE_DISPLAY_FORMAT
        )}
      </Typography.Text>
    </>
  );
  return (
    <>
      <Table
        loading={tableLoading}
        className="lg:block hidden mb-5"
        columns={columns}
        dataSource={driverData}
        pagination={false}
      />
      <List
        loading={tableLoading}
        className="lg:hidden block"
        data={driverData}
        onViewClick={onViewButton}
        render={listRender}
      />
    </>
  );
};

export default observer(DriverTable);
