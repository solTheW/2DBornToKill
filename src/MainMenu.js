import React from 'react';
import './MainMenu.css';
import StartGameView from './StartGame/StartGameView.js';
import OptionsView from './Options/OptionsView.js';
import Authors from './Authors/Authors.js';
import backgroudnMusic from './backgroundFiles/backgroundMusic.m4a';



class MainMenu extends React.Component{
constructor(props){
   super(props);
   this.state = {
   showComponentStart : false,
   showComponentOptions : true,
   showComponentAuthors : false,
   audioPlay : true
   };

   this.handleStartClick = this.handleStartClick.bind(this);
   this.handleOptionsClick = this.handleOptionsClick.bind(this);
   this.handleAuthorsClick = this.handleAuthorsClick.bind(this); 
    this.handleSoundClick = this.handleSoundClick.bind(this);  
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
   handleSoundClick() {
      if(this.state.audioPlay){
          this.setState({audioPlay : false});
      }else{
          this.setState({audioPlay : true});
      }
   }
   playMusic(){
      if(this.state.audioPlay){
      return (
         <audio autoPlay loop>
               <source src={backgroudnMusic} type="audio/x-m4a" />
         </audio>
         );
      }
   }
   render(){
      return(
         <div class="mainMenuDiv">
         {this.playMusic()}
         <button class="start-menu-button start" onClick={this.handleStartClick}>Start Game</button>
         <button class="start-menu-button options" onClick={this.handleOptionsClick}>Options</button>
         <button class="start-menu-button authors" onClick={this.handleAuthorsClick}>Authors</button>
         {this.state.showComponentStart?<StartGameView />:null}
         {this.state.showComponentOptions?<OptionsView action={this.handleSoundClick} audioPlay={this.audioPlay}/>:null}
         {this.state.showComponentAuthors?<Authors />:null}
         </div>
      );
   }
}

export default MainMenu;