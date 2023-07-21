import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import * as Api from "../../api";

function UserCard({ user, setIsEditing, isEditable, isNetwork }) {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    Api.putImage(`users/${user.id}/profileImage`, formData)
      .then(() => {
        window.alert("업로드에 성공하였습니다.");
      })
      .catch(() => {
        window.alert("업로드에 실패하였습니다.");
      });
  }
  const onFileChange = (e) => {
    const file = e.target.files[0];

    try {
      if (file) {
        setProfileImage(file);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Card className="m-2" style={{ borderRadius: "0.5em" }}>
      <Card.Body>
      <div>
        <Card.Img
          style={{ display:"inline-block", width: "8rem", height: "8rem", borderRadius:"100%" }}
          className="mb-3"
          src={
            user && user.profileImage
              ? "http://localhost:5001/" + user.profileImage
              : "http://placekitten.com/200/200"
          }
          alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"
        />
        
        {isEditable && (
          <form style={{width:"100%", display:"inline-block"}} encType='multipart/form-data' onSubmit={handleSubmit}>
            <input style={{ background:"white", border:"none"}} type='file' name='file' onChange={onFileChange}/>
            <Button style={{ float:"right", margin:"5px", color:"black", background:"#DED5FE", border:"none"}} type='submit'>📸프로필 사진 업로드</Button>
          </form>
        )}
      </div>

      <div style={{display:"inline-block"}}>
        <Card.Title style={{paddingRight:"40px"}}>{user?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user?.email}</Card.Subtitle>
        <Card.Text>{user?.description}</Card.Text>
      </div>
        {isEditable && (
          <button
            style={{
              display: "inline-block",
              float: "right",
              background: "white",
              border: "none",
            }}
            variant="outline-info"
            size="sm"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            ✏️
        </button>
        )}

        {isNetwork && (
          <div style={{marginTop:"5px"}}>
            <Card.Link
              style={{color:"#6700e6", textDecoration:"none"}}
              className="mt-3"
              href="#"
              onClick={() => {
                navigate(`/users/${user.id}`);
              }}
            >
              프로필 보러가기
            </Card.Link>
          </div>
        )}

      </Card.Body>
    </Card>
  );
}

export default UserCard;
