// third party libraries
import { Button, Card, Form, Input, notification, theme } from 'antd';

// libs
import { post } from '../lib/axios.cjs';
import { useAuth } from '../hooks/useAuth.jsx';

const LoginPage = () => {
  // data
  const [notificationObject, notificationContextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const { login } = useAuth();
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  const rules = {
    email: [
      {
        required: true,
        message: 'Please enter your email address!',
      },
      {
        type: 'email',
        message: 'Please enter a valid email address.',
      },
    ],
    password: [
      {
        required: true,
        message: 'Please enter your password!',
      },
      {
        validator: (_, value) => {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,})/;
          if (!regex.test(value)) {
            return Promise.reject(new Error('Please enter valid password!'));
          }
          return Promise.resolve();
        },
      },
    ],
  };

  const openNotificationWithIcon = (type, title) => {
    notificationObject[type]({
      message: title,
    });
  };

  const handleFormFinish = async (data) => {
    const { email, password } = data;
    try {
      const response = await post('/auth/login', {
        email,
        password,
      });
      if (response.data.token) {
        openNotificationWithIcon('success', 'Login Success.');
        login(response.data.token);
      }
    } catch (error) {
      console.log('asdjh');
      form.setFields([
        {
          name: 'email',
          vaule: email,
          warnings: ['Invalid Email or Password!'],
        },
        {
          name: 'password',
          vaule: password,
          warnings: ['Invalid Email or Password!'],
        },
      ]);
      openNotificationWithIcon('error', 'Invalid Username or Password!');
    }
  };

  return (
    <div
      style={{
        backgroundColor: colorBgLayout,
      }}
      className="flex justify-center items-center h-screen w-screen"
    >
      {notificationContextHolder}
      <Card className="md:w-1/4">
        <div className="flex justify-center">
          <img src="/fleettaxilogo.png" width="250px" height="250px" />
        </div>
        <div className="w-full">
          <Form
            form={form}
            onFinish={handleFormFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="email" rules={rules.email}>
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item name="password" rules={rules.password}>
              <Input.Password />
            </Form.Item>

            <Button type="primary" className="w-full" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
