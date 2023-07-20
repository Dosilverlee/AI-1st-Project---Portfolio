import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import * as Api from "../../api";
import Education from "./Education";
import EducationAddForm from "./EducationAddForm";

function Educations({ portfolioOwnerId, isEditable }) {
  const [educations, setEducations] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    Api.get(`educations/${portfolioOwnerId}`).then((res) =>
      setEducations(res.data)
    );
    setIsAdding(false);
  }, [portfolioOwnerId]);

  console.log(portfolioOwnerId);

  return (
    <Card className="m-2" style={{borderRadius:"0.5em"}}>
      <Card.Body>
        <div>
          <Card.Title style={{display:"inline-block", fontWeight: "bold" }}>학력</Card.Title>
          {isEditable && (
            <button style={{display:"inline-block", float:"right", background:"white", border:"none"}} onClick={() => setIsAdding(true)}>➕</button>
          )}
        </div>
        {educations.map((education) => (
          <Education
            key={education.id}
            education={education}
            setEducations={setEducations}
            isEditable={isEditable}
          />
        ))}
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
