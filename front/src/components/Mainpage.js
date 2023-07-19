import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { UserStateContext } from "../App";
import { throttle } from "lodash";
import Portfolio from "./Portfolio";
import Network from "./user/Network";

import scroll_to_top_button from "../assets/scroll_to_top_button.png"

function Mainpage() {
  const navigate = useNavigate();
  const params = useParams();
  const userState = useContext(UserStateContext);

  useEffect(() => {
    // 전역 상태의 user가 null이라면 로그인이 안 된 상태이므로, 로그인 페이지로 돌림.
    if (!userState.user) {
      navigate("/login", { replace: true });
      return;
    }
  }, [params, userState, navigate]);

  function ScrollToTopButton() {
    const useScrollToggle = () => {
      const [scrollFlag, setScrollFlag] = useState(false);
  
      const updateScroll = () => {
        const { scrollY } = window;
        scrollY > 10 ? setScrollFlag(true) : setScrollFlag(false);
      };
      const handleScroll = throttle(updateScroll, 100);
  
      useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
      return scrollFlag;
    };

    const scrollFlag = useScrollToggle(false);
    const moveToTop = () => (document.documentElement.scrollTop = 0);

    return (scrollFlag && (
      <div style={{position:'fixed', bottom:'1rem', right:'1rem'}}>
        <img src={scroll_to_top_button} onClick={moveToTop} style={{cursor:'pointer'}} />
      </div>
    ));
  };

  return (
    <div style={{backgroundColor: "#dce6f1", display: "flex", justifyContent: "center" }}>
      {userState.user && (<div style={{ width:"1128px", marginTop: "30px", marginBottom: "30px", display: "flex", alignItems: "stretch" }}>
          <Portfolio />
          <Network />
      </div>)}
      <ScrollToTopButton />
    </div>
  );
}

export default Mainpage;