import React, { useState, useContext } from "react";
import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const CommentCard = () => {
  const [currentKey, setKey] = useState("");

  const handleClick = (e) => {
    setKey(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[currentKey]} mode="horizontal">
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
  );
};

export default CommentCard;
