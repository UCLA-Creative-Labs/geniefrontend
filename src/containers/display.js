import React from 'react';

import COMPONENTS, { getElement } from '../config/config';
import Card from '../components/Card';
import Button from '../components/Button';
import ButtonBar from '../components/ButtonBar';
import Heading from '../components/Heading';
import Image from '../components/Image';
import InlineStepper from '../components/InlineStepper';
import SearchBar from '../components/SearchBar';
import Paragraph from '../components/Paragraph';
import phone from '../assets/images/phone.png';
import { getDisplay } from '../api/api';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testcomponents: [],
      components: [],
      err: false,
    };

    this.setComponents = this.setComponents.bind(this);
  }

  componentDidMount() {
    this.getComponents();
  }

  async getComponents() {
    this.setState({
      testcomponents: COMPONENTS,
    });
  }

  async setComponents() {
    const json = await getDisplay();
    if (json.err) {
      this.setState({
        err: json.err,
      });
    } else {
      this.setState({
        components: json.components,
      });
    }
  }

  render() {
    const displayStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      padding: '5rem'
    };

    const cardStyle = {
      position: 'relative',
      marginTop: '50px',
      width: '330px',
      height: '490px',
      overflow: 'scroll',
      padding: '2px 0 0 0'
    };

    const onClickNull = () => {};

    return (
      <div>
        <div className="display" style={displayStyle}>
          <Card size="medium" >
            {this.state.testcomponents.map((component, index) => (
              getElement(component, index)
            ))}
          </Card>
          <Button onClick={this.setComponents} color="primary" label="Get Display" />
        </div>
        <div className="page-container">
          <div className="phone-container">
            <img className="phone" alt="phone" src={phone} />
            <div style={cardStyle}>
              <Card size="small">
                <SearchBar />
                <Heading center content="genie" headingLevel={1} />
                <Image />
                <Heading content="Learn" headingLevel={3} />
                <Paragraph />
                <Paragraph />
                <Paragraph />
                <InlineStepper label="yuh" />
                <Heading content="Learn" headingLevel={3} />
                <Paragraph />
                <Paragraph />
                <ButtonBar label="title" buttonLabel="clicky" buttonColor="primary" onClick={onClickNull} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
