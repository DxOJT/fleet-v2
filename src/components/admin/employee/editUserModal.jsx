import { Button, Modal, Form, Input, message } from "antd";
import { useState } from "react";
import { GET_USER } from "../../../graphql/CheckUserQuery";
import { useMutation, useQuery } from "@apollo/client";
import { toJS } from "mobx";
import { update_user } from "../../../graphql/editUser.cjs";

const EditUserModal = ({ props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [updateUser] = useMutation(update_user.UPDATE_USER);
  const { loading: LoadingUser, data: DataUser, refetch } = useQuery(GET_USER);
  console.log(toJS(props.id));

  const employeeID = props.id;
  const filteredId = !LoadingUser
    ? DataUser.user.filter((id) => id.employee_id === employeeID)
    : [];
  console.log(toJS(!LoadingUser && filteredId[0]?.id));
  const visibility = filteredId[0]?.id ? " visible" : "hidden";

  const initialValues = {
    email: !LoadingUser && filteredId[0]?.email,
    password: "",
    confirmPassword: "",
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

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
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
        id: !LoadingUser && filteredId[0]?.id,
        set: { email: value.email, password: value.password },
      },
    }).then(() => {
      handleCancel();

      handleRefetch();
    });
  };

  return (
    <>
      <div className={visibility}>
        <Button className=" h-7  text-xs " type="primary" onClick={showModal}>
          Edit Credentials
        </Button>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        {" "}
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
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
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
    </>
  );
};
export default EditUserModal;
