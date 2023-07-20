// 수상내역 목록을 표시하는 기능을 담당하며, 필요한 경우 새로운 내역을 추가할 수 있는 폼 제공
import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../api";
import Award from "./Award";
import AwardAddForm from "./AwardAddForm";

function Awards({ portfolioOwnerId, isEditable }) {
  //useState로 awards 상태를 생성함.
  const [awards, setAwards] = useState([]);
  //useState로 isAdding 상태를 생성함.
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // 기존에 저장된 수상내역을 화면에 불러오기 위해 Api get 요청, response의 data로 세팅
    Api.get("awards", portfolioOwnerId).then((res) => setAwards(res.data));
    setIsAdding(false);
  }, [portfolioOwnerId]);

  return (
    <Card className="m-2" style={{ borderRadius: "0.5em" }}>
      <Card.Body>
        <div>
          <Card.Title style={{ display: "inline-block", fontWeight: "bold" }}>
            수상
          </Card.Title>
          {isEditable && (
            <button
              style={{
                display: "inline-block",
                float: "right",
                background: "white",
                border: "none",
              }}
              onClick={() => setIsAdding(true)}
            >
              ➕
            </button>
          )}
        </div>
        {awards.map((award) => (
          <Award
            key={award.id}
            award={award}
            setAwards={setAwards}
            isEditable={isEditable}
          />
        ))}
        {isAdding && (
          <AwardAddForm
            portfolioOwnerId={portfolioOwnerId}
            setAwards={setAwards}
            setIsAdding={setIsAdding}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default Awards;
