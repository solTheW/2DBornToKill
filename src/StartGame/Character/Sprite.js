import React from 'react';

export default function Sprite({image ,data, position}){
    const {y, x, h, w} = data;
    return (
    <div class='sprite'
    style={{ 
        position:'absolute',
        top:position.y,
        left: position.x,
        height:`${h}px`,
        width:`${w}px`,
        backgroundImage:`url(${image})`,
        backgroundPosition: `-${x}px -${y}px`
    }}
    />);
}