// 기존의 수상 내역을 수정하기 위한 폼을 생성하고, 수정된 내용을 서버에 전송하여 업데이트하는 기능을 담당
import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

function AwardEditForm({ currentAward, setAwards, setIsEditing }) {
  //useState로 title 등 상태를 생성함.
  const [title, setTitle] = useState(currentAward.title);
  const [description, setDescription] = useState(currentAward.description);
  const [date, setDate] = useState(currentAward.date);
  const [institute, setInstitute] = useState(currentAward.institute);

  // Form 요소에 onSubmit 이벤트 핸들러로 handleSubmit 함수를 연결하여 폼 제출을 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // currentAward의 user_id를 user_id 변수에 할당함.
    const user_id = currentAward.userId;

    // 기존의 내역에서 바뀐 입력 값을 서버로 재전송하기 위해 Api put 호출
    await Api.put(`awards/${currentAward.userId}/${currentAward.id}`, {
      id: currentAward.id,
      title,
      description,
      date,
      institute,
    });

    // put 호출 뒤 저장된 값을 화면에 다시 불러오기 위해 get 요청
    const res = await Api.get("awards", user_id);
    // awards를 response의 data로 세팅함.
    setAwards(res.data);
    // 편집 과정이 끝났으므로, isEditing을 false로 세팅함.
    setIsEditing(false);
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

export default AwardEditForm;
