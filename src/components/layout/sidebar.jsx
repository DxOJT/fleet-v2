import React, { useEffect } from 'react';

// third party libraries
import { CloseOutlined } from '@ant-design/icons';
import { Button, Drawer, Menu, theme, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { IoHome } from 'react-icons/io5';
import {
  FaUserShield,
  FaUserFriends,
  FaRegBuilding,
  FaCarSide,
  FaUserInjured,
  FaFileInvoice,
  FaTaxi,
  FaWarehouse,
  FaRegHandshake,
  FaGasPump,
} from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

// helpers
import { getItem } from '../../helper/navitem.cjs';

//custom hooks
import { useAuth } from '../../hooks/useAuth';

const SidebarContent = ({ isMobileView, collapsed, setCollapsed }) => {
  // data
  const navigate = useNavigate();
  const location = useLocation();
  const { userRole } = useAuth();
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();
  const items = [
    getItem('Dashboard', `/${userRole}`, <IoHome />),
    getItem('Owner', '#', <FaUserShield />),
    getItem('Employee', 'sub1', <FaUserFriends />, [
      getItem('Driver', '/admin/driver-list', <FaUserFriends />),
      getItem('Gatekeeper', '#', <HiOutlineUsers />),
    ]),
    getItem('Company', '#', <FaRegBuilding />, []),
    getItem('Vehicles', '#', <FaCarSide />, []),
    getItem('Insurance', '#', <FaUserInjured />),
    getItem('Inventory', '#', <FaFileInvoice />, []),
    getItem('Taxi', '#', <FaFileInvoice />),
    getItem('Garage', '#', <FaWarehouse />),
    getItem('Transaction', '#', <FaRegHandshake />, []),
    getItem('Fuel', '#', <FaGasPump />),
    getItem('Settings', '#', <FiSettings />, []),
  ];
  // functions
  const hadelDrawerOnClose = () => {
    setCollapsed(true);
  };
  const handleMenuClick = ({ key }) => {
    navigate(key);
  };
  const handleMenuMobileClick = ({ key }) => {
    navigate(key);
    hadelDrawerOnClose();
  };

  return (
    <>
      {isMobileView ? (
        <Sider
          theme="dark"
          width={220}
          style={{
            background: colorBgContainer,
          }}
          collapsed={collapsed}
        >
          <div className="flex w-full justify-center items-center h-16 px-2">
            <img src="/fleettaxilogo.png" width="50px" height="50px" />
            {!collapsed && (
              <Typography.Title style={{ margin: 0 }} level={5}>
                Fleet Management
              </Typography.Title>
            )}
          </div>
          <Menu mode="inline" items={items} onClick={handleMenuClick} defaultSelectedKeys={location.pathname} />
        </Sider>
      ) : (
        <Drawer
          title={
            <div className="flex w-full justify-center items-center">
              <img src="/fleettaxilogo.png" width="100px" height="100px" />
              <Typography.Title level={3}>Fleet Management</Typography.Title>
            </div>
          }
          placement="left"
          open={!collapsed}
          width="100%"
          onClose={hadelDrawerOnClose}
          closable={false}
          extra={
            <Button type="text" className="mr-2" danger onClick={hadelDrawerOnClose}>
              <CloseOutlined className=" text-lg" />
            </Button>
          }
        >
          <Menu mode="inline" items={items} onClick={handleMenuMobileClick} defaultSelectedKeys={location.pathname} />
        </Drawer>
      )}
    </>
  );
};

export default SidebarContent;
