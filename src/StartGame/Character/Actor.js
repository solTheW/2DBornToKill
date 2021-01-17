import React from 'react';
import Sprite from "./Sprite.js";

export default function Actor({sprite, data, position = { x:200, y:200 }, step = 0, dir = 0}){
    const {h, w } = data;
    return(
        <Sprite 
        image={sprite}
        position={position}
        data={{
            x: step*w,
            y: dir*h,
            w,
            h,
            }}
        />
    );
}