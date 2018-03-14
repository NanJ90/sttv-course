import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
const Subsection = ({ title, fields }) =>
  <ul>
    <li>
      <button type='button' onClick={() => fields.push({})}>Subsection</button>
    </li>
    {fields.map((sub, index) =>
    <li key={index}>
      <button type='button' onClick={() => fields.remove(index)}>Remove Subsection</button>
      <h5>{title}</h5>
    <label htmlFor='subsectionName'>Subsection name</label>
    <Field
      name='subsectionName'
      component='input'
      type='text'
    />
    </li>
    )}
  </ul>

export default reduxForm({
  form: 'subSec'
})(Subsection);
