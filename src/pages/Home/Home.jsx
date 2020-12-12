import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Empty, Button, Row, Col, Badge } from "antd";
import {
  CommentOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { company } from "../../services";

const { Meta } = Card;

const Company = (props) => {
  const history = useHistory();
  const viewCompany = (id) => {
    history.push(`/company/${id}`);
  };
  return (
    <Card
      style={{ width: 200 }}
      actions={[
        <LikeOutlined key="like" />,
        <Badge size="small" count={props.reviews.length}>
          <CommentOutlined
            key="comments"
            onClick={() => viewCompany(props._id)}
          />
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

  return items.length ? (
    <Row gutter={16}>
      {items.map((item, index) => (
        <Col key={index}>
          <Company {...item}></Company>
        </Col>
      ))}
    </Row>
  ) : (
    <NoCompanies></NoCompanies>
  );
};

export default Home;
