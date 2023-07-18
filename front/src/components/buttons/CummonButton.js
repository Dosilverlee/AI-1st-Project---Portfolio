// // onclick= 무엇이 삭제 되는지 props의 개념 state&props
// // <div>
// //     삭제
// // </div>

// // seteducations 무슨 학력이 삭제 됐지 시현 해보기...

// import React, { useState } from "react";
// import { Card, Button } from "react-bootstrap";
// import * as Api from "../../api";

// function DeleteButton({ education, setEducations, isEditable }) {
//   const [isDeleting, setIsDeleting] = useState(false);

//   const handleDelete = () => {
//     setIsDeleting(true);
//     Api.delete(`educations/${education.id}`)
//       .then(() => setEducations((prev) => prev.filter((item) => item.id !== education.id)))
//       .finally(() => setIsDeleting(false));
//   };

//   return (
//     <Card className="mb-3">
//       <Card.Body>
//         <Card.Title>{education.school}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{education.major}</Card.Subtitle>
//         <Card.Text>{education.startDate} - {education.endDate}</Card.Text>
//         {isEditable && !isDeleting && (
//           <Button variant="danger" onClick={handleDelete}>삭제</Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }

// export default DeleteButton;

// import { useState } from "react";

// function DeleteButton() {
//      {method: "DELETE"},
//     };


// return (
//     <Card className="mb-3">
//         <Card.Body>
//         <Card.Subtitle className="mb-2 text-muted">{education.major}</Card.Subtitle>
//         <Card.Text>{education.startDate} - {education.endDate}</Card.Text>
//         {isEditable && !isDeleting && (
//             <Button variant="danger" onClick={handleDelete}>삭제</Button>
//         )}
//         </Card.Body>
//     </Card>
//     );

// export default function Sample() {
//     const handleDelete = () => {
//         console.log("삭제");
//     };
//     return (
//         <div>
//             <DeleteButton
//                 onBtnClick = {handleDelete}
//                 bgColor= {"black"}
//                 fontColor = {"white"}
//             />
//         </div> 
//     )
// }

import React from "react";

export default function CommonButton({ 
    onBtnClick,
    buttonText, 
    bgColor, 
    fontColor
}) {
    return (
    <div>
    <button
        onClick={onBtnClick}
        style ={{
            backgorund: bgColor,
            Color: fontColor,
        }}
    >
        {buttonText}
    </button>
    </div>
    );
}

