import React from 'react';
import './index.scss';
import Player from '../Player';

const Question = () => (
  <div className="random-bird">
    <img className="bird-img" src="" alt=""/>
    <div className="bird-content">
      <h3 className="bird-title">Cорока</h3>
      <div className="audio-player">
        <Player />
      </div>
    </div>
  </div>
);

export default Question;
