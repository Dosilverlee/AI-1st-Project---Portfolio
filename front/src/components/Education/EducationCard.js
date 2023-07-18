import { Card, Button, Row, Col } from "react-bootstrap";
import CommonButton from "../components/buttons/CommonButton";

function EducationCard({ education, isEditable, setIsEditing, setIsDeleting }) {
  const { title, description } = education;

  const handleEdit = () => {
    console.log("편집");
  };
  const handleDelete = () => {
    console.log("삭제");
  };

  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          <span>{title}</span>
          <br />
          <span className="text-muted">{description}</span>
        </Col>
        {isEditable && (
          <>
            <Col xs lg="1">
              <CommonButton
                buttonText={"편집"}
                onClick={handleEdit}
              />
            </Col>

            <Col xs lg="1">
              <CommonButton
              buttonText={"삭제"}
              onClick={handleDelete}
              />
            </Col>
          </>
          )}
      </Row>
    </Card.Text>
  );
}

export default EducationCard;

// import { Card, Button, Row, Col } from "react-bootstrap";

// function EducationCard({ education, isEditable, setIsEditing }) {
//   return (
//     <Card.Text>
//       <Row className="align-items-center">
//         <Col>
//           <span>{education.title}</span>
//           <br />
//           <span className="text-muted">{education.description}</span>
//         </Col>
//         {isEditable && (
//           <Col xs lg="1">
//             <Button
//               variant="outline-info"
//               size="sm"
//               onClick={() => setIsEditing((prev) => !prev)}
//               className="mr-3"
//             >
//               편집
//             </Button>
//           </Col>
//         )}
//       </Row>
//     </Card.Text>
//   );
// }

// export default EducationCard;

