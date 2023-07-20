import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../api";
import Certification from "./Certification";
import CertificationAddForm from "./CertificationAddForm";

function Certifications({ portfolioOwnerId, isEditable }) {
  //useState로 certifications 상태를 생성함.
  const [certifications, setCertifications] = useState([]);
  //useState로 isAdding 상태를 생성함.
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    // "certificationlist/유저id"로 GET 요청하고, response의 data로 Certifications를 세팅함.
    Api.get("certificates", portfolioOwnerId).then((res) =>
      setCertifications(res.data)
    );
    setIsAdding(false);
  }, [portfolioOwnerId]);

  return (
    <Card className="m-2" style={{borderRadius:"0.5em"}}>
      <Card.Body>
        <div>
          <Card.Title style={{display:"inline-block", fontWeight: "bold"}}>자격증/면허증</Card.Title>
          {isEditable && (
            <button style={{display:"inline-block", float:"right", background:"white", border:"none"}} onClick={() => setIsAdding(true)}>➕</button>
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
