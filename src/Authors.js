import React from 'react';
import AdaPNG from './img/ada.jpg';
import PatrykJPG from './img/patryk.jpg';
class Authors extends React.Component {
    render () {
        return(
            <div>
            <h1>
                <img src={AdaPNG} alt="Adrianna Buczyńska" height="100" width="100"/>
                <p>Adrianna Buczyńska
                <a href="https://github.com/BuczynskaA">GitHub</a>
                </p>
            </h1>
            <h1>
                <img src={PatrykJPG} alt="Patryk Włodarski" height="100" width="100"/>
                <p>Patryk Włodarski
                <a href="https://github.com/solTheW">GitHub</a>
                </p>
            </h1>
            </div>
        );
    }
}

export default Authors;