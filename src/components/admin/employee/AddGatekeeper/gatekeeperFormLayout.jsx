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
const { Text } = Typography;
const GatekeeperFormLayout = ({
  children,
  uploadPhotoForm,
  mutationFunction,
  form,
  topCard,
}) => {
  const rules = {
    first_name: [{ required: true, message: "First name is required!" }],
    middle_name: [{ required: true, message: "Middle name is required!" }],
    last_name: [{ required: true, message: "Last name is required!" }],
    birth_place: [{ required: true, message: "Place of birth is required!" }],
    birth_date: [{ required: true, message: "Birth date is required!" }],
    employee_type: [
      { required: true, message: "Please select employee type!" },
    ],
    expiration_date: [
      { required: true, message: "Expiration date is required!" },
    ],
    license_attachment: [
      { required: true, message: "License attachment is required!" },
    ],
    email: [{ type: "email" }],
    phoneNumber: [
      () => ({
        validator(_, value) {
          if (!value || phoneNumberSyntax(value)) {
            return Promise.resolve();
          }
          if (!phoneNumberSyntax(value)) {
            return Promise.reject(
              new Error("Please input correct phone number syntax")
            );
          }
        },
      }),
    ],
    telephone: [
      () => ({
        validator(_, value) {
          if (!value || telephoneNumberSyntax(value)) {
            return Promise.resolve();
          }
          if (!telephoneNumberSyntax(value)) {
            return Promise.reject(
              new Error("Please input correct telephone number syntax")
            );
          }
        },
      }),
    ],
  };
  const styles = {
    title: {
      fontWeight: "bolder",
    },
  };

  const employeeTypes = [{ value: "gatekeeper", label: "Gatekeeper" }];
  const religions = [{ value: "catholic", label: "Catholic" }];
  const civilStatus = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "separated", label: "Separated" },
    { value: "widowed", label: "Widowed" },
  ];
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  function phoneNumberSyntax(str) {
    return /^(09|\+639)\d{9}$/.test(str);
  }
  function telephoneNumberSyntax(str) {
    return /\d{4}\-\d{4}$/.test(str);
  }
  return (
    <Form
      onFinish={mutationFunction}
      labelWrap={true}
      labelCol={{ span: 8 }}
      form={form}
    >
      {topCard}
      <Card className="mb-5">
        <div className="block lg:flex justify-between w-full flex-col">
          <div className=" flex justify-between">
            <Typography.Title className="block" level={4} style={styles.title}>
              Details
            </Typography.Title>
            {children}
          </div>
          <div className=" flex px-5 py-5 flex-col">
            <div className=" flex flex-row gap-2">
              {uploadPhotoForm}
              <Text className=" w-44" type="secondary">
                Recommended resolution is 640*640 with file size less than 2MB,
                keep visual element centered
              </Text>
            </div>
            <div className=" grid grid-cols-3  max-w-6xl gap-2">
              <Form.Item
                label="First Name"
                name="first_name"
                rules={rules.first_name}
                labelCol={{ span: 11 }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Middle Name"
                name="middle_name"
                rules={rules.middle_name}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="last_name"
                rules={rules.last_name}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Date of Birth"
                name="birth_date"
                rules={rules.birth_date}
                labelCol={{ span: 11 }}
              >
                <DatePicker className=" w-full" />
              </Form.Item>
              <Form.Item
                label="Place of Birth"
                name="birth_place"
                rules={rules.birth_place}
                className=" col-span-2"
                labelCol={{ span: 4 }}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Height" name="height" labelCol={{ span: 11 }}>
                <InputNumber controls={false} className="w-full" />
              </Form.Item>
              <Form.Item label="Weight" name="weight">
                <InputNumber controls={false} className="w-full" />
              </Form.Item>
              <Form.Item label="Religion" name="religion">
                <Select placeholder="Select Religion" options={religions} />
              </Form.Item>
              <Form.Item
                label="Gender"
                name="gender"
                labelCol={{ span: 11 }}
                initialValue="male"
                className=" col-span-1 xs:col-span-3 "
              >
                <Radio.Group>
                  {genders.map((g) => (
                    <Radio.Button key={g.value} value={g.value}>
                      {g.label}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Civil Status"
                name="civil_status"
                className=" col-span-2 xs:col-span-3"
                initialValue="single"
                labelCol={{ span: 4 }}
              >
                <Radio.Group>
                  {civilStatus.map((cs) => (
                    <Radio.Button key={cs.value} value={cs.value}>
                      {cs.label}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label="Employee Type"
                name="employee_type"
                rules={rules.employee_type}
                labelCol={{ span: 11 }}
              >
                <Select
                  placeholder="Select Employee Type"
                  options={employeeTypes}
                />
              </Form.Item>
            </div>
          </div>
          <Divider />
          <Typography.Title className="block" level={4} style={styles.title}>
            Contact information
          </Typography.Title>
          <div className=" grid grid-cols-1 sm:grid-cols-3 px-5 py-5 flex-col  max-w-6xl">
            <div className=" grid-cols-1">
              <Form.Item
                label="Email"
                name="email"
                labelCol={{ span: 11 }}
                rules={rules.email}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mobile Number"
                name="mobile_number"
                labelCol={{ span: 11 }}
                rules={rules.phoneNumber}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Telephone Number"
                name="telephone_number"
                labelCol={{ span: 11 }}
                rules={rules.telephone}
              >
                <Input />
              </Form.Item>
            </div>
          </div>
        </div>
      </Card>
    </Form>
  );
};

export default GatekeeperFormLayout;
