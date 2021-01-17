import React from 'react';
import './StartGameView.css';
import Player from './Character/Player.js';
import m2 from './Character/img/m2.png';
import e1 from './Character/img/e1.png';
import Actor from './Character/Actor.js';

class StartGameView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            h:32,
            w:32
        }
    }
    render () {
        return(
        <div class="mainGameDiv">
        <Player skin={m2} />
        <Actor sprite={e1} data={this.state}/>
        </div> 
        );
    }
}

export default StartGameView;