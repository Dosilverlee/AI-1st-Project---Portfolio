import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import * as Api from "../../api";
import { DispatchContext, UserStateContext } from "../../App";

function UserCard({ user, setIsEditing, isEditable, isNetwork }) {
  // 07.21 || UserCard가 내려받는 user는 undefined일 수 있습니다.
  // 07.21 || Network 페이지에서는 userlist 응답으로 user를 각각 내려줘야 하지만, 현재 사용자는 전역 사용자 정보 상태로 관리하므로
  // 07.21 || 이에 대한 처리를, user || currentUserProfile로 관리합니다.
  const dispatch = useContext(DispatchContext);
  const { currentUserProfile } = useContext(UserStateContext);
  const navigate = useNavigate();

  function handleFileUpload(profileImage) {
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    Api.putImage(`users/${currentUserProfile.id}/profileImage`, formData)
      .then(() => {
        window.alert("업로드에 성공하였습니다.🥳");

        Api.get(`users`, currentUserProfile.id).then((res) => {
          dispatch({
            type: "INIT_USER_PROFILE",
            payload: res.data,
          });
        });
      })
      .catch(() => {
        window.alert("업로드에 실패하였습니다.😭");
      });
  }
  // 07.21 || 프로필 이미지를 상태가 아니라, element에서 받아서 바로 업로드 처리가 될 수 있도록 처리합니다.
  // 이는, 사용자 편집과 이미지 업로드가 2개의 api로 분리되었기 때문입니다.
  // 하나로 합친다면, 상태로 관리해야됩니다.

  const onFileChange = (e) => {
    const file = e.target.files[0];

    try {
      if (file) {
        handleFileUpload(file);
      }
    } catch (e) {}
  };

  const { name, email, description, id, profileImgSource } = {
    name: user?.name ?? currentUserProfile?.name,
    email: user?.email ?? currentUserProfile?.email,
    description: user?.description ?? currentUserProfile?.description,
    profileImgSource:
      user || currentUserProfile
        ? `http://localhost:5001/${
            user ? user.profileImage : currentUserProfile?.profileImage
          }`
        : "http://placekitten.com/200/200",
    id: isNetwork ? user?.id : null,
  };
  // 07.21 || 네트워크 페이지일 떄의 프로필 카드와 현재 접속한 사용자의 프로필 카드에 대해 분기합니다.
  // 07.21 || Optional Chaining 이라는 키워드로 확인하셔서 꼭 사용법을 익히시기 바랍니다.

  return (
    <Card className="m-2" style={{ borderRadius: "0.5em" }}>
      <Card.Body>
        <div>
          <Card.Img
            style={{
              display: "inline-block",
              width: "8rem",
              height: "8rem",
              borderRadius: "100%",
            }}
            className="mb-3"
            src={profileImgSource}
            alt="랜덤 고양이 사진 (http://placekitten.com API 사용)"
          />

          {isEditable && (
            <div>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                onChange={onFileChange}
              />
              <label for={"file"}>
                <div
                  style={{
                    float: "right",
                    color: "black",
                    background: "#DED5FE",
                    border: "none",
                    padding: "5px",
                    marginBottom: "5px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  <span>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                    }}
                    src="https://cdn.icon-icons.com/icons2/2234/PNG/512/add_photo_camera_icon_134644.png"
                  ></img>
                </span>
                    <span style={{fontSize:"13px"}}>
                    프로필 사진 수정  
                    </span>
                </div>
              </label>
            </div>
          )}
        </div>

        <div style={{ display: "inline-block" }}>
          <Card.Title style={{ paddingRight: "40px" }}>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
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
          <div style={{ marginTop: "5px" }}>
            <Card.Link
              style={{ color: "#6700e6", textDecoration: "none" }}
              className="mt-3"
              href="#"
              onClick={() => {
                navigate(`/users/${id}`);
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
