import React, { Component } from 'react';
import { Row, Input, Icon, Button } from 'react-materialize';
// import Iframe from 'react-iframe';
import AddSubBtn from '../buttons/AddSubBtn';

class Subsection extends Component {
  // handleShareholderNameChange = (idx) => (evt) => {
  //   const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
  //     if (idx !== sidx) return shareholder;
  //     return { ...shareholder, name: evt.target.value };
  //   });
  //
  //   this.setState({ shareholders: newShareholders });
  // }

  handleContextChange = (idx) => (event) => {
    const newSection = this.props.subsection.map((sub, sidx) => {
      if (idx !== sidx) return sub;
      return { ...sub, subname: event.target.value };
    });
    this.setState({ subsection: newSection });
  }

  renderSubsection() {
    return this.props.subsection.map((sub, idx) => {
      return (
        <Row key={sub.subname}>
          <h5>Name:</h5>
          <Input
            s={12}
            onChange={this.handleContextChange(idx)}
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
    // console.log(this.props);
    return (
          <div>
            {this.renderSubsection()}
            <Row>
              <AddSubBtn button='Add New' addNewSubsection={this.props.addNewSubsection} />
            </Row>
          </div>
      );
  }
}

export default Subsection;
