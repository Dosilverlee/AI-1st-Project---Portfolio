import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as Api from "../../api";
import UserCard from "./UserCard";
import { UserStateContext } from "../../App";

function Network() {
  const params = useParams();
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  // useState 훅을 통해 users와 id 상태를 생성함.
  const [users, setUsers] = useState([]);
  const [id, setId] = useState();

  // Network 페이지의 pagination을 하기 위한 설정
  const limit = 5;
  const [page, setPage] = useState(1);
  const offset = (page -1) * limit;
  const total = users.length - 1;
  const numPages = Math.ceil(total / limit);

  // Network 페이지에서 UserCard를 랜덤하게 보여주기 위한 셔플 함수
  function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i));
        let temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
  }

  useEffect(() => {
    if (params.userId) {
      // 만약 현재 URL이 "/users/:userId" 라면, 이 userId를 유저 id로 설정함.
      setId(params.userId);
    } else {
      // 이외의 경우, 즉 URL이 "/" 라면, 전역 상태의 user.id를 유저 id로 설정함.
      setId(userState.user.id);
    }
    // "userlist" 엔드포인트로 GET 요청을 하고, users를 response의 data에 위에서 만든 셔플함수를 적용하여 세팅함.
    Api.get("userlist").then((res) => setUsers(shuffle(res.data)));
  }, [params, userState, navigate]);

  return (
    <div style={{display:"inline-block", width: "35%"}}>
      {users.filter((user) => user.id !== id).slice(offset, offset + limit).map((user) => (
        <UserCard key={user.id} user={user} isNetwork />
      ))}
      <div style={{display: "flex", justifyContent: "center"}}>
        <div total={total} limit={limit} page={page} setPage={setPage}>
          <button style ={{ color:"#6700e6", background:"white", border:"none" }} onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <button
                style ={{ color:"#6700e6", background:"white", border:"none" }}
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </button>
            ))}
          <button style ={{ color:"#6700e6", background:"white", border:"none" }} onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Network;