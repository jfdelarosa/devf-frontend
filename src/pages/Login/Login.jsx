import React, { Fragment, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Card, Form, Input, Button } from "antd";
import { auth } from "../../services";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { logIn, isAuth } = useContext(AuthContext);

  const onFinish = async (obj) => {
    const { data } = await auth.login(obj);
    logIn(data.token);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <Card style={{ width: 300, margin: "0 auto" }}>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Ingresa tu email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Ingresa tu contraseña!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {isAuth && <Redirect to="/" />}
    </Fragment>
  );
};

export default Login;
