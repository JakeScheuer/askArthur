import React, { Component } from 'react';
import { connect } from 'react-redux';
import { optionUpdate, optionCreate } from '../actions/OptionActions';
import { Card, CardSection, Button } from './common';
import OptionForm from './OptionForm';
import { Actions } from 'react-native-router-flux';

class OptionCreate extends Component {
  onButtonPress() {
    const { description, proName, proVal, conName, conVal } = this.props;
    const createdOption = [ description, proName, proVal, conName, conVal ];
    this.props.optionCreate(createdOption);
    Actions.options();
  }

  render() {
    return (
      <Card>
        <OptionForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add to Options
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ options }) => {
  const { allOptions } = options;

  return { allOptions };
};

export default connect(mapStateToProps, { optionCreate, optionUpdate })(OptionCreate);