import React from 'react';
import './App.css';
import AudioComponent from './AudioComponent';
import PhotoComponent from './PhotoComponent';
import {connect} from 'react-redux';
import {getRandomImageIndexAC, resetCounterAC, setCounterAC} from './redux/reducer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.dogAudioRef = React.createRef();
    this.audioSadRef = React.createRef();
  };

  componentDidMount() {
    setInterval(this.getRandomImageIndex, 1000);
  };

  items = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  getRandomImageIndex = () => {
    this.props.getRandomImageIndex();
  };

  incCounter = () => {
    this.props.setCounter(this.props.counter);
    this.dogAudioRef.current.currentTime = 0;
    this.dogAudioRef.current.play();
  };

  resetCount = () => {
    this.props.resetCounter(0);
    this.audioSadRef.current.currentTime = 0;
    this.audioSadRef.current.play();
  };

  render() {
    const itemsComponent = this.items.map(el => <PhotoComponent
      key={el}
      index={el}
      randomImageIndex={this.props.randomImageIndex}
      onClickHandler={this.incCounter}
      resetCount={this.resetCount}/>);
    return (
      <div className="App">
        <AudioComponent audioRef={this.dogAudioRef} audioSadRef={this.audioSadRef}/>
        <div className="wrapper">
          {itemsComponent}
        </div>
        <div className="counter">{this.props.counter}</div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  randomImageIndex: state.randomImageIndex,
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRandomImageIndex() {
      const action = getRandomImageIndexAC();
      dispatch(action);
    },
    setCounter(counter) {
      const action = setCounterAC(counter);
      dispatch(action);
    },
    resetCounter(counter) {
      const action = resetCounterAC(counter);
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
