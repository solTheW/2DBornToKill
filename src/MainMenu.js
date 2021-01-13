import React from 'react';
import './MainMenu.css';
class MainMenu extends React.Component{
   render(){
      return(
         <div>
         <button class="start-menu-button start">Start Game</button>
         <button class="start-menu-button options">Options</button>
         <button class="start-menu-button authors">Authors</button>
         </div>
      );
   }
}

export default MainMenu;