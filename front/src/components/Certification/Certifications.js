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
    Api.get("certifications", portfolioOwnerId).then((res) => setCertifications(res.data));
    setIsAdding(false);
  }, [portfolioOwnerId]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>자격증/면허증</Card.Title>
        {certifications.map((certification) => (
          <Certification
            key={certification.id}
            certification={certification}
            setCertifications={setCertifications}
            isEditable={isEditable}
          />
        ))}
        {isEditable && (
          <Row className="mt-3 text-center mb-4">
            <Col sm={{ span: 20 }}>
              <Button onClick={() => setIsAdding(true)}>+</Button>
            </Col>
          </Row>
        )}
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