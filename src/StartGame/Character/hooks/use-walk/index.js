import {useState} from 'react';


export default function useWalk(maxSteps) {
    const [position,setPosition]=useState({
        x:window.parent.outerWidth/2,
        y:window.parent.outerHeight/2
    });
    const [dir, setDir] = useState(0);
    const [step, setStep] = useState(0);
    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3,
    };

    const stepSize=20;

    const modifier = {
        down: {x: 0, y: position.y >= window.innerHeight-window.innerHeight*0.11 ?0:stepSize},
        left: {x: position.x <= 60?0:-stepSize, y:0},
        right: {x:position.x >= window.innerWidth-90?0:stepSize,y:0},
        up: {x:0, y: position.y <= 150?0:-stepSize},
    };

    function walk(dir) {
        setDir(prev =>{
            if(directions[dir] === prev) move(dir);
            return directions[dir];
        });
        setStep((prev) => ((prev < maxSteps - 1 )? prev + 1 : 0));
    } 

    function move(dir) {
        setPosition(prev => ({
            x: prev.x + modifier[dir].x,
            y: prev.y + modifier[dir].y,
        }));
    }

    return {
        walk, 
        dir, 
        step, 
        position,
    };
}