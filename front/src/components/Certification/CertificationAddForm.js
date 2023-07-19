import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

function CertificationAddForm({ portfolioOwnerId, setCertifications, setIsAdding }) {
  //useState로 title 상태를 생성함.
  const [title, setTitle] = useState("");
  //useState로 description 상태를 생성함.
  const [description, setDescription] = useState("");

  const [date, setDate] = useState("");

  const [institution, setInstitution] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(title, description, date, institution);

    // portfolioOwnerId를 user_id 변수에 할당함.
    const user_id = portfolioOwnerId;

    // "certification/create" 엔드포인트로 post요청함.
    await Api.post("certifications/" + portfolioOwnerId, {
      title,
      description,
      date,
      institution,
    });

  //   // "certificationlist/유저id" 엔드포인트로 get요청함.
    const res = await Api.get("certifications", user_id);
    console.log(res);
  //   // certifications를 response의 data로 세팅함.
    setCertifications(res.data);
  //   // certification를 추가하는 과정이 끝났으므로, isAdding을 false로 세팅함.
    setIsAdding(false);
  };

  

  

  return (
    <Form onSubmit={handleSubmit}>
      

      <Form.Group controlId="formBasicTitle">
        <Form.Control
          type="text"
          placeholder="자격증명/면허증"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>


      <Form.Group controlId="formBasicDescription" className="mt-3">
        <Form.Control
          type="text"
          placeholder="등급/점수"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDate" className="mt-3">
        <Form.Control
          type="text"
          placeholder="취득일"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicInstitution" className="mt-3">
        <Form.Control
          type="text"
          placeholder="발행처/기관"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
        />
      </Form.Group>


      <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
          <Button variant="primary" type="submit" className="me-3">
            확인
          </Button>
          <Button variant="secondary" onClick={() => setIsAdding(false)}>
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CertificationAddForm;