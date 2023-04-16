import React from "react";
import { Modal, Input, Form, Tooltip, Button, message } from "antd";
import { FiUserPlus } from "react-icons/fi";

import { useState } from "react";
import { useContext } from "react";

import { MyContext } from "../../../context/context";
import { CREATE_USER_ACC } from "../../../graphql/CreateUserQuery.cjs";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../../../graphql/CheckUserQuery";

function DriverModal({ props }) {
  const { driverData } = useContext(MyContext);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading: LoadingUser, data: DataUser, refetch } = useQuery(GET_USER);
  const [create_user, { data, loading, error, reset }] =
    useMutation(CREATE_USER_ACC);
  const onFinish = (value) => {
    create_user({
      variables: {
        email: value.email,
        password: value.password,
        role: "Driver",
        employee_id: props.id,
      },
    });
    message.success("Created User Account Succesfully");
    handleCancel();
    handleRefetch();
  };
  const handleRefetch = () => {
    refetch();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const employeeID = props.id;
  const filteredId = !LoadingUser
    ? DataUser.user.filter((id) => id.employee_id === employeeID)
    : [];
  return (
    <div>
      <Tooltip
        title={() => <div className=" text-black">Create User Account</div>}
        color={"#Ce7936"}
      >
        <FiUserPlus
          visibility={filteredId[0]?.id ? " hidden" : "visible"}
          onClick={showModal}
        />
      </Tooltip>
      <Modal title="Create User" open={isModalOpen} footer={[]}>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            name="email"
            label="E-mail/User Name"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail for User Account!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <div className=" flex  justify-end gap-3">
            <Button onClick={handleCancel}>Cancel</Button>
            <Button
              htmlType="submit"
              className=" border-orange-600 border-1 text-orange-600"
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default DriverModal;