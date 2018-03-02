import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import store from './store';
// import showResults from "./showResults";
import Form from './components/Form';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <Form />
      {/* <Values form="meta" /> */}
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
