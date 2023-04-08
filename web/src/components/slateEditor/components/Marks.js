import React from "react";


const BoldMark = props => {
    return <strong>{props.children}</strong>;
}

const ItalicMark = props => {
    return <em property="italic">{props.children}</em>;
}

export {
    BoldMark,
    ItalicMark
};