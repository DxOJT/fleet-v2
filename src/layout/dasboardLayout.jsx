import React, { useEffect, useState } from 'react';

// third party libraries
import { Grid, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useOutlet } from 'react-router-dom';

// components
import Header from '../components/layout/header';
import SidebarContent from '../components/layout/sidebar';
export default function SidebarWithHeader({ children }) {
  // data
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileView, setHidden] = useState(false);

  const outlet = useOutlet();
  const screens = Grid.useBreakpoint();

  // useEffect
  useEffect(() => {
    if (screens.lg) {
      setCollapsed(false);
    } else if (screens.md) {
      setCollapsed(true);
    } else if (screens.sm) {
      setCollapsed(true);
    }
    if (screens.sm) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [screens]);

  return (
    <Layout className="min-h-screen">
      <SidebarContent collapsed={collapsed} isMobileView={isMobileView} setCollapsed={setCollapsed} />
      <Layout className="site-layout">
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="m-5">{outlet}</Content>
      </Layout>
    </Layout>
  );
}
