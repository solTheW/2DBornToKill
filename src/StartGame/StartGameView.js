import React from 'react';
import './StartGameView.css';
import Player from './Character/Player.js';
import m2 from './Character/img/m2.png';



class StartGameView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            h:32,
            w:32,
        }
    }
    
    render () {
        return(    
        <div class="mainGameDiv">
        <Player skin={m2} x={200} y={200}/>
        </div> 
        );
    }
}

export default StartGameView;