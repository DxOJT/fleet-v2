import { useContext } from "react";

// third party libraries
import { Tooltip, Table } from "antd";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
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
        <div className="flex gap-8 ">
          <Tooltip
            title={() => <div className=" text-gray-900">View details</div>}
            color="#ffcc84"
          >
            <BsBoxArrowUpRight
              fontSize={20}
              color="#Ce7936"
              type="link"
              onClick={() =>
                navigate("/admin/driver-view-details", {
                  state: { ...toJS(record) },
                })
              }
            />
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
