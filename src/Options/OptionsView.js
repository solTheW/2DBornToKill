import React from 'react';
import './OptionsView.css';
import Controls from '../StartGame/Controls.js';

class OptionsView extends React.Component {
    render () {
        return(
        <div>
            <div>
                <button class="soundButton" onClick={this.props.action}>Sound</button>
            </div>
            <br /><br /><br /><br />
            <hr />
            <Controls />
        </div>
        );
    }
}

export default OptionsView;