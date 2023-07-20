// 기존의 학력 정보를 수정하기 위한 폼을 생성하고, 수정된 내용을 서버에 전송하여 업데이트하는 기능을 담당
import React, { useState } from "react";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

const Grade = ["재학중", "학사 졸업", "석사 졸업", "박사 졸업"];

function EducationEditForm({ currentEducation, setEducations, setIsEditing }) {
  const [college, setCollege] = useState(currentEducation.title);
  const [major, setMajor] = useState(currentEducation.description);
  const [graduation, setGraduation] = useState(currentEducation.graduation);

  // Form 요소에 onSubmit 이벤트 핸들러로 handleSubmit 함수를 연결하여 폼 제출을 처리
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      id: currentEducation.id,
      title: college,
      description: major,
      graduation,
    };

    // 기존의 내역에서 바뀐 입력 값을 서버로 재전송하기 위해 Api put 호출
    await Api.put(
      `educations/${currentEducation.userId}/${currentEducation.id}`,
      formData
    );

    // put 호출 뒤 저장된 값을 화면에 다시 불러오기 위해 get 요청
    const res = await Api.get(`educations/${currentEducation.userId}`);
    // educations를 response의 data로 세팅함.
    setEducations(res.data);
    // 편집 과정이 끝났으므로, isEditing을 false로 세팅함.
    setIsEditing(false);
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <h2>학력</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="useEditName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="학교명"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              onBlur={(e) => setCollege(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="useEditName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="전공"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              onBlur={(e) => setMajor(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            {Grade.map((item, index) => (
              <Form.Check
                inline
                type={"radio"}
                label={item}
                value={index}
                id={`inline-radio-${index}`}
                checked={graduation === index}
                onChange={(e) => setGraduation(Number(e.target.value))}
              />
            ))}
          </Form.Group>
          <Form.Group as={Row} className="mt-3 text-center">
            <Col sm={{ span: 12 }}>
              <Button variant="primary" type="submit" className="me-3">
                확인
              </Button>
              <Button variant="secondary" onClick={() => setIsEditing(false)}>
                취소
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default EducationEditForm;
