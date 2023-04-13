import { useContext } from "react";

// third party libraries
import { Button, Table } from "antd";
import Typography from "antd/es/typography/Typography.js";
import { observer } from "mobx-react";
import moment from "moment";

// context
import { MyContext } from "../../../context/context.jsx";

// helpers
import { displayFulllName } from "../../../helper/name.cjs";

// components
import List from "../../etc/list.jsx";
import { useNavigate } from "react-router-dom";
import { toJS } from "mobx";

const DriverTable = () => {
  const { driverData, tableLoading } = useContext(MyContext);
  const navigate = useNavigate();
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
        <Button
          type="link"
          onClick={() =>
            navigate("/admin/driver-view-details", {
              state: { ...toJS(record) },
            })
          }
        >
          View Details
        </Button>
      ),
    },
  ];
  const listRender = (record) => (
    <>
      <Typography.Paragraph strong className="capitalize">
        Name: {displayFulllName(record.first_name, "", record.last_name)}
      </Typography.Paragraph>
      <Typography.Text>
        Licence expiry:{" "}
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
        render={listRender}
      />
    </>
  );
};

export default observer(DriverTable);
