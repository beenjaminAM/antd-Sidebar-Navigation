import { Menu } from 'antd'
import { 
  HomeOutlined,
  AppstoreAddOutlined,
  AreaChartOutlined,
  RubyOutlined,
  BarsOutlined
 } from '@ant-design/icons'

const MenuList = ({ darkTheme }) => {

  const subtaks = [
    {
      key: 'task1',
      icon: <AreaChartOutlined />,
      label: 'Task 1'
    },
    {
      key: 'task2',
      icon: <RubyOutlined />,
      label: 'Task 2'
    }
  ]
  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home'
    },
    {
      key: 'activity',
      icon: <AppstoreAddOutlined />,
      label: 'Activity'
    },
    {
      key: 'progress',
      icon: <AreaChartOutlined />,
      label: 'Progress'
    },
    {
      key: 'tasks',
      icon: <BarsOutlined />,
      label: 'Tasks',
      children: subtaks 
    },
    {
      key: 'payment',
      icon: <RubyOutlined />,
      label: 'Payment',
      danger: 'True'
    }
  ]

  return (
    <Menu 
      className='menu-bar' 
      theme={darkTheme? 'dark': 'light'}
      mode='inline'
      items={menuItems}
    />
  )
}

export default MenuList