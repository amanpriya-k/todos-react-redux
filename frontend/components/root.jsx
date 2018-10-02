import React from 'react';
import { Provider } from 'react-redux';
import { App } from './app';


const Root = (props) => {
  return (
  <div>
    <h1> hello</h1>
    <Provider store={ props.store }>
      <App />
    </Provider>
 </div>
  );
};

export default Root;
