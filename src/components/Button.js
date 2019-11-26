import React from 'react'

export default function Button(props) {
    let color = props.color;
    console.log(color);

    let style = {
        color: color
    }

    return (
        <button style={style} onClick={props.onClick}>+</button>
    );
};
