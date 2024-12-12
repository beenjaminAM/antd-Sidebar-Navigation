import React from 'react'
import { Button } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const ToggleCollapsedButton = ({ collapsed, toggleCollapsed }) => {
  return (
    <Button
        className='toggle'
        onClick={toggleCollapsed}
        type='text'
        icon={collapsed? <MenuUnfoldOutlined />: <MenuFoldOutlined />} 
     />
  )
}

export default ToggleCollapsedButton