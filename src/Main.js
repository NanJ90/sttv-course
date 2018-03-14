import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import Course from './components/Course';
import Section from './components/Section';
import Practice from './components/Practice';

const Main = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form>
      <Field name='courseName' component={Course} />
      <FieldArray name='section' component={Section} title='Section' />
      <FieldArray name='practice' component={Practice} title='Practice' />
      {/* <div>
        <BtnGroup />
      </div> */}
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'FieldArrays',
  destroyOnUnmount: false
})(Main);
