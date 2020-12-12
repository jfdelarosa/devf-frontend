import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Empty, Button, Avatar } from "antd";
import { company } from "../../services";
import Comments from "../../components/Comments";

const { Meta } = Card;

const Page = (props) => {
  const description = `${props.description} en ${props.location}`;
  return (
    <>
      <Card>
        <Meta
          avatar={<Avatar src={props.profile_img}></Avatar>}
          title={props.name}
          description={description}
        />
        <div style={{ marginTop: "1rem" }}></div>
      </Card>
      <Comments></Comments>
    </>
  );
};

const NotFound = () => {
  return (
    <Empty
      style={{ margin: 0 }}
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={<span>No se encontró la compañía</span>}
    >
      <Button type="primary">Crear una</Button>
    </Empty>
  );
};

const Home = () => {
  let { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await company.get(id);
      setItem(data.data);
    };

    fetchData();
  }, [id]);

  return item ? <Page {...item}></Page> : <NotFound></NotFound>;
};

export default Home;
