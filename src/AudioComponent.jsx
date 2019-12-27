import React from 'react';
import dogAudio from './media/dog.mp3';
import sadDog from './media/sad-dog.mp3';

const AudioComponent = (props) => {
  return (
    <>
      <audio src={dogAudio} ref={props.audioRef}></audio>
      <audio src={sadDog} ref={props.audioSadRef}></audio>
    </>
  )
};

export default AudioComponent;