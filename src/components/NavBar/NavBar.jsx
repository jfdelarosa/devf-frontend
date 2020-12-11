import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'
import {
  Link
} from 'react-router-dom'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,} from '@ant-design/icons';

const { SubMenu } = Menu;

const handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

 const CommentCard = () => {
      const { current } = this.state;
  return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <SubMenu
              key="SubMenu"
              icon={<SettingOutlined />}
              title="Navigation Three - Submenu"
          >
              <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
          </SubMenu>
      </Menu>
  )
}

export default CommentCard