import React from 'react';
import dogPhoto from './media/dog.jpg';


const PhotoComponent = (props) => {
  let imgClass = props.index === props.randomImageIndex ? "photo show" : "photo";
  let onClickHandler = props.index === props.randomImageIndex ? props.onClickHandler : () => {};
  return <div className="item" onClick={onClickHandler}><img src={dogPhoto} className={imgClass} /></div>;
};

export default  PhotoComponent;