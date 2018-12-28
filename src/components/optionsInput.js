import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class OptionInput extends Component {
    // renderItem(decisionInfo) {

    // }
    state = { description: '', pro: '', con: '', loading: false };

    onButtonPress() {
       const { description, pro, con } = this.state;

       this.setState({ loading: true });

       //function needed for moving on and checking for errors
       //.then(this.onSuccess.bind(this))
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
            Next
            </Button>
        );
    }

    onSuccess() {
        this.setState({
            description: '',
            pro: '',
            con: '',
            loading: false
        });
    }

    render() {
        return (
            //ability to create more dynamically (add another option button)
            // <FlatList
            // data={this.props.decisionInfo}
            // renderItem={this.renderItem}
            // keyExtractor={decision => decision.decisionTitle}
            // >
            <Card>
                <CardSection>
                    <Input
                        placeholder="Example: Look out the window"
                        label="Option:"
                        value={this.state.description}
                        onChangeText={description => this.setState({ description })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Example: BIRDS!!!"
                        label="Pro:"
                        value={this.state.pro}
                        onChangeText={pro => this.setState({ pro })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Example: The red dot might come back"
                        label="Con:"
                        value={this.state.con}
                        onChangeText={con => this.setState({ con })}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
            // </FlatList>
        )
    }
}

export default OptionInput;