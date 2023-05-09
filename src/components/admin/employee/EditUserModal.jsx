import React from "react";
import { Button, Modal, Form, Input, message } from "antd";
import { useContext } from "react";
import { MyContext } from "../../../context/context";
import { toJS } from "mobx";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER } from "../../../graphql/query.cjs";
import { update_user } from "../../../graphql/mutation.cjs";

const EditUserModal = ({ visible, onClose, data }) => {
  const { loading: LoadingUser, data: DataUser } = useQuery(GET_USER);
  const [updateUser] = useMutation(update_user.UPDATE_USER);

  const [form] = Form.useForm();

  const filteredID =
    !LoadingUser && DataUser.user.filter((id) => id.employee_id === data.id);

  const initialValues = {
    email: !LoadingUser && filteredID[0]?.email,
    password: "",
    confirm: "",
  };

  const validatePassword = (_, value) => {
    if (!value) {
      return Promise.reject("Please enter a password");
    }
    if (!/[a-z]/.test(value)) {
      return Promise.reject(
        "Password must contain at least one lowercase letter"
      );
    }
    if (!/[A-Z]/.test(value)) {
      return Promise.reject(
        "Password must contain at least one uppercase letter"
      );
    }
    if (!/[0-9]/.test(value)) {
      return Promise.reject("Password must contain at least one number");
    }
    if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{}|\\;':",./<>?]+$/.test(value)) {
      return Promise.reject(
        "Password can only contain letters, numbers, and special characters"
      );
    }
    if (value.length < 8) {
      return Promise.reject("Password must be at least 8 characters long");
    }
    return Promise.resolve();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleRefetch = () => {
    refetch();
  };

  const onFinish = (value) => {
    message.success("Created User Account Succesfully");

    updateUser({
      variables: {
        id: !LoadingUser && filteredID[0]?.id,
        set: { email: value.email, password: value.password },
      },
    }).then(() => {
      handleCancel();

      handleRefetch();
    });
  };

  console.log(toJS(filteredID));

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      onOk={onClose}
      title="Edit User"
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
        autoComplete="off"
        form={form}
        initialValues={initialValues}
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
              message: "Please input your E-mail For  user account !",
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
              validator: validatePassword,
            },
            {
              type: "password",
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className=" flex  justify-end gap-3">
          <Button onClick={onClose}>Cancel</Button>
          <Button
            htmlType="submit"
            className=" border-orange-600 border-1 text-orange-600"
          >
            Save
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
