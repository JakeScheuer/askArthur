import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';
import { impactEntered, complexityEntered } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//import Dropdown from 'react-dropdown'


//CHANGE INPUTS TO DROPDOWN VALUES!!!!

class ImpactInput extends Component {

    onButtonPress() {
       Actions.options();
    }

    onImpact(text){
        this.props.impactEntered(text);
    }

    onComplex(text){
        this.props.complexityEntered(text);
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
                    <Input
                        placeholder="1 = doesnt effect anything 3 = determines everything"
                        label="Impact:"
                        value={this.props.impactValue}
                        onChangeText={this.onImpact.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="1 = straight forward 3 =  this is a mess"
                        label="Complexity:"
                        value={this.props.complexityValue}
                        onChangeText={this.onComplex.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

/* <Dropdown 
                        options={iOptions} 
                        onChange={this.onImpact.bind(this)}
                        value={this.props.impactValue}
                        placeholder="Select an option"
                        />
const defaultOption = options[0];
const iOptions = [{ value: '1', label: 'Not a big deal'},
                { value: '2', label: 'This matters'},
                { value: '3', label: 'The importance of this scares me'}];

const cOptions = [{ value: '1', label: 'Pretty simple decision'},
                { value: '2', label: 'This requires some thought'},
                { value: '3', label: 'This is an absolute mess'}];

                 */

const mapStateToProps = ({ decsionInfo }) => {
    const { impactValue, complexityValue } = decsionInfo;
    return { impactValue, complexityValue };
};

export default connect(mapStateToProps, { impactEntered, complexityEntered })(ImpactInput);