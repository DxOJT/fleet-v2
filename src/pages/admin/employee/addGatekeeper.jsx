import { Button, Card, Typography, Form } from "antd";
import UploadProfile from "../../../components/admin/employee/addDriver/uploadProfile";
import { add_employee } from "../../../graphql/mutation.cjs";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GatekeeperFormLayout from "../../../components/admin/employee/AddGatekeeper/gatekeeperFormLayout";
const AddGatekeeper = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [imageToView, setImageToView] = useState(null);
  const [addEmployee, { data, loading, error }] = useMutation(
    add_employee.ADD_EMPLOYEE
  );

  const styles = {
    title: {
      fontWeight: "bolder",
    },
  };

  //to insert new employee (onFinish of the form)
  const addGatekeeper = (values) => {
    addEmployee({
      variables: {
        civil_status: values.civil_status,
        email: values.email,
        first_name: values.first_name,
        height: values.height?.toString(),
        last_name: values.last_name,
        middle_name: values.middle_name,
        mobile_no: values.mobile_number,
        profile_pic: imageToView,
        religion: values.religion,
        telephone: values.telephone_number,
        weight: values.weight?.toString(),
        employee_type: values.employee_type,
        gender: values.gender,
      },
    }).then(() => navigate("/admin/gatekeeper-list"));

    console.log(values);
  };

  const topCard = (
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
  );

  const uploadPhoto = (
    <UploadProfile
      form={form}
      imageToView={imageToView}
      setImageToView={setImageToView}
    />
  );
  return (
    <GatekeeperFormLayout
      uploadPhotoForm={uploadPhoto}
      mutationFunction={addGatekeeper}
      form={form}
      topCard={topCard}
    />
  );
};

export default AddGatekeeper;
