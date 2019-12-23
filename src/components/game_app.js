import React, {Component} from 'react';
//components
import GameMap from './game_map';


class GameApp extends Component{

     constructor(props){
         super(props)
     }

     render(){
         return(
            <section>
               <GameMap/>
            </section>
         )
     }
}

export default GameApp;