/* boiler plate file from create-react-app */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* ********  my files *********** */

/* Navpills is the nav bar at top, although it's not really a nav bar */
import Navpills from "./component/Navpills";

/* Titlebox, image and text above images */
import Titlebox from "./component/Titlebox";
import { List, ListItem } from "./component/List";

/* my trout information file, used for images and initial selection state*/
import trout from "./trout.json";

console.log(trout[0])
/* create a class called App */

class App extends Component {
  /* set the state of those things on the page I'll want to change */
  state = {
    message: "Click a fish to start the game!",
    topScore: 0,
    currentScore: 0,
    clickedTrout: []
  };

/* when I'm done, render to screen */

/* Navpills needs the state of the current message - Start, Good Guess, Bad and game Over */
/* Also needs the currentScore and the topScore, if the topScore is higher than the current state */

  render() {
    return (
      <div className="container">
        <div>
          <Navpills 
            message={this.state.message}
            currentScore={this.state.currentScore}
            topScore={this.state.topScore}   
            />
        </div>
        <div>
          <Titlebox /> 

        {trout.length ? (
              <List>
                {trout.map(trout => (
                  <ListItem key={trout.id}>
                    <img src={trout.image} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

        </div>

      </div>
    );
  }
}

export default App;
