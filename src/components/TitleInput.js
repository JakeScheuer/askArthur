import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Prompt } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { titleChanged } from '../actions';

class TitleInput extends Component {

    onButtonPress() {
        Actions.impact();
    }

    onTitleChange(text){
        this.props.titleChanged(text);
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
                    <Prompt>What Is Troubling You?</Prompt>
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Arthur's Example: What should I do today?"
                        value={this.props.description}
                        onChangeText={this.onTitleChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
};


const mapStateToProps = (state) => {
    return { description: state.initial.description };
};

export default connect(mapStateToProps, { titleChanged })(TitleInput);