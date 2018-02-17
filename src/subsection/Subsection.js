import React, { Component } from 'react';
import { Row, Input, Icon } from 'react-materialize';
import AddSubBtn from '../buttons/AddSubBtn';

class Subsection extends Component {
  renderSubsection() {
    const { subsection, handleOnChange } = this.props;
    return subsection.map((sub, idx) => {
      return (
        <Row key={idx}>
          <h5>Name:</h5>
          <Input
            s={12}
            onChange={() => handleOnChange(idx)}
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
    return (
          <div>
            {this.renderSubsection()}
            <Row>
              <AddSubBtn
                button='Add New'
                addNewSubsection={this.props.addNewSubsection}
              />
            </Row>
          </div>
      );
  }
}

export default Subsection;
