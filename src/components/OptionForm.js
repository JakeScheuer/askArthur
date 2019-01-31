import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { CardSection, Input, Card, Button, Prompt } from './common';
import { optionUpdate, addOption } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class OptionForm extends Component {
    
    complexityCheck(val){
        switch(val) {
            case '1':
                break;
            case '2':
               return(this.renderValueOption());
            case '3':
                return(this.renderProConOption());
        }
    }
    renderValueOption(){
        return(
            <View>
                <CardSection>
                    <Prompt>What Is The Your Value Of The Option?</Prompt>
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
            </View>
        );

    }
    renderProConOption(){
        return(
            <View>
                <CardSection>
                    <Prompt>What Is The Benefit Of This Option?</Prompt> 
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
                    <Prompt>How Much Do You Value This Benefit?</Prompt>
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
                    <Prompt>What Is The Cost Of This Option?</Prompt>
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
                    <Prompt>How Much Do You Value This Cost?</Prompt>
                </CardSection>   
                <CardSection style={{ flexDirection: 'column' }}>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.conVal}
                        onValueChange={value => this.props.optionUpdate({ prop: 'conVal', value })}
                    >
                        <Picker.Item label="It's Just A Cost" value="0" />
                        <Picker.Item label="This Is A Significant Cost" value="1" />
                        <Picker.Item label="This Is Detrimental" value="2" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
    onButtonPress() {
        this.props.addOption(this.props);
        Actions.options();
    }
    
    render() {
        return (
            <Card>
                <CardSection>
                    <Prompt>What Is The Option?</Prompt>
                </CardSection>   
                <CardSection>
                    <Input
                        placeholder="Arthur's Example: Look out the window"
                        value={this.props.description}
                        onChangeText={value => this.props.optionUpdate({prop: 'description', value })}
                    />
                </CardSection>
                {this.complexityCheck(this.props.complexity)}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Add to Options
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

  const mapStateToProps = (state) => {
    return {
     complexity: state.initial.complexityValue,
     description: state.form.description,
     proName: state.form.proName, 
     proVal: state.form.proVal,
     conName: state.form.conName, 
     conVal: state.form.conVal
    };
};
  export default connect(mapStateToProps, { optionUpdate, addOption })(OptionForm);