import React, { Component } from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';
import SubmitBtn from './SubmitBtn';
import Subsection from '../subsection/Subsection';

class Section extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Row>
          <h3>Course</h3>
          <Input s={12} />
        </Row>

        <Row>
          <h3>Upload</h3>
          <a><Icon large>folder</Icon></a>
          <Input s={12} type='radio' value='add_to_trial' label="included in trial" />
        </Row>

        <Row>
          <Subsection />
          <Button>
            <SubmitBtn submit='submit' />
          </Button>
        </Row>
      </div>
    );
  }
}

export default Section;
