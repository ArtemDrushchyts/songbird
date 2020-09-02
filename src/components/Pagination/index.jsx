import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

const Pagination = () => {
  const list = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птичы', 'Хищные птицы', 'Морские птицы'];
  const round = useSelector((state) => state.app.round);
  return (
    <ul className="pagination">
      {list.map((el, index) => {
        if (round === index) {
          return <li className="page-item active" key={el}>{el}</li>;
        }
        return <li className="page-item" key={el}>{el}</li>;
      })}
    </ul>
  );
};

export default Pagination;
