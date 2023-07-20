import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import * as Api from "../../api";

function ProjectEditForm({ currentProject, setProjects, setIsEditing }) {
  const { title: projectTitle, description: projectDesc } = currentProject;
  //useState로 title 상태를 생성함.
  const [title, setTitle] = useState(projectTitle);
  //useState로 description 상태를 생성함.
  const [description, setDescription] = useState(projectDesc);

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // currentAward의 user_id를 user_id 변수에 할당함.
    const user_id = currentProject.userId;
    const id = currentProject.id;
    console.log(id);
    console.log(user_id);
    // "awards/수상 id" 엔드포인트로 PUT 요청함.
    await Api.put(`projects/${user_id}/${id}`, {
      title,
      description,
    });

    // "awardlist/유저id" 엔드포인트로 GET 요청함.
    const res = await Api.get(`projects/${user_id}`);
    // awards를 response의 data로 세팅함.
    setProjects(res.data);
    // 편집 과정이 끝났으므로, isEditing을 false로 세팅함.
    setIsEditing(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Control
          type="text"
          placeholder="프로젝트내역"
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

      <Form.Group as={Row} className="mt-3 text-center mb-4">
        <Col sm={{ span: 20 }}>
          <Button style={{color:"black", backgroundColor:"#DED5FE", border:"none"}} variant="primary" type="submit" className="me-3">
            확인
          </Button>
          <Button style={{color:"black", backgroundColor:"#E4E4E4", border:"none"}} variant="secondary" onClick={() => setIsEditing(false)}>
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ProjectEditForm;
