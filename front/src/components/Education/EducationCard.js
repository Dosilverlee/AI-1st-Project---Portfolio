// import { Card, Row, Col } from "react-bootstrap";
// import CommonButton from "../buttons/CommonButton";

// function EducationCard({ education, isEditable }) {
//   const { title, description } = education;

//   const handleEdit = () => {
//     console.log("편집");
//   };
//   const handleDelete = () => {
//     console.log("삭제");
//   };

//   return (
//     <Card.Text>
//       <Row className="align-items-center">
//         <Col>
//           <span>{title}</span>
//           <br />
//           <span className="text-muted">{description}</span>
//         </Col>
//         {isEditable && (
//           <>
//             <Col xs lg="1">
//               <CommonButton
//                 buttonText={"편집"}
//                 onClick={handleEdit}
//               />
//             </Col>

//             <Col xs lg="1">
//               <CommonButton
//               buttonText={"삭제"}
//               onClick={handleDelete}
//               />
//             </Col>
//           </>
//           )}
//       </Row>
//     </Card.Text>
//   );
// }

// export default EducationCard;

import { Card, Row, Col } from "react-bootstrap";
import CommonButton from "../buttons/CommonButton";

function EducationCard({ education, isEditable, setIsEditing, setIsDeleting }) {
  const { title, description } = education;

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
              variant="outline-info"
              size="sm"
              onClick={() => setIsEditing((prev) => !prev)}
              className="mr-3"
            >
            편집
            </CommonButton>
          </Col>
          <Col xs lg="1">
            <CommonButton
              variant="outline-info"
              size="sm"
              onClick={() => setIsDeleting((prev) => !prev)}
              className="mr-3"
            >
            삭제
            </CommonButton>
          </Col>
          </>
        )}
      </Row>
    </Card.Text>
  );
}

export default EducationCard;

