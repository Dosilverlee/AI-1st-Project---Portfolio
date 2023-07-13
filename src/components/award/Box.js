import React from "react";

export default function Box() {
  return (
    <div>
      <div
        style={{
          display: "inline-block",
          padding: "60px",
          width: "30%",
          border: "3px solid red",
          textAlign: "center",
        }}
      >
        <span>네모네모</span>
        <span>만들어보기</span>
    </div>

    <div
        style={{
          display: "inline-block",
          padding: "60px",
          margin: "30px",
          width: "30%",
          border: "3px solid blue",
          textAlign: "center",
        }}
      >
        <span>네모네모</span>
        <span>만들어보기</span>
    </div>

    <div
        style={{
          display: "inline-block",
          padding: "60px",
          width: "30%",
          border: "3px solid green",
          textAlign: "center",
        }}
      >
        <span>네모네모</span>
        <span>만들어보기</span>
    </div>

    <div
        style={{
          display: "inline-block",
          padding: "60px",
          width: "30%",
          margin: "30px",
          border: "3px solid yellow",
          textAlign: "center",
        }}
      >
        <span>네모네모</span>
        <span>만들어보기</span>
    </div>
  </div>

  
  );
}