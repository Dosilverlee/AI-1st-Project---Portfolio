import React from "react";

export default function CommonButton({ 
    handleDelete,
    buttonText, 
    bgColor, 
    fontColor
}) {
    return (
    <div>
    <button
        onClick={handleDelete}
        tyle ={{
            backgorund: bgColor,
            Color: fontColor,
        }}
    >
        {buttonText}
    </button>
    </div>
    );
}