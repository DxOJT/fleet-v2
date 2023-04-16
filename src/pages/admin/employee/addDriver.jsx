import { Button, Card, Typography, Form } from "antd";
import UploadProfile from "../../../components/admin/employee/addDriver/uploadProfile";
import { add_employee } from "../../../graphql/mutation.cjs";
import { useMutation } from "@apollo/client";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DriverFormLayout from "../../../components/admin/employee/formLayout/driverFormLayout";
const AddDriver = () => {
  const navigate = useNavigate();
  const [imageToView, setImageToView] = useState(null);
  const [form] = Form.useForm();
  const [addEmployee, { data, loading, error }] = useMutation(
    add_employee.ADD_EMPLOYEE
  );

  const styles = {
    title: {
      fontWeight: "bolder",
    },
  };

  //to insert new employee (onFinish of the form)
  const submitDriver = (values) => {
    addEmployee({
      variables: {
        licence_expiration: moment(values.expiration_date),
        civil_status: values.civil_status,
        email: values.email,
        first_name: values.first_name,
        height: values.height?.toString(),
        last_name: values.last_name,
        licence_number: values.license_number,
        middle_name: values.middle_name,
        mobile_no: values.mobile_number,
        profile_pic: imageToView,
        religion: values.religion,
        telephone: values.telephone_number,
        weight: values.weight?.toString(),
        employee_type: values.employee_type,
        gender: values.gender,
      },
    }).then(() => navigate("/admin/driver-list"));
  };
  const uploadPhoto = (
    <UploadProfile
      form={form}
      imageToView={imageToView}
      setImageToView={setImageToView}
    />
  );
  return (
    <Form
      onFinish={submitDriver}
      form={form}
      labelWrap={true}
      labelCol={{ span: 8 }}
    >
      <Card className="mb-5">
        <div className="block lg:flex justify-between w-full">
          <Typography.Title
            className="block"
            level={4}
            style={{ margin: 0, ...styles.title }}
          >
            Add Driver
          </Typography.Title>
          <div className="block lg:flex items-center">
            <Button
              className="w-full lg:w-auto my-5 lg:mr-5 lg:my-0 px-14"
              type="primary"
              ghost
              htmlType="submit"
            >
              Save
            </Button>
          </div>
        </div>
      </Card>
      <DriverFormLayout uploadPhotoForm={uploadPhoto} />
    </Form>
  );
};

export default AddDriver;
