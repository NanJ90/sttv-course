import React from 'react';

const Practice = ({ fields }) => (
  <ul>
    <button type='button' onClick={() => fields.push()}>Add Practice</button>
  </ul>
  );

export default Practice;
