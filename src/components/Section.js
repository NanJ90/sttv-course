import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import Subsection from './Subsection';

const renderInput = ({ input, meta, label }) =>
  <div>
    <label htmlFor={label}>{label}</label>
    <input {...input} />
  </div>

const Section = ({ title, fields }) => {
  return (
  <ul>
    <li>
      <button type='button' onClick={() => fields.push({})}>Add Section</button>
    </li>
    {fields.map((course, index) =>
      <li key={index}>
        <button type='button' onClick={() => fields.remove(index)}>Remove Section</button>
        <h4>{title}</h4>
            <Field
              name='sectionName'
              label='Section Name'
              component={renderInput}
              type='text'
              placeholder='Section name'
            />
          <div>
            <label htmlFor='introVideo'>Intro Video</label>
          </div>
            <Field
              name='SecDesc'
              component='textarea'
              label='Description'
            />
          <Field name='color' label='Color' component='input' type='text' />
          <FieldArray
            name='subsection'
            component={Subsection}
            title='Subsuction'
          />
      </li>
)}
    </ul>
  );
};

export default reduxForm({
  form: 'courseSec'
})(Section);
