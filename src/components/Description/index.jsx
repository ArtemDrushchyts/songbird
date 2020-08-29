import React from 'react';
import './index.scss';
import Player from '../Player';

const Description = () => (
  <div className="description">
    <div className="description-info">
      <img src="" alt="" className="description-info__img" />
      <div className="description-info__content">
        <h2 className="description-info__name">Сорока</h2>
        <span className="description-info__species">Сорокий</span>
        <Player />
      </div>
    </div>
    <p className="description-info__description">lorem input</p>
  </div>
);

export default Description;
