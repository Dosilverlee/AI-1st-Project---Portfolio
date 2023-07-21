import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { UserStateContext, DispatchContext } from "../App";
import Logo from "../assets/logo.png";
import Rabbit from "../assets/rabbit.png";

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
    <div
      activeKey={location.pathname}
      style={{
        width: "100%",
        minWidth: "528px",
        backgroundColor: "white",
        position: "fixed",
        zIndex: "1",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "1128px", height: "134px" }}>
          <div style={{ display: "inline-block", marginLeft: "20px" }}>
            <a href="/">
              <img style={{ height: "33.5px" }} src={Logo} />
            </a>
            <a href="/">
              <img
                style={{ marginLeft: "15px", height: "134px" }}
                src={Rabbit}
              />
            </a>
          </div>
          {isLogin && (
            <div
              style={{
                display: "inline-block",
                float: "right",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  marginBottom: "5px",
                }}
              >
                <img
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "100%",
                  }}
                  src="http://placekitten.com/200/200"
                />
              </div>
              <div style={{ marginBottom: "5px", marginLeft: "50px" }}>
                <Nav.Link
                  style={{
                    padding: "8px 16px",
                    display: "inline-flex",
                    color: "#6700e6",
                    fontWeight: "bold",
                  }}
                  onClick={() => navigate("/")}
                >
                  나의 페이지
                </Nav.Link>
                <Nav.Link
                  style={{
                    padding: "8px 16px",
                    display: "inline-flex",
                    color: "#6700e6",
                    fontWeight: "bold",
                  }}
                  onClick={logout}
                >
                  로그아웃
                </Nav.Link>
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: "5px",
                    alignItems: "center",
                    paddingLeft: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src="https://cdn-icons-png.flaticon.com/512/1514/1514935.png"
                    alt="carrot"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
