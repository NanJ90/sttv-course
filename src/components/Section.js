import React, { Component } from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';
import SubmitBtn from '../buttons/SubmitBtn';
import Subsection from '../subsection/Subsection';

class Section extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      subsection: [
          {
            subname: ''
          }
        ]
    };
  }
  handleOnChange(e, idx) {
    const subsection = this.state.subsection;
    subsection[idx].subname = e.target.value;
    this.forceUpdate();
  }
  deleteSubsection = (idx) => () => {
    this.setState({
      subsection: this.state.subsection.filter((sub, _idx) => _idx !== idx),
    });
  }
  addNewSubsection() {
    this.setState({
        subsection: this.state.subsection.concat([{ subname: '' }])
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div style={styles.containerStyle}>
        {/*section name  */}
        <Row>
          <h5>Course:</h5>
          <Input s={12} />
        </Row>
        {/*intro video*/}
        <Row>
          <h5>Upload</h5>
          <a href='#'><Icon large>folder</Icon></a>
          <Input s={12} type='radio' value='add_to_trial' label="included in trial" />
        </Row>
        {/*resource/workshit*/}
        <Row>
          <h5>Worksheet:</h5>
          <a href="#"><Icon large>folder</Icon></a>
        </Row>
        {/*subsection component*/}
        <Subsection
          subsection={this.state.subsection}
          handleOnChange={this.handleOnChange.bind(this)}
          deleteSubsection={this.deleteSubsection.bind(this)}
          addNewSubsection={this.addNewSubsection.bind(this)}
        />
        {/*Submit whole page  */}
        <br />
        <Row>
          <Button>
            <SubmitBtn submit='submit' />
          </Button>
        </Row>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    textAlign: 'center'
  }
};

export default Section;
