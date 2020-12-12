import { useContext } from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const { Header, Content } = Layout;

const DefaultLayout = (props) => {
  const { isAuth } = useContext(AuthContext);
  const history = useHistory();

  const goTo = (route) => {
    history.push(route);
  };
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1" onClick={() => goTo("/")}>
            inicio
          </Menu.Item>
          {!isAuth && (
            <Menu.Item key="2" onClick={() => goTo("/login")}>
              login
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: "2rem 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
