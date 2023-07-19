import React, { useState } from "react";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

const Grade = ["재학중", "학사 졸업", "석사 졸업", "박사 졸업"];

function EducationEditForm({ currentEducation, setEducations, setIsEditing }) {
  const [college, setCollege] = useState("");
  const [major, setMajor] = useState("");
  const [graduation, setGraduation] = useState("");
  // const { college, major, graduation } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      id: currentEducation.id,
      title: college,
      description: major,
      graduation,
    };

    // const newFormData = {
    //   id: currentEducation.id,
    //   title: college,
    //   description: major,
    // }

    // 폼 데이터를 API로 전송
    await Api.put(
      `educations/${currentEducation.userId}/${currentEducation.id}`,
      formData
    )
      .then(async (response) => {
        // 성공적으로 처리된 경우
        console.log("학력 정보가 업데이트되었습니다.");
        // 필요한 업데이트 작업 수행
        // ...
        const res = await Api.get(`educations/${currentEducation.userId}`);
        setEducations(res.data);

        // const selectedGrade = Grade[graduation - 1];
        // console.log("선택된 학위", selectedGrade);

        setIsEditing(false);
      })
      .catch((error) => {
        // 에러 발생 시 처리
        // console.log("학력 정보 업데이트 중 에러 발생:", error);
      });
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
