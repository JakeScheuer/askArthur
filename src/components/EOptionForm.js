import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
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
                    <Input
                        placeholder="Example: Look out the window"
                        label="Option:"
                        value={this.props.description}
                        onChangeText={value => this.props.optionUpdate({prop: 'description', value })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Example: BIRDS!!!"
                        label="Name of Pro:"
                        value={this.props.proName}
                        onChangeText={value => this.props.optionUpdate({ prop: 'proName', value })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Value of Pro</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.proVal}
                        onValueChange={value => this.props.optionUpdate({ prop: 'proVal', value })}
                    >
                        <Picker.Item label="not super important" value="1" />
                        <Picker.Item label="considerable" value="2" />
                        <Picker.Item label="important" value="3" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Input
                        placeholder="Example: The red dot might come back"
                        label="Name of Con:"
                        value={this.props.conName}
                        onChangeText={value => this.props.optionUpdate({ prop: 'conName', value })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Value of Con</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.conVal}
                        onValueChange={value => this.props.optionUpdate({ prop: 'conVal', value })}
                    >
                        <Picker.Item label="not super important" value="1" />
                        <Picker.Item label="considerable" value="2" />
                        <Picker.Item label="important" value="3" />
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
      paddingLeft: 20
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
  export default connect(mapStateToProps, { optionUpdate, addOption })(OptionForm);