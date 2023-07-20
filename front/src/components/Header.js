import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { UserStateContext, DispatchContext } from "../App";
import LogoPNG from '../assets/logo.png'
import LogoGIF from '../assets/logo.gif'

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
    <div activeKey={location.pathname}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width:"1128px", height: "134px" }}>
          <div style={{display: "inline-block", marginLeft:"20px"}}>
            <a href="/"><img
              style={{ height:"67px"}}
              src={LogoPNG}
            /></a>
            <a href="/"><img
              style={{ height:"134px"}}
              src={LogoGIF}
            /></a>
          </div>
          {isLogin && (<div style={{ display:"inline-block", float: "right" }}>
            <div style={{ display: "flex", justifyContent: "center", marginTop:"20px", marginBottom: "5px" }}>
              <img
                  style={{ width: "4rem", height: "4rem", borderRadius:"100%" }}
                  src="http://placekitten.com/200/200"
              />
            </div>
            <div style={{marginBottom: "5px"}}>
                <Nav.Link style={{display: "inline-flex", color:"#56687a", fontWeight: "bold"}} onClick={() => navigate("/")}>나의 페이지</Nav.Link>
                <Nav.Link style={{display: "inline-flex", color:"#56687a", fontWeight: "bold"}} onClick={logout}>로그아웃</Nav.Link>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default Header;
