import React from 'react';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../containers/App/actions';

const App = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.app.group);

  return (
    <div className="app">
      hello
      {' '}
      {game}
      <button onClick={() => dispatch(update(3))}>Click</button>
    </div>
  );
};

export default App;
