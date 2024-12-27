import React, { useState } from 'react';

import Logo from '../components/Logo'
import ToggleCollapsedButton from '../components/ToggleCollapsedButton';
import MenuList from '../components/MenuList'

import { Layout, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
  zIndex: 1,
  transition: '0.3s',
};

const LayoutApp = ({width}) => {

  const [collapsed, setCollapsed] = useState(true)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <Layout hasSider>
      <Sider 
        style={siderStyle}
        width={
          width < 768? collapsed?0:width
            : width < 992? collapsed?0:200
              : 200
        }
        collapsible
        collapsed = {width >= 992 ? collapsed: false}
        trigger={null}
      >
        <div style={{
          padding: '0.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: width < 992 ? 'space-between': 'center'
        }}>
          <Logo />
          {width < 992 && <ToggleCollapsedButton
              collapsed={collapsed}
              toggleCollapsed={toggleCollapsed}
              dark={true}
              mobile={false}
          />}
        </div>
        <MenuList/>
      </Sider>
      <Layout
        style={{
          backgroundColor: '#121212',
          color: '#ff00ff',
          marginInlineStart: width < 768? 0
          : width < 992? 0
            : collapsed? 80: 200,
          transition: '0.3s'
        }}
      >
        <Header
          style={{
            padding: '0 1rem',
            background: colorBgContainer,
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: '0',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* {collapsed && width < 992 &&
            <ToggleCollapsedButton
              collapsed={collapsed}
              toggleCollapsed={toggleCollapsed}
              mobile={width < 768? true: false }
            />
          }
          {width >= 992 &&
            <ToggleCollapsedButton
              collapsed={collapsed}
              toggleCollapsed={toggleCollapsed}
              mobile={width < 768? true: false }
            />
          } */}
          <ToggleCollapsedButton
              collapsed={collapsed}
              toggleCollapsed={toggleCollapsed}
              mobile={width < 768? true: false }
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {
              // indicates very long content
              Array.from(
                {
                  length: 100,
                },
                (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ),
              )
            }
          </div>
        </Content>
        <Footer>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutApp;