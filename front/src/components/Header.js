import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Nav, Row, Col } from "react-bootstrap";
import { UserStateContext, DispatchContext } from "../App";
import Logo from '../assets/logo.png'

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };

  return (
    <Nav activeKey={location.pathname}>
      <div sytle={{ height: "128px" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="/"><img
            style={{ width: "8.8rem", height: "2rem" }}
            src={Logo}
          /></a>
        </div>
        {isLogin && (<div style={{marginLeft: "auto"}}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
                style={{ width: "4rem", height: "4rem", marginTop: "20px", marginBottom: "10px" }}
                src="http://placekitten.com/200/200"
            />
          </div>
          <div style={{marginBottom: "10px"}}>
              <Nav.Link style={{display:"inline"}} onClick={() => navigate("/")}>나의 페이지</Nav.Link>
              <Nav.Link style={{display:"inline"}} onClick={logout}>로그아웃</Nav.Link>
          </div>
        </div>)}
      </div>
    </Nav>
  );
}

export default Header;
