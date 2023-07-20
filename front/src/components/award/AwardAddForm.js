// 수상 내역을 추가하기 위한 폼을 보여주는 역할
import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

function AwardAddForm({ portfolioOwnerId, setAwards, setIsAdding }) {
  //useState로 title 등 상태를 생성함.
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [institute, setInstitute] = useState("");

  // Form 요소에 onSubmit 이벤트 핸들러로 handleSubmit 함수를 연결하여 폼 제출을 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // portfolioOwnerId를 user_id 변수에 할당함.
    const user_id = portfolioOwnerId;

    // 서버에 입력 값 보내기 위해 Api post 호출
    await Api.post("awards/" + portfolioOwnerId, {
      title,
      description,
      date,
      institute,
    });

    // post 호출 뒤 저장된 값을 화면에 다시 불러오기 위해 get 호출
    const res = await Api.get("awards", user_id);
    // awards를 response의 data로 세팅함.
    setAwards(res.data);
    // award를 추가하는 과정이 끝났으므로, isAdding을 false로 세팅함.
    setIsAdding(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Control
          type="text"
          placeholder="수상내역"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDescription" className="mt-3">
        <Form.Control
          type="text"
          placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDate" className="mt-3">
        <Form.Control
          type="text"
          placeholder="수상날짜"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicInstitute" className="mt-3">
        <Form.Control
          type="text"
          placeholder="주최기관"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
          <Button style={{color:"black", backgroundColor:"#DED5FE", border:"none"}} variant="primary" type="submit" className="me-3">
            확인
          </Button>
          <Button style={{color:"black", backgroundColor:"#E4E4E4", border:"none"}} variant="secondary" onClick={() => setIsAdding(false)}>
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default AwardAddForm;
