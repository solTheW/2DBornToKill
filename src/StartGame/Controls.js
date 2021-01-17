import React from 'react';
import './Controls.css';
import Cookies from 'js-cookie'


export default function Controls() {

    return (
    <div>
        <div class="controlsDiv">
        Hello, you are playing the game <strong>2DBORNTOKILL</strong>. 
        Your task is to <strong>kill</strong> as many opponents as possible 
        in the displayed <strong>time</strong>.<br /><br />If this is your first time playing, 
        here are some helpful instructions.
        </div>
        
        <div class="arrowsDiv">
        <i class="arrow">&#8592;</i>
        &nbsp;The left arrow moves character to the left
        <br />
        <i class="arrow">&#8593;</i>
        &nbsp;The up arrow moves character to upwards
        <br />
        <i class="arrow">&#8594;</i>
        &nbsp;The right arrow moves character to the right
        <br />
        <i class="arrow">&#8595;</i>
        &nbsp;The down arrow moves the character downwards
        <br />
        <strong>SPACEBAR</strong>
        &nbsp;The space bar kills enemies
        </div>
        <div class="scores">
        <h1>Scores:</h1>
        {document.cookie}
        </div>
    </div>
    )
}