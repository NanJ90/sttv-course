import React from 'react';

const SubmitBtn = ({ submit, handleSubmit }) => {
  return (
    <div onClick={() => handleSubmit()} >
      {submit}
    </div>
  );
};

export default SubmitBtn;
