import React, { Component } from 'react';
import FrameCard from "./components/FrameCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import frames from "./frames.json";
import './App.css';


let chosenFrames = [];
class App extends Component {
  // Setting this.state.frames to the frames json array
  state = {
    frames,
    score: 0
  };
  
  componentDidMount() {
    this.setState({ frames });
  };
  
  clickedFrame = id => {
    console.log("This id", id);
    console.log("chosenFrames", chosenFrames)
    this.shuffle();
    if (chosenFrames.includes(id)) {
      // reset the game
      this.setState({ score: 0 })
      chosenFrames = []
    } else {
      //++ score
      this.setState({ score: this.state.score + 1 })
      chosenFrames.push(id);
    }

  };

  randoFrame = () => {
    let randoFrames = this.state.Frames;
    let currentIndex = randoFrames.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = randoFrames[currentIndex];
      randoFrames[currentIndex] = randoFrames[randomIndex];
      randoFrames[randomIndex] = temporaryValue;
    }

    this.setState({ Frames: randoFrames })
    console.log("Frames Shuffled: ", randoFrames)
  }
    render() {

    return (
      <Wrapper>
        <Title>Memory|Frame</Title>
        {this.state.frames.map(frame => (
          <FrameCard
            frameClick={this.randoFrame}
            id={frame.id}
            key={frame.id}
            name={frame.name}
            image={frame.image}
          />
        ))}
      </Wrapper>
      );
    
    }
}

export default App;
