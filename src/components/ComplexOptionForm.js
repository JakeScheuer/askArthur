import React, { Component } from 'react';
import { Text, Picker, View } from 'react-native';
import { CardSection, Input, Card, Button } from './common';
import { optionUpdate, addOption } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class ComplexOptionForm extends Component {
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
                        <Text style={styles.pickerTextStyle}>What Is The Benefit Of This Option?</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Arthur's Example: BIRDS!!!"
                        label="Name of Pro:"
                        value={this.props.proName}
                        onChangeText={value => this.props.optionUpdate({ prop: 'proName', value })}
                    />
                </CardSection>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text style={styles.pickerTextStyle}>How Much Do You Value This Benefit?</Text>
                    </View>
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.proVal}
                        onValueChange={value => this.props.optionUpdate({ prop: 'proVal', value })}
                    >
                        <Picker.Item label="It's Just A Benefit" value="1" />
                        <Picker.Item label="I Like This Benefit" value="2" />
                        <Picker.Item label="I Highly Value This Benefit" value="3" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text style={styles.pickerTextStyle}>What Is The Cost Of This Option?</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Arthur's Example: Red dot might come back"
                        label="Name of Con:"
                        value={this.props.conName}
                        onChangeText={value => this.props.optionUpdate({ prop: 'conName', value })}
                    />
                </CardSection>
                <CardSection>
                    <View style={styles.textContainer}>
                        <Text style={styles.pickerTextStyle}>How Much Do You Value This Cost?</Text>
                    </View>
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.conVal}
                        onValueChange={value => this.props.optionUpdate({ prop: 'conVal', value })}
                    >
                        <Picker.Item label="It's Just A Cost" value="1" />
                        <Picker.Item label="This Is A Significant Cost" value="2" />
                        <Picker.Item label="This Is Detrimental" value="3" />
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
     proName: state.form.proName, 
     proVal: state.form.proVal,
     conName: state.form.conName, 
     conVal: state.form.conVal 
     };
};
  export default connect(mapStateToProps, { optionUpdate, addOption })(ComplexOptionForm);