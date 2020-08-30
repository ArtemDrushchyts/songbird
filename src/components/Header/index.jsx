import React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination';

const Header = () => {
  const score = useSelector((state) => state.app.gameScore);

  return (
    <div className="header">
      <div className="top-panel">
        <div className="logo" />
        <div className="score">
          Score:
          {' '}
          {score}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default Header;
