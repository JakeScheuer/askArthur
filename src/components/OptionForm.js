import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from './common';
import { optionUpdate } from '../actions';
import { connect } from 'react-redux';

class OptionForm extends Component {
    render() {
        return (
            <View>
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
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
      fontSize: 18,
      paddingLeft: 20
    }
  };

const mapStateToProps = ({ optionForm }) => {
    const { description, proName, proVal, conName, conVal } = optionForm;

    return { description, proName, proVal, conName, conVal };
};

export default connect(mapStateToProps, { optionUpdate })(OptionForm);