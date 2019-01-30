import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { impactChanged, complexityChanged } from '../actions';

class ImpactInput extends Component {

    onButtonPress() {
        console.log(this.props.impactValue);
        console.log(this.props.complexityValue);
       Actions.options();
    }
    onImpactChange(text) {
        this.props.impactChanged(text);
    }
    onComplexityChange(text) {
        this.props.complexityChanged(text);
    }
    renderButton() {
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
            Next
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Importance of Decision</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.impactValue}
                        onValueChange={value => this.props.impactChanged(value)}
                    >
                        <Picker.Item label="Trivial" value="1" />
                        <Picker.Item label="Of Significant Value" value="2" />
                        <Picker.Item label="Very Serious" value="3" />
                    </Picker>
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Complexity of Decision</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.complexityValue}
                        onValueChange={value => this.props.complexityChanged(value)}
                    >
                        <Picker.Item label="Doesn't Change Much or Anything" value="1" />
                        <Picker.Item label="Will Have Some Effect on Other Events" value="2" />
                        <Picker.Item label="This Will Have a Great Impact" value="3" />
                    </Picker>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
      fontSize: 18,
      paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
  
    return { impactValue: state.initial.impactValue,
            complexityValue: state.initial.complexityValue
        };
  };
  
  export default connect(mapStateToProps, { impactChanged, complexityChanged })(ImpactInput);
