import React from 'react'
import { useState } from 'react'
import { Layout, theme } from 'antd'

import Logo from '../components/Logo'
import MenuList from '../components/MenuList'
import ToggleThemeButton from '../components/ToggleThemeButton'
import ToggleCollapsedButton from '../components/ToggleCollapsedButton'

const { Header, Sider, Content, Footer } = Layout

const LayoutApp = (  ) => {
  const [collapsed, setCollapsed] = useState(false)
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
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
          <ToggleCollapsedButton
            collapsed={collapsed}
            toggleCollapsed={toggleCollapsed}
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
              Array.from({ length: 100 }, (_, index) => (
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