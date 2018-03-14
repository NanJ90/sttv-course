import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './Main';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <Main />
    </div>
  </Provider>,
  rootEl
);

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import MetaData from './components/Metadata';
// // import Section from './components/Section';
//
// console.log('React Fired');
// const App = () => (
//   <div>
//     <MetaData />
//
//     {/* <Section /> */}
//   </div>
//   );
//
// ReactDOM.render(<App />, document.getElementById('root'));
