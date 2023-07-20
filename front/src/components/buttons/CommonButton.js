import React from "react";
import { Button } from "react-bootstrap";

export default function CommonButton({ 
    handleDelete,
    buttonText,
}) {
    return (
    <button
        onClick={handleDelete}
        style ={{
            display:"inline-block", 
            float:"right", 
            background:"white", 
            border:"none"
        }}
        variant="outline-info"
        size="sm"
        className="mr-3"
    >
        {buttonText}
    </button>
    );
}