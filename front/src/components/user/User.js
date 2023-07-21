import React, { useState, useEffect, useContext } from "react";
import UserEditForm from "./UserEditForm";
import UserCard from "./UserCard";
import * as Api from "../../api";
import { DispatchContext, UserStateContext } from "../../App";

function User({ portfolioOwnerId, isEditable }) {
  const dispatch = useContext(DispatchContext); // 07.21 || 전역 상태를 갱신할 수 있는 dispatch를 가져옵니다.
  const { currentUserProfile } = useContext(UserStateContext);
  // useState 훅을 통해 isEditing 상태를 생성함.
  const [isEditing, setIsEditing] = useState(false);
  // useState 훅을 통해 user 상태를 생성함.

  const [user, setUser] = useState();

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get("users", portfolioOwnerId).then((res) => {
      if (!currentUserProfile) {
        dispatch({
          type: "INIT_USER_PROFILE",
          payload: res.data,
        });
      } else {
        setUser(res.data);
      }
    }); // 07.21 || user 조회시 전역 유저 프로필 객체를 업데이트합니다.
    setIsEditing(false);
  }, [portfolioOwnerId]);

  console.log(user);

  return (
    <>
      {isEditing ? (
        <UserEditForm setIsEditing={setIsEditing} />
      ) : (
        <UserCard
          user={user}
          setIsEditing={setIsEditing}
          isEditable={isEditable}
        />
      )}
    </>
  );
}

export default User;
