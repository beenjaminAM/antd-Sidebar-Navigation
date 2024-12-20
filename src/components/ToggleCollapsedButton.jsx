import React from 'react'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const ToggleCollapsedButton = ({ collapsed, toggleCollapsed, dark, mobile }) => {
  return (
    <Button
        className={`toggle ${dark ? 'toggle-dark': ''} ${mobile ? 'toggle-mobile': ''}`}
        id={`${dark ? 'toggle-dark-id': ''}`}
        onClick={toggleCollapsed}
        type='text'
        icon={collapsed? <MenuUnfoldOutlined />: <MenuFoldOutlined />}  
     />
  )
}

export default ToggleCollapsedButton