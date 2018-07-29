import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameCard from './components/GameCard';
import data from "./data.json";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavigationBar";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    data
  };
  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      console.log(item);
      const newItem = { ...item };
      console.log(newItem);
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };
  //handleCorrectGuess
  //handleIncorrectGuess
  //resetGame
  //shuffleData
  //componentDidMount
//freecodeReact
  
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
                   {this.state.data.map(cardimg=> (
        <GameCard
        id={cardimg.id}
             key={cardimg.id}
              clicked={cardimg.clicked}
               image={cardimg.image}
               handleClick={this.handleItemClick}
         />

    )
      )};
     </Wrapper>
      //   <Title>Friends List</Title>
      

    );
}
}

export default App;
