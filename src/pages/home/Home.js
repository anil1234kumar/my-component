import React from "react";
import Footer from "../../component/footer/Footer";
import Footerbar from "../../component/footerbar/Footerbar";
import Header from "../../component/header/Header";
import Layout from "../../component/layout/Layout";
import "./Home.scss";
import Select from "react-select";
import { Form, Row, Col } from "react-bootstrap";
import Button from "../../component/button/Button";

function Home() {
  return (
    <div>
      <Layout>
        <Row>
          <Col>
            <Form.Label htmlFor="basic-url ">Your vanity URL</Form.Label>node
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
          <Col></Col>
        </Row>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
        commodi. Quos adipisci animi voluptate tenetur sapiente praesentium
        consequatur corrupti reiciendis in et exercitationem consequuntur maxime
        dignissimos excepturi placeat voluptatum sequi quod fugit pariatur modi,
        aspernatur soluta voluptatibus consectetur saepe! Molestiae, esse quam
        unde labore iusto facere et, doloribus debitis quae cum adipisci quia
        quaerat officiis, sunt eius omnis ducimus. Rem a ducimus provident
        deleniti exercitationem, quae impedit numquam quo corrupti voluptatum
        nostrum cupiditate asperiores ea? Possimus quis, impedit dicta iure
        minima sed esse quam saepe consectetur voluptatibus quasi harum delectus
        explicabo ex natus maxime ut sapiente aperiam eligendi fuga repellat ab
        aliquid? Ea, dolores! Commodi beatae aliquid assumenda, dolorem numquam
        amet illum quas quisquam minima saepe placeat possimus fugit aut. hellow
        how are you
        <Button />
        <Button className="design-btn " />
      </Layout>
    </div>
  );
}

export default Home;
