import React from 'react'
import { useState } from 'react'
import { Layout, Button, theme } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import Logo from '../components/Logo'
import MenuList from '../components/MenuList'
import ToggleThemeButton from '../components/ToggleThemeButton'

const { Header, Sider, Content, Footer } = Layout

const LayoutApp = (  ) => {
  const [collapsed, setCollapsed] = useState(false)
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken()

  return (
    <Layout className='layoutapp' >
      <Sider
        className='sidebar-menu' 
        collapsed = {collapsed}
        collapsible
        trigger={null}
        theme={darkTheme? 'dark': 'light'}
      > 
        <Logo />
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton
          darkTheme={darkTheme}
          toggleTheme={toggleTheme}
        />
      </Sider>
      <Layout
        // className={`content-main ${collapsed ? 'content-collapsed' : ''}`}
        className='content-main'
      >
        <Header 
          style={{ 
            padding: 0, 
            background: 'rgba(255, 255, 255, 0.8)',
            position: 'sticky',
            backdropFilter: 'blur(10px)',
            top: '0',
          }}
        >
          <Button
            className='toggle'
            onClick={() => setCollapsed(!collapsed)}
            type='text'
            icon={collapsed? <MenuUnfoldOutlined />: <MenuFoldOutlined />} 
          />
        </Header>
        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 0
          }}
        >
          <div  className='contentapp'>
          {
              // indicates very long content
              Array.from({ length: 1 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            }
          </div>
          <Footer style={{ textAlign: 'center', background: 'brown' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED        
          </Footer>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutApp