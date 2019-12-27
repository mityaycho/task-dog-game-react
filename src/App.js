import React from 'react';
import './App.css';
import AudioComponent from './AudioComponent';
import PhotoComponent from './PhotoComponent';
import {connect} from "react-redux";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.dogAudioRef = React.createRef();
    this.audioSadRef = React.createRef();
  };

  state = {
    randomImageIndex: 4,
    counter: 0
  };

  componentDidMount() {
    setInterval(this.getRandomImageIndex, 1000);
  };

  items = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  getRandomImageIndex = () => {
    this.setState({randomImageIndex: Math.floor(Math.random() * 9)});
  };

  incCounter = () => {
    this.setState({counter: this.state.counter + 1});
    this.dogAudioRef.current.currentTime = 0;
    this.dogAudioRef.current.play();
  };

  resetCount = () => {
    this.setState({counter: 0});
    this.audioSadRef.current.currentTime = 0;
    this.audioSadRef.current.play();
  };

  render() {
    const itemsComponent = this.items.map(el => <PhotoComponent
      key={el}
      index={el}
      randomImageIndex={this.state.randomImageIndex}
      onClickHandler={this.incCounter}
      resetCount={this.resetCount}/>);
    return (
      <div className="App">
        <AudioComponent audioRef={this.dogAudioRef} audioSadRef={this.audioSadRef}/>
        <div className="wrapper">
          {itemsComponent}
        </div>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapDispatchToProps)(App);
