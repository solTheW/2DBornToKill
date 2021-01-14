import React from 'react';
import AdaPNG from './img/ada.jpg';
import PatrykJPG from './img/patryk.jpg';
import './Authors.css';
class Authors extends React.Component {
    render () {
        return(
            <div class="mainDiv">
            <h1>
                <br />
                <img class="image" src={AdaPNG} alt="Adrianna Buczyńska"/>
                <p>Adrianna Buczyńska
                <a href="https://github.com/BuczynskaA"><br />GitHub</a>
                </p>
            </h1>
            <br />
            <h1>
                <img class="image" src={PatrykJPG} alt="Patryk Włodarski"/>
                <p>Patryk Włodarski
                <a href="https://github.com/solTheW"><br />GitHub</a>
                </p>
            </h1>
            </div>
        );
    }
}

export default Authors;