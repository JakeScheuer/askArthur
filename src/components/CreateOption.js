import React, { Component } from 'react';
import { connect } from 'react-redux';
import { optionUpdate, optionCreate } from '../actions/OptionActions';
import { Card, CardSection, Button } from './common';
import OptionForm from './OptionForm';
import { Actions } from 'react-native-router-flux';

class OptionCreate extends Component {
  onButtonPress() {
    const { description, proName, proVal, conName, conVal } = this.props;
    this.props.optionCreate({ description, proName, proVal, conName, conVal });
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

const mapStateToProps = (state) => {
  const { description, proName, proVal, conName, conVal } = state.optionForm;

  return { description, proName, proVal, conName, conVal };
};

export default connect(mapStateToProps, {
  optionUpdate, optionCreate
})(OptionCreate);