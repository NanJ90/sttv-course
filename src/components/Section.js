import React, { Component } from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';
// import SubmitBtn from '../buttons/SubmitBtn';
// import Subsection from '../subsection/Subsection';

class Section extends Component {
  // handleCourseChange(e) {
  //   this.setState({
  //     name: e.target.value
  //   });
  // }
  // handleOnChange(e, idx) {
  //   const subsection = this.state.subsection;
  //   subsection[idx].subname = e.target.value;
  //   this.forceUpdate();
  // }
  // deleteSubsection = (idx) => () => {
  //   this.setState({
  //     subsection: this.state.subsection.filter((sub, _idx) => _idx !== idx),
  //   });
  // }
  // addNewSubsection() {
  //   this.setState({
  //       subsection: this.state.subsection.concat([{ subname: '' }])
  //   });
  // }
  // handleSubmit() {
  //   this.setState({
  //     name: '',
  //     subsection: [
  //         {
  //           subname: ''
  //         }
  //       ]
  //   });
  //   window.location.reload();
  // }
  render() {
    // console.log(this.state);
    return (
      <div style={styles.containerStyle}>
        {/*section name  */}
        <Row>
          <h5>Course:</h5>
          <Input
            s={12}
            // value={this.state.name}
            // onChange={this.handleCourseChange.bind(this)}
          />
        </Row>
        {/*intro video*/}
        <Row>
          <h5>Upload</h5>
          <a><Icon large>folder</Icon></a>
          <Input
            s={12}
            type='checkbox'
            value='add_to_trial'
            label="included in trial"
            // checked={this.state.isTrial}
            // onChange={this.handleincludeTrial.bind(this)}
          />
        </Row>
        {/*resource/workshit*/}
        <Row>
          <h5>Worksheet:</h5>
          <a><Icon large>folder</Icon></a>
        </Row>
        {/*subsection component*/}
        {/* <Subsection
          subsection={this.state.subsection}
          handleOnChange={this.handleOnChange.bind(this)}
          deleteSubsection={this.deleteSubsection.bind(this)}
          addNewSubsection={this.addNewSubsection.bind(this)}
        /> */}
        {/*Submit whole page  */}
        {/* <br />
        <Row>
          <Button>
            <SubmitBtn submit='submit' handleSubmit={this.handleSubmit.bind(this)} />
          </Button>
        </Row> */}
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
