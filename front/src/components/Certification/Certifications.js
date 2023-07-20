// 자격증내역 목록을 표시하는 기능을 담당하며, 필요한 경우 새로운 내역을 추가할 수 있는 폼 제공
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import * as Api from "../../api";
import Certification from "./Certification";
import CertificationAddForm from "./CertificationAddForm";

function Certifications({ portfolioOwnerId, isEditable }) {
  //useState로 certifications 상태를 생성함.
  const [certifications, setCertifications] = useState([]);
  //useState로 isAdding 상태를 생성함.
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // 기존에 저장된 수상내역을 화면에 불러오기 위해 Api get 요청, response의 data로 세팅
    Api.get("certificates", portfolioOwnerId).then((res) =>
      setCertifications(res.data)
    );
    setIsAdding(false);
  }, [portfolioOwnerId]);

  return (
    <Card className="m-2" style={{ borderRadius: "0.5em" }}>
      <Card.Body>
        <div>
          <Card.Title style={{ display: "inline-block", fontWeight: "bold" }}>
            자격증/면허증
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
        {certifications.map((certification) => (
          <Certification
            key={certification.id}
            certification={certification}
            setCertifications={setCertifications}
            isEditable={isEditable}
          />
        ))}
        {isAdding && (
          <CertificationAddForm
            portfolioOwnerId={portfolioOwnerId}
            setCertifications={setCertifications}
            setIsAdding={setIsAdding}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default Certifications;
