import React, { Component } from 'react';
import { Button, Card, CardSection, Input, } from './common';
import { decsionEntered } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class TitleInput extends Component {

    onButtonPress() {
        Actions.impact();
    }

    onEntry(text){
        this.props.decsionEntered(text);
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
                        placeholder="Example: What should I do today?"
                        label="Decsion:"
                        value={this.props.decsionName}
                        onChangeText={this.onEntry.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
};

const mapStateToProps = ({ decsionInfo }) => {
    const { decsionName } = decsionInfo;
    return { decsionName };
};

export default connect(mapStateToProps, {decsionEntered})(TitleInput);