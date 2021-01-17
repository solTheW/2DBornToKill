import React from 'react';
import Actor from './Actor.js';
import useKeyPress from './hooks/use-key-press';
import useWalk from './hooks/use-walk';

export default function Player({skin}) {
    const { dir, step, walk, position } = useWalk(3)
    const data = {
        h: 32,
        w: 32,
    };
    
    useKeyPress((e) =>{
        if(e.key === ' '){
            
        }else if(
                e.key.replace("Arrow","").toLowerCase()==='left' || 
                e.key.replace("Arrow","").toLowerCase()==='right' || 
                e.key.replace("Arrow","").toLowerCase()==='up' ||
                e.key.replace("Arrow","").toLowerCase()==='down'){
        walk(e.key.replace("Arrow","").toLowerCase());
        }
        e.preventDefault();
    })

    return <Actor sprite={skin} data={data} step={step} dir={dir} position={position}/>
}