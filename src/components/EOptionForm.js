import React, { Component } from 'react';
import { Text, Picker, View } from 'react-native';
import { CardSection, Input, Card, Button } from './common';
import { optionUpdate, addOption } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class OptionForm extends Component {
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
                        label="Option:"
                        value={this.props.description}
                        onChangeText={value => this.props.optionUpdate({prop: 'description', value })}
                    />
                </CardSection>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text style={styles.pickerTextStyle}>What Is The Your Value Of The Option?</Text>
                    </View>
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.proVal}
                        onValueChange={value => this.props.optionUpdate({ prop: 'proVal', value })}
                    >
                        <Picker.Item label="It Is Just An Option" value="1" />
                        <Picker.Item label="I Like This As An Option" value="2" />
                        <Picker.Item label="I Am In Favor Of This Option" value="3" />
                    </Picker>
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
     proVal: state.form.proVal
     };
};
  export default connect(mapStateToProps, { optionUpdate, addOption })(OptionForm);