import {
  Button,
  Card,
  Typography,
  Divider,
  Form,
  Input,
  DatePicker,
  Select,
  Radio,
  Upload,
  InputNumber,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { update_employee } from "../../../graphql/mutation.cjs";
import { useMutation } from "@apollo/client";
import moment from "moment";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChangeProfile from "../../../components/admin/employee/driverView/changeProfile";
import DriverFormLayout from "../../../components/admin/employee/formLayout/driverFormLayout.jsx";
import EditUserModal from "../../../components/admin/employee/editUserModal.jsx";
const DriverViewDetails = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let data = location.state;
  const [imageToView, setImageToView] = useState(data?.profile_pic);
  useEffect(() => {
    if (location?.state) {
      form.setFieldsValue({
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        birth_date: data.birth_date,
        birth_place: data.birth_place,
        height: data.height,
        weight: data.weight,
        religion: data.religion,
        gender: data.gender,
        civil_status: data.civil_status,
        employee_type: data.employee_type,
        email: data.email,
        mobile_number: data.mobile_no,
        telephone_number: data.telephone,
        license_number: data.licence_number,
        expiration_date: moment(data.licence_expiration),
        license_attachment: data.license_attachment,
      });
    }
  }, []);

  const [updateEmployee] = useMutation(update_employee.UPDATE_EMPLOYEE);
  const updateDriver = (values) => {
    updateEmployee({
      variables: {
        id: data.id,
        set: {
          profile_pic: imageToView,
          first_name: values.first_name,
          middle_name: values.middle_name,
          last_name: values.last_name,
          civil_status: values.civil_status,
          weight: values.weight,
          height: values.height,
          gender: values.gender,
          religion: values.religion,
          employee_type: values.employee_type,
          email: values.email,
          mobile_no: values.mobile_number,
          telephone: values.telephone_number,
          licence_number: values.licence_number,
          licence_expiration: moment(values.expiration_date),
        },
      },
    }).then(() => navigate("/admin/driver-list"));
  };
  const changeProfile = (
    <ChangeProfile
      form={form}
      setImageToView={setImageToView}
      imageToView={imageToView}
    />
  );
  return (
    <Form
      onFinish={updateDriver}
      form={form}
      labelWrap={true}
      labelCol={{ span: 8 }}
    >
      <DriverFormLayout uploadPhotoForm={changeProfile}>
        {
          <div className=" flex gap-4">
            <Button type="primary" ghost htmlType="submit">
              Save
            </Button>
            <EditUserModal props={data} />
          </div>
        }
      </DriverFormLayout>
    </Form>
  );
};

export default DriverViewDetails;
