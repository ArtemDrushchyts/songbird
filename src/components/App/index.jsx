import React from 'react';
import './index.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { update } from '../../containers/App/actions';
import Header from '../Header';
import Question from '../Question';

const App = () =>
// const dispatch = useDispatch();
// const game = useSelector((state) => state.app.group);

  (
    <div className="app">
      <Header />
      <Question />
      {/* hello
      {' '}
      {game}
      <button onClick={() => dispatch(update(3))}>Click</button> */}
    </div>
  );
export default App;
