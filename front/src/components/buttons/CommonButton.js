import React from "react";
import { Button } from "react-bootstrap";

export default function CommonButton({ 
    handleDelete,
    buttonText, 
    bgColor, 
    fontColor
}) {
    return (
    <Button
        onClick={handleDelete}
        style ={{
            background: bgColor,
            Color: fontColor,
        }}
        variant="outline-info"
        size="sm"
        className="mr-3"
    >
        {buttonText}
    </Button>
    );
}