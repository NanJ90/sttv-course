import React, { Component } from 'react';
import { Row, Input, Icon } from 'react-materialize';
import AddSubBtn from '../buttons/AddSubBtn';

class Subsection extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }
  renderSubsection() {
    const { subsection, handleOnChange, deleteSubsection } = this.props;
    return subsection.map((sub, idx) => {
      // console.log();
      return (
        <Row key={idx}>
          <h5>Name:<a onClick={deleteSubsection(idx)}><Icon>clear</Icon></a></h5>
          <Input
            s={12}
            onChange={event => handleOnChange(event, idx)}
            value={sub.subname}
          />
          <h5>Video album</h5>
          <a s={12}><Icon large>attach_file</Icon></a>
          <Input
            s={12}
            type='checkbox'
            value='add_to_trial'
            label="included in trial"
          />
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
            <div ref={(el) => { this.el = el; }} />
          </div>
      );
  }
}

export default Subsection;
