import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Course = () => {
  const renderInput = ({ input, meta, label }) =>
    <div>
      <label htmlFor={label}>{label}</label>
      <input {...input} />
    </div>
  return (
    <ul>
          <Field
            name='courseName'
            label='Course name'
            component={renderInput}
            type='text'
            placeholder='Course name'
          />
          <Field
            name='testAbbre'
            label='Text abbreviation'
            component={renderInput}
            type='text'
            placeholder='Test abbreviation'
          />
          <Field
            name='intrVideo'
            label='Intro video'
            component='input'
            type='checkbox'
          />
        <Field
            name='salesPage'
            label='Sales page'
            component={renderInput}
            type='text'
            placeholder='Sales page'
          />
      <div>
        <label htmlFor='courseDes'>Course description</label>
        <div>
          <Field name='courseDes' component='textarea' />
        </div>
      </div>
    </ul>
  );
};
export default reduxForm({
  form: 'CourseMeta'
})(Course);
