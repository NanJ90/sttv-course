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
  handleOnChange(e) {
    const subsection = this.state.subsection;
    subsection[0].subname = e.target.value;
    this.forceUpdate();
  }

  addNewSubsection(newName) {
    //  map obj and save them in const and setState to subname
    //concat everything into the main object
    const newSec = {
      subname: newName
    };
    this.setState({
        subsection: this.state.subsection.concat(newSec)
    });
    console.log('parent', this.state.subsection);
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
