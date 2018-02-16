import React, { Component } from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';
// import Iframe from 'react-iframe';
// import AddSubBtn from '../buttons/AddSubBtn';

class Subsection extends Component {

  // handleInput = (idx) => (event) => {
  //   const newSubName = this.props.subsection.map((sub, sidx) => {
  //     if (idx !== sidx) return sub;
  //     return { ...sub, subname: event.target.value };
  //   });
  //   this.setState({ subsection: newSubName });
  // }
  // handleContextChange = (event) => {
  //   // console.log(window.event.target);
  //   const subsection = this.props.subsection;
  //   subsection[0].subname = event.target.value;
  //   this.forceUpdate();
  // }
  // state = { input: '' };
  // updateInput(e) {
  //   this.setState({
  //     input: e.target.value
  //   });
  //   console.log('child', this.state.input);
  // }
  renderSubsection() {
    const { subsection, handleOnChange } = this.props;
    return subsection.map((sub, idx) => {
      return (
        <Row key={idx}>
          <h5>Name:</h5>
          <Input
            s={12}
            // onChange={this.updateInput.bind(this)}
            onChange={handleOnChange}
            value={sub.subname}
          />
          <h5>Video album <Icon>clear</Icon></h5>
          <a href='#' s={12}><Icon large>attach_file</Icon></a>
          <Input s={12}type='radio' value='add_to_trial' label="included in trial" />
        </Row>
      );
    });
  }

  render() {
    // console.log(this.state.value);
    return (
          <div>
            {this.renderSubsection()}
            <Row>
              {/* <AddSubBtn
                button='Add New'
                addNewSubsection={this.props.addNewSubsection}
              /> */}
              <Button onClick={() => this.props.addNewSubsection(this.state.input)}>Add</Button>
            </Row>
          </div>
      );
  }
}

export default Subsection;
