import React from 'react';
import './index.scss';
import Pagination from '../Pagination';

const Header = () => (
  <div className="header">
    <div className="top-panel">
      <div className="logo" />
      <div className="score">Score: 0</div>
    </div>
    <Pagination />
  </div>
);

export default Header;
