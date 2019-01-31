import React, { Component } from 'react';
import { Picker } from 'react-native';
import { Button, Card, CardSection, Prompt } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { impactChanged, complexityChanged } from '../actions';

class ImpactInput extends Component {

    onButtonPress() {
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
                <CardSection>
                    <Prompt>How Difficult Is This Decision?</Prompt>
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.complexityValue}
                        onValueChange={value => this.props.complexityChanged(value)}
                    >
                        <Picker.Item label="It's Really Not" value="1" />
                        <Picker.Item label="I Need Some Help" value="2" />
                        <Picker.Item label="It's Overwhelming" value="3" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Prompt>How Stressful Is This Decision?</Prompt>
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.impactValue}
                        onValueChange={value => this.props.impactChanged(value)}
                    >
                        <Picker.Item label="Not At All" value="1" />
                        <Picker.Item label="A Little" value="2" />
                        <Picker.Item label="Moderately" value="3" />
                        <Picker.Item label="I Am Freaking Out A Bit" value="4" />
                        <Picker.Item label="Impending Doom" value="5" />
                    </Picker>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
  
    return { impactValue: state.initial.impactValue,
            complexityValue: state.initial.complexityValue
        };
  };
  
  export default connect(mapStateToProps, { impactChanged, complexityChanged })(ImpactInput);
