import { useContext, useState } from "react";

// third party libraries

import { Table, Tooltip } from "antd";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";
import Typography from "antd/es/typography/Typography.js";
import moment from "moment";

// context

import { MyContext } from "../../../context/context.jsx";

//mobx

import { observer } from "mobx-react";

// helpers

import { displayFulllName } from "../../../helper/name.cjs";

// components

import List from "../../etc/list.jsx";
import DriverModal from "./DriverModal.jsx";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../../graphql/query.cjs";

const DriverTable = () => {
  const { driverData, tableLoading, onViewButton } = useContext(MyContext);
  const [modalIdOpen, setModalIdOpen] = useState(null);
  const { loading: LoadingUser, data: DataUser, refetch } = useQuery(GET_USER);

  const columns = [
    {
      title: "Name",
      key: "name",
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
      filters: [],
      onFilter: (value, record) =>
        moment(record.licence_expiration)
          .format("YYYY-MM-DD")
          .indexOf(value) === 0,
      sorter: (a, b) =>
        moment(a.licence_expiration).valueOf() -
        moment(b.licence_expiration).valueOf(),
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
          <div className=" flex gap-5 text-orange-500">
            <Tooltip
              title={() => <div className="text-black">View Details</div>}
              color="#ffcc84"
            >
              <BsBoxArrowUpRight
                fontSize={20}
                onClick={onViewButton(record.id)}
              />
            </Tooltip>
            <Tooltip
              title={() => (
                <div className=" text-black">Create User Account</div>
              )}
              color="#ffcc84"
            >
              <FiUserPlus
                fontSize={20}
                visibility={filteredId[0]?.id ? " hidden" : "visible"}
                onClick={() => setModalIdOpen(record.id)}
              />
            </Tooltip>
          </div>
        );
      },
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
      <DriverModal
        key={modalIdOpen}
        modalIdOpen={modalIdOpen}
        setModalIdOpen={setModalIdOpen}
        refetch={refetch}
      />
    </>
  );
};

export default observer(DriverTable);
