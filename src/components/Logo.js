import React from "react";

const Image = ({image}) => {

    return (
        <img src={image} style={{height: '100px', width: '100px'}}></img>
    )
}

export default Image;