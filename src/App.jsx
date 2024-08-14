import React from 'react';
import { useState } from 'react'
import { Layout, Button, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Logo from './components/Logo'
import MenuList from './components/MenuList'
import ToggleThemeButton from './components/ToggleThemeButton'

const { Header, Sider, Content, Footer } = Layout

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <>
    <Layout hasSider > 
      <Sider 
        className='sidebar-menu' 
        collapsed = {collapsed}
        collapsible
        trigger={null}
        theme={darkTheme? 'dark': 'light'}
        style={{ position: 'fixed'}}
      > 
        <Logo />
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton 
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
      </Sider>
      <Layout
        className={`content-main ${collapsed ? 'content-collapsed' : ''}`}
      >
        <Header 
          style={{ 
            padding: 0, 
            background: colorBgContainer
          }}
        >
          
          <Button
            className='toggle'
            onClick={() => setCollapsed(!collapsed)}
            type='text'
            icon={collapsed? <MenuUnfoldOutlined />: <MenuFoldOutlined />} 
          />
        </Header>
        <Content style={{ margin: '24px 16px 16px', overflow: 'initial' }}>
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
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </>
  )
}

export default App
