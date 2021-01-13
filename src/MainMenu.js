import React from 'react';
import './MainMenu.css';
import StartGameView from './StartGameView.js';
import OptionsView from './OptionsView';
import Authors from './Authors';

class MainMenu extends React.Component{
constructor(props){
   super(props);
   this.state = {
   showComponentStart : false,
   showComponentOptions : false,
   showComponentAuthors : false
   };

   this.handleStartClick = this.handleStartClick.bind(this);
   this.handleOptionsClick = this.handleOptionsClick.bind(this);
   this.handleAuthorsClick = this.handleAuthorsClick.bind(this);   
   }

   handleStartClick() {
   this.setState({showComponentStart:true, showComponentOptions:false,showComponentAuthors:false});
   }
   handleOptionsClick() {
      this.setState({showComponentOptions:true ,showComponentStart:false, showComponentAuthors:false});
   }
   handleAuthorsClick() {
      this.setState({showComponentAuthors:true,showComponentStart:false, showComponentOptions:false});
   }

   render(){
      return(
         <div>
         <button class="start-menu-button start" onClick={this.handleStartClick}>Start Game</button>
         <button class="start-menu-button options" onClick={this.handleOptionsClick}>Options</button>
         <button class="start-menu-button authors" onClick={this.handleAuthorsClick}>Authors</button>
         {this.state.showComponentStart?<StartGameView />:null}
         {this.state.showComponentOptions?<OptionsView />:null}
         {this.state.showComponentAuthors?<Authors />:null}
         </div>
      );
   }
}

export default MainMenu;