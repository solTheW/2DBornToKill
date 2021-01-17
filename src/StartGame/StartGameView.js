import React from 'react';
import './StartGameView.css';
import Player from './Character/Player.js';
import m2 from './Character/img/m2.png';
import Enemy from './Character/Enemy.js';

class StartGameView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            h:32,
            w:32,
            enemyDisplay:true
        }
    }
    
    render () {
        return(    
        <div class="mainGameDiv">
        <Player skin={m2} x={200} y={200} enemyDisplay/>
        {this.state.enemyDisplay?<Enemy x={200} y={200}/>:null}
        </div> 
        );
    }
}

export default StartGameView;