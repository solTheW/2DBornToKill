import React from 'react';
import './OptionsView.css';


class OptionsView extends React.Component {
    render () {
        return(
            <div>
                <button class="soundButton" onClick={this.props.action}>Sound</button>
            </div>
        );
    }
}

export default OptionsView;