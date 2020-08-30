import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import Player from '../Player';

const Description = () => {
  const activeAnswer = useSelector((state) => state.app.activeAnswer);
  console.log(activeAnswer);
  return (
    <div className="description">
      {activeAnswer
        ? (
          <>
            <div className="description-info">
              <img src={activeAnswer.image} alt={activeAnswer.name} className="description-info__img" />
              <div className="description-info__content">
                <h2 className="description-info__name">{activeAnswer.name}</h2>
                <span className="description-info__species">{activeAnswer.species}</span>
                <Player src={activeAnswer.audio} />
              </div>
            </div>
            <p className="description-info__description">{activeAnswer.description}</p>
          </>
        ) : (
          <p className="instruction">
            <span>Послушайте плеер.</span>
            <span>Выберите птицу из списка</span>
          </p>
        )}
    </div>
  );
};

export default Description;
