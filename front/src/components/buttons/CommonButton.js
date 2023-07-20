// 재사용 가능한 공통버튼 컴포넌트
import React from "react";
import { Button } from "react-bootstrap";

export default function CommonButton({ handleDelete, buttonText }) {
  return (
    <button
      // 해당 버튼이 클릭될 때 handleDelete 함수 실행
      onClick={handleDelete}
      style={{
        display: "inline-block",
        float: "right",
        background: "white",
        border: "none",
      }}
      variant="outline-info"
      size="sm"
      className="mr-3"
    >
      {buttonText}
    </button>
  );
}
