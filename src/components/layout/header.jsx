import React, { useState } from 'react';

// third party libraries
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
  ExclamationCircleOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Divider, Dropdown, Modal, Space, Typography, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';

// custom hooks
import { useAuth } from '../../hooks/useAuth';

const LayoutHeader = ({ collapsed, setCollapsed }) => {
  // data
  const {
    token: { colorBgContainer, colorPrimary, colorBgElevated, borderRadiusLG, boxShadowSecondary },
  } = theme.useToken();
  const { logout, userName, userRole } = useAuth();
  const { confirm } = Modal;
  const { Text } = Typography;
  const contentStyle = {
    backgroundColor: colorBgElevated,
    borderRadius: borderRadiusLG,
    boxShadow: boxShadowSecondary,
  };
  const menuStyle = {
    boxShadow: 'none',
  };
  const items = [
    {
      label: 'Profile',
      key: '1',
    },
    {
      label: 'Settings',
      key: '2',
    },
    {
      label: 'Billing',
      key: '3',
    },
  ];

  // function
  const toggleSideBar = () => {
    setCollapsed((collapsed) => !collapsed);
  };
  const handleLogout = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: 'Are you Sure youy want to logout',
      zIndex: 100000,
      onOk() {
        logout();
      },
      onCancel() {},
    });
  };
  const dropdownRender = (menu) => (
    <div style={contentStyle}>
      {React.cloneElement(menu, {
        style: menuStyle,
      })}
      <Divider
        style={{
          margin: 0,
        }}
      />
      <Space className="p-1 w-full">
        <Button
          danger
          className="w-full"
          style={{ paddingRight: 12, paddingLeft: 12 }}
          type="text"
          onClick={handleLogout}
        >
          Sign out!
        </Button>
      </Space>
    </div>
  );

  return (
    <Header
      className="p-0"
      style={{
        background: colorBgContainer,
      }}
    >
      <div className="flex justify-between px-5 h-full">
        <div>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleSideBar,
          })}
        </div>
        <div className="flex items-center h-full">
          <Button type="text" className="mr-2">
            <BellOutlined className=" text-lg" />
          </Button>
          <Dropdown menu={{ items }} dropdownRender={dropdownRender} trigger="click">
            <div className="h-full flex flex-nowrap items-center">
              <Avatar
                style={{
                  backgroundColor: colorPrimary,
                  verticalAlign: 'middle',
                }}
                size="large"
                src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                gap={4}
              />
              <div className="flex flex-col items-center self-center mx-2">
                <Text strong className="w-full capitalize">
                  {userName}
                </Text>
                <Text className="w-full text-sm font-light capitalize">{userRole}</Text>
              </div>
              <DownOutlined />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default LayoutHeader;
