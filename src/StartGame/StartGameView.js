import React from 'react';
import './StartGameView.css';
import Character from './Character/Character.js';


class StartGameView extends React.Component {

    render () {
        return(
        <div class="mainGameDiv">
        <Character />
        </div> 
        );
    }
}

export default StartGameView;