import React from 'react';
import './StartGameView.css';
import Player from './Character/Player.js';
import characterPNG from './Character/img/m2.png';

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
        <Player skin={characterPNG} />
        </div> 
        );
    }
}

export default StartGameView;