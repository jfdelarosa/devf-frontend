import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Empty, Button, Row, Col, Badge } from "antd";
import {
  CommentOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { company } from "../../services";
import DefaultLayout from "../../layouts/Default";

const { Meta } = Card;

const Company = (props) => {
  const history = useHistory();
  const viewCompany = (route) => {
    history.push(route);
  };
  return (
    <Card
      style={{ width: 200 }}
      actions={[
        <LikeOutlined key="like" />,
        <Badge
          size="small"
          count={props.reviews.length}
          onClick={() => viewCompany(props.id)}
        >
          <CommentOutlined key="comments" />
        </Badge>,
        <DislikeOutlined key="dislike" />,
      ]}
    >
      <Meta title={props.name} description={props.location} />
      <div style={{ marginTop: "1rem" }}>{props.description}</div>
    </Card>
  );
};

const NoCompanies = () => {
  return (
    <Empty
      style={{ margin: 0 }}
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<span>Aún no hay reviews</span>}
    >
      <Button type="primary">Crear una</Button>
    </Empty>
  );
};

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await company.list();
      console.log(data.data);
      setItems(data.data);
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout>
      {items.length ? (
        <Row gutter={16}>
          {items.map((item) => (
            <Col>
              <Company {...item}></Company>
            </Col>
          ))}
        </Row>
      ) : (
        <NoCompanies></NoCompanies>
      )}
    </DefaultLayout>
  );
};

export default Home;
