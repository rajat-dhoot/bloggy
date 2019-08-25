import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mongo from "../../static/mongo.png";
import express from "../../static/express.png";
import react from "../../static/react.png";
import node from "../../static/node.png";
import "./Landing.css";

const Landing = () => (
   <Container
      style={{ height: "75vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
   >
      {" "}
      <Row className="mb-4">
         <p className="text-secondary h3"> Blogging Application</p>
      </Row>
      <Row>
         <Col>
            <img src={mongo} alt="mongo" className="img-fluid" />
         </Col>
         <Col>
            <img src={express} alt="express" className="img-fluid" />
         </Col>
         <Col>
            <img src={react} alt="react" className="img-fluid" />
         </Col>
         <Col>
            <img src={node} alt="node" className="img-fluid" />
         </Col>
      </Row>
   </Container>
);

export default Landing;
