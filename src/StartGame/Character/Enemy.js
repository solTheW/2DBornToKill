import React, {useEffect} from 'react';
import Actor from './Actor.js';
import e1 from './img/e1.png';
import useWalk from './hooks/use-walk';
var isDisplayed = true;
export default function Enemy({x, y}) {
    const { dir, step, walk, position} = useWalk(3)
    const data = {
        h: 32,
        w: 32,
        
    };
    
    return <Actor sprite={e1} data={data} step={step} dir={dir} position={{x:x, y:y}}/>

}
