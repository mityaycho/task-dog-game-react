import React from 'react';
import dogAudio from './media/dog.mp3';


const AudioComponent = (props) => {
  return <audio src={dogAudio} ref={props.audioRef}></audio>;
};

export default  AudioComponent;