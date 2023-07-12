import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import Portfolio from "./Portfolio";
import UserList from "./UserList";

function Mainpage() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Portfolio />
        </Col>
        <Col>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
}

export default Mainpage;