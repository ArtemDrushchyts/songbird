import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import Player from '../Player';
import bird from '../../assets/image/bird.jpg';

const Question = () => {
  const roundWord = useSelector((state) => state.app.roundWord);
  const isRightAnswer = useSelector((state) => state.app.isRightAnswer);

  return (
    <div className="random-bird">
      <img className="bird-img" src={isRightAnswer ? roundWord.image : bird} alt={roundWord.name} />
      <div className="bird-content">
        <h3 className="bird-title">{ isRightAnswer ? roundWord.name : '******'}</h3>
        <div className="audio-player">
          <Player src={roundWord.audio} />
        </div>
      </div>
    </div>
  );
};

export default Question;
