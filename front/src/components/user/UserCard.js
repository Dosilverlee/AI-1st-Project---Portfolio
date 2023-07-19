import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col } from "react-bootstrap";
import * as Api from "../../api";

function UserCard({ user, setIsEditing, isEditable, isNetwork }) {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    Api.putImage(`users/${user.id}/profileImage`, formData).then(()=>{
      window.alert("업로드에 성공하였습니다.");
    }).catch(()=>{window.alert("업로드에 실패하였습니다.")});
  }
  const onFileChange = (e)=>{
    const file = e.target.files[0];

    try {
      if (file) {
        setProfileImage(file);
        
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Card className="m-2">
      <Card.Body>
        <Card.Img
          style={{ width: "8rem", height: "8rem" }}
          className="mb-3"
          src="http://placekitten.com/200/200"
          alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"
        />
        
        {
          isEditable&&<form encType='multipart/form-data' onSubmit={handleSubmit}>
            <input type='file' name='file' onChange={onFileChange}/>
            <button type='submit'>업로드</button>
        </form>}
        <Card.Title>{user?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user?.email}</Card.Subtitle>
        <Card.Text>{user?.description}</Card.Text>

        {isEditable && (
          <Col>
            <Row className="mt-3 text-center text-info">
              <Col sm={{ span: 20 }}>
                <Button
                  variant="outline-info"
                  size="sm"
                  onClick={() => {
                    setIsEditing(true);
                  }}
                >
                  ✏️
                </Button>
              </Col>
            </Row>
          </Col>
        )}

        {isNetwork && (
          <Card.Link
            style={{color:"#0A66C2"}}
            className="mt-3"
            href="#"
            onClick={() => {
              navigate(`/users/${user.id}`);
            }}
          >
            프로필 보러가기
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}

export default UserCard;