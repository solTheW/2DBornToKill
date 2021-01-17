import React from 'react';
import Actor from './Actor.js';
import useKeyPress from './hooks/use-key-press';
import useWalk from './hooks/use-walk';
import Enemy from './Enemy.js';


var points=0;
var xEnemy=200;
var yEnemy=200;

export default function Player({skin, x, y}) {
    const { dir, step, walk, position } = useWalk(3)
    const data = {
        h: 32,
        w: 32,
    };
    
    function randomXY() {
        ///z lewej 40
        ///z prawej window.inneeWidth-70
        ///od góry 140
        ///od dołu window.innerHeight-95
        let xMin=40;
        let xMax=window.innerWidth-70;
        let yMin=140;
        let yMax=window.innerHeight-95;
        xEnemy = Math.floor(Math.random()*(xMax - xMin +1))+xMin;
        yEnemy = Math.floor(Math.random()*(yMax - yMin +1))+yMin;
        return (<Enemy  x={xEnemy} y={yEnemy}/>);
    }

    useKeyPress((e) =>{
        x=xEnemy;
        y=yEnemy;
        if(position.x >= (x-32) && position.x <= (x+32) &&
            position.y >= (y-32) && position.y <= (y+32)  ){
            points+=100;
            randomXY();
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
        <Enemy  x={xEnemy} y={yEnemy}/>
        <Actor sprite={skin} data={data} step={step} dir={dir} position={position}/>
        </div>);
}