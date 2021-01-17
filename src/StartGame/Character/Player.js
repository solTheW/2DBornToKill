import React, {useEffect} from 'react';
import Actor from './Actor.js';
import useKeyPress from './hooks/use-key-press';
import useWalk from './hooks/use-walk';
var points=0;

export default function Player({skin, x, y, enemyDisplay}) {
    const { dir, step, walk, position } = useWalk(3)
    const data = {
        h: 32,
        w: 32,

    };
    
    useKeyPress((e) =>{
        if(position.x >= 184 && position.x <= 216 &&
            position.x >= 184 && position.y <= 216  ){
            points+=100;
            enemyDisplay=false;
         }
         if(
                e.key.replace("Arrow","").toLowerCase()==='left' || 
                e.key.replace("Arrow","").toLowerCase()==='right' || 
                e.key.replace("Arrow","").toLowerCase()==='up' ||
                e.key.replace("Arrow","").toLowerCase()==='down'){
        walk(e.key.replace("Arrow","").toLowerCase());
        }
        e.preventDefault();
    })
    return(
        <div>
        <h1>{points}</h1>
        <Actor sprite={skin} data={data} step={step} dir={dir} position={position}/>
        </div>);
}