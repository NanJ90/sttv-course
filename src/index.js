import React from 'react';
import ReactDOM from 'react-dom';

// import MetaData from './components/Metadata';
import Section from './components/Section';

console.log('React Fired');
const App = () => (
  <div>
    {/* <MetaData /> */}
    <Section />
  </div>
  );

ReactDOM.render(<App />, document.getElementById('root'));
