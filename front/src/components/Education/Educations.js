import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../api";
import Education from "./Education";
import EducationAddForm from "./EducationAddForm";

function Educations({ portfolioOwnerId, isEditable }) {
    const [educations, setEducations] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
  
    console.log(portfolioOwnerId);
  
    useEffect(() => {
      Api.get(`educations/${portfolioOwnerId}`)
        .then((res) => setEducations(res.data));
        setIsAdding(false);
    }, [portfolioOwnerId]);
  
  return (
    <Card className="m-2">
      <Card.Body>
        <Card.Title>학력</Card.Title>
        {educations.map((education) => (
          <Education
            key={education.id}
            education={education}
            setEducations={setEducations}
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
          <EducationAddForm
            educations={educations}
            portfolioOwnerId={portfolioOwnerId}
            setEducations={setEducations}
            setIsAdding={setIsAdding}
          />
        )}
      </Card.Body>
    </Card>
  );
}

export default Educations;
