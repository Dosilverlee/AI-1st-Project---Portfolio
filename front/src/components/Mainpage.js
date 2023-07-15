import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { UserStateContext } from "../App";

import Portfolio from "./Portfolio";
import Network from "./user/Network";

function Mainpage() {
  const navigate = useNavigate();
  const params = useParams();
  const userState = useContext(UserStateContext);

  useEffect(() => {
    // 전역 상태의 user가 null이라면 로그인이 안 된 상태이므로, 로그인 페이지로 돌림.
    if (!userState.user) {
      navigate("/login", { replace: true });
      return;
    }
  }, [params, userState, navigate]);

  return (
    <Container className="col align-self-center">
      <Row>
        <Col className="col align-self-start" sm="8">
          <Portfolio />
        </Col>
        <Col className="col align-self-end" sm="4">
          <Network />
        </Col>
      </Row>
    </Container>
  );
}

export default Mainpage;