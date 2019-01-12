import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { Button, Card, CardSection } from './common';
import { impactEntered, complexityEntered } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class ImpactInput extends Component {

    onButtonPress() {
       Actions.options();
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
                        onValueChange={value => this.props.impactEntered({prop: 'impactValue', value })}
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
                        onValueChange={value => this.props.complexityEntered({ prop: 'complexityValue', value })}
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

const mapStateToProps = ({ decsionInfo }) => {
    const { impactValue, complexityValue } = decsionInfo;
    return { impactValue, complexityValue };
};

export default connect(mapStateToProps, { impactEntered, complexityEntered })(ImpactInput);