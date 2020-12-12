import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Card, Form, Input, Rate, Button } from "antd";

const { Meta } = Card;

const FormContainer = () => {
  return (
    <Card style={{ marginTop: "2rem" }}>
      <h3>¡Manda tu review!</h3>
      <Form layout="vertical">
        <Form.Item label="Calificación">
          <Rate />
        </Form.Item>
        <Form.Item label="Pros">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Contras">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Comentarios generales de la empresa">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Enviar review</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

const Comment = () => {
  return (
    <Card style={{ marginTop: "1rem" }}>
      <Meta title="Nombre Apellido" description="Hace x días" />
      <Rate
        allowHalf
        defaultValue={Math.random() * 5}
        style={{ marginTop: "1rem" }}
      />
    </Card>
  );
};

const Comments = () => {
  const q = Math.floor(Math.random() * 10);
  const items = Array.from(Array(q).keys());

  const { isAuth } = useContext(AuthContext);

  return (
    <>
      {items.map(() => (
        <Comment />
      ))}

      {isAuth && <FormContainer />}
    </>
  );
};

export default Comments;
