import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateActiveAnswer, correctAnswer, mistakeAnswer, rightAnswer, mistakeAdd, updateScore,
} from '../../containers/App/actions';
import './index.scss';
// import audioError from '../../assets/audio/error.mp3';
// import audioSuccess from '../../assets/audio/succes.mp3';

const Answers = () => {
  const dispatch = useDispatch();
  const roundData = useSelector((state) => state.app.roundData);
  const roundWord = useSelector((state) => state.app.roundWord);
  const isRightAnswer = useSelector((state) => state.app.isRightAnswer);
  const roundMistakes = useSelector((state) => state.app.roundMistakes);

  const checkAnswer = (answer) => {
    dispatch(updateActiveAnswer(answer));
    if (answer.name === roundWord.name) {
      !isRightAnswer && dispatch(correctAnswer(answer.name));
      dispatch(rightAnswer(true));
      dispatch(updateScore(5 - roundMistakes));
      // const audio = new Audio(audioSuccess);
      // audio.play();
    } else {
      if (!answer.mistake) {
        dispatch(mistakeAdd());
      }
      !isRightAnswer && dispatch(mistakeAnswer(answer.name));

      // const audio = new Audio(audioError);
      // audio.play();
    }
  };

  return (
    <div className="answer">
      <ul className="answer-list">
        {roundData.map((el) => (
          <li
            className={classNames('answer-list__item',
              { 'answer-list__item--error': el.mistake, 'answer-list__item--success': el.win })}
            key={el.name}
            onClick={() => checkAnswer(el)}
          >
            <span className="mark" />
            <span>{el.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;
