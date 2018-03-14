import React, { Component } from 'react';
import { Row, Icon, Col } from 'react-materialize';
import Section from './Section';

class MetaData extends Component {
  constructor() {
    super();
    this.state = {
      showElement: false,
      name: '',
      subsection: [
          {
            subname: ''
          }
        ]
    };
  }
  handleClick() {
    // console.log("clicked");
    this.setState({ showElement: !this.state.showElement });
  }
  render() {
    return (
      <Row>
        <Col s={6}>
        <form>
          <label>
            Course Name:
            <input type="text" name="name" />
          </label>
          <label>
            Test Abbreviation:
            <input type="text" />
          </label>
          <label s={6}>
            Intro Video: <Icon small>add box</Icon>
          </label>
          <label s={6}>
            Sales Page: <input />
          </label>
          <label>
            Course Description:
            <textarea />
          </label>
        </form>
      </Col>
      <Col s={6}>
        <a onClick={this.handleClick.bind(this)} showElement={this.showElement === true}>section</a>
          { this.state.showElement
                ?
                <div> <Section /></div>
                :
                null
              }
        <a
          onClick={this.handleClick.bind(this)}
          showElement={this.showElement === true}>downloads</a>
        { this.state.showElement
              ?
              <div>dowlowd</div>
              :
              null
            }
        subsection
        practice
        test
      </Col>
      </Row>
    );
  }
}

export default MetaData;
