import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection, Input, Card, Button } from './common';
import { optionUpdate, addOption } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class SimpleOptionForm extends Component {
    onButtonPress() {
        this.props.addOption(this.props);
        Actions.options();
    }
    
    render() {
        return (
            <Card>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text style={styles.pickerTextStyle}>What Is The Option?</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Arthur's Example: Look out the window"
                        value={this.props.description}
                        onChangeText={value => this.props.optionUpdate({prop: 'description', value })}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Add to Options
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
      fontSize: 18,
      color: 'red'
    },

    textContainer: {
        flex: 1,
        alignItems: 'center'
    }
};

  const mapStateToProps = (state) => {
     return {
     description: state.form.description, 
     };
};
  export default connect(mapStateToProps, { optionUpdate, addOption })(SimpleOptionForm);