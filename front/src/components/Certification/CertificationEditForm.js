import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

function CertificationEditForm({ currentCertification, setCertifications, setIsEditing }) {
  //useState로 title 상태를 생성함.
  const [title, setTitle] = useState(currentCertification.title);
  //useState로 description 상태를 생성함.
  const [description, setDescription] = useState(currentCertification.description);

  const [date, setDate] = useState(currentCertification.date);

  const [institute, setInstitute] = useState(currentCertification.institute);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    

    // currentCertification의 user_id를 user_id 변수에 할당함.
    const user_id = currentCertification.userId;

    // "certifications/수상 id" 엔드포인트로 PUT 요청함.
    await Api.put(`certificates/${currentCertification.userId}/${currentCertification.id}`, {
      title,
      description,
      date,
      institute,
    });

    

    // "certificationlist/유저id" 엔드포인트로 GET 요청함.
    const res = await Api.get("certificates", user_id);
    // certifications를 response의 data로 세팅함.
    setCertifications(res.data);
    // 편집 과정이 끝났으므로, isEditing을 false로 세팅함.
    setIsEditing(false);
    
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

      <Form.Group controlId="formBasicInstitute" className="mt-3">
        <Form.Control
          type="text"
          placeholder="발행처/기관"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row} className="mt-3 text-center mb-4">
        <Col sm={{ span: 20 }}>
          <Button variant="primary" type="submit" className="me-3">
            확인
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CertificationEditForm;