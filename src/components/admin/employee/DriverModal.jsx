import React from "react";
// third party libraries

import { Modal, Input, Form, Button, message } from "antd";

//graphql

import { CREATE_USER_ACC } from "../../../graphql/CreateUserQuery.cjs";
import { useMutation } from "@apollo/client";

function DriverModal({ modalIdOpen, setModalIdOpen, refetch }) {
  const [create_user] = useMutation(CREATE_USER_ACC, {
    onCompleted() {
      message.success("Created User Account Succesfully");
      setModalIdOpen(null);
      refetch();
    },
  });
  const [form] = Form.useForm();
  const onFinish = (value) => {
    create_user({
      variables: {
        email: value.email,
        password: value.password,
        role: "driver",
        employee_id: modalIdOpen,
      },
    });
  };

  return (
    <div>
      <Modal
        title="Create User"
        onCancel={() => {
          setModalIdOpen(null);
        }}
        open={modalIdOpen ? true : false}
        footer={[]}
      >
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
            <Input placeholder="Please Enter Your Email" />
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
            <Button onClick={() => setModalIdOpen(null)}>Cancel</Button>
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
