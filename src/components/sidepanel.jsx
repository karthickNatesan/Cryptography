import React from "react";
import { Layout } from "antd";
import img from "./img3.jpg";
import img2 from "./img2.jpg";

import { Menu, Button } from "antd";
import { MenuOutlined, TableOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Panel = ({ setCipher, cipher, collapsed, setcollapsed, setExit, exit, setDecrypt}) => {

const collapseLogic = () => {
	setcollapsed(!collapsed)
	if(exit){
	setExit(!exit)
	setcollapsed(true)
}
}

  return (
    <Sider
      style={{ backgroundImage: `url(${img2})` }}
      collapsible
      collapsed={collapsed}
      onCollapse={() => collapseLogic()}
      width = "350"
    >
      <div className="logo" />
      <Menu
        style={{ marginTop: "10vh", 
       }}
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item  style = {{fontWeight: "bold"}}key="1" icon={<MenuOutlined />}>
          Select below Cipher
          
        </Menu.Item>
          <SubMenu  key="2"
          icon={<TableOutlined />}
          onClick={() => setCipher("railfence")}
          style = {{fontWeight: "bold"}} title="RailFence Cipher">
              <Menu.Item key="3"  onClick={() => setDecrypt(false)} >Encryption</Menu.Item>
              <Menu.Item key="4" onClick={() => setDecrypt(true)}>Decryption</Menu.Item>
            </SubMenu>
            <SubMenu  key="5"
          icon={<TableOutlined />}
          onClick={() => setCipher("des")}
          style = {{fontWeight: "bold"}} title="DES Cipher">
              <Menu.Item key="6"  onClick={() => setDecrypt(false)} >Encryption</Menu.Item>
              <Menu.Item key="7" onClick={() => setDecrypt(true)}>Decryption</Menu.Item>
            </SubMenu>

        <Menu.Item style = {{fontWeight: "bold"}} key="5" icon={<CloseOutlined />} onClick={() => {setExit(!exit)}}>
          Exit
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Panel;
