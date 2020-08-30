import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateActiveAnswer } from '../../containers/App/actions';
import './index.scss';

const Answers = () => {
  const dispatch = useDispatch();
  const round = useSelector((state) => state.app.round);
  const data = useSelector((state) => state.app.data);
  const roundWord = useSelector((state) => state.app.roundWord);

  return (
    <div className="answer">
      <ul className="answer-list">
        {data[round].map((el) => (
          <li className="answer-list__item" key={el.name} onClick={() => dispatch(updateActiveAnswer(el))}>
            <span className="mark" />
            <span>{el.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Answers;
