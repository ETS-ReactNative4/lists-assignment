
import React from 'react';
const CharComponent = (props) => {
    return (

        <p onClick={props.click}>{props.ch}</p>

    );
}

export default CharComponent;