import React from 'react';
import './index.scss';
import Player from '../Player';
import data from '../../assets/data/index';

const Question = () => {
  console.log(data[0][0].audio);
  return (
    <div className="random-bird">
    <img className="bird-img" src="" alt=""/>
    <div className="bird-content">
      <h3 className="bird-title">Cорока</h3>
      <div className="audio-player">
        <Player src={data[0][0].audio}/>
      </div>
    </div>
  </div>
  )
}

export default Question;
