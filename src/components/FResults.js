import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Button, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { newDecision } from '../actions';

class Results extends Component {  

  onButtonPress() {
    this.props.newDecision();
    Actions.decsion();
  }

  proportion(title, val) {
    const options = [];
    switch(val) {
      case '1':
        options.push(title);
        break;
      case '2':
        options.push(title);
        options.push(title);
        break;
      case '3':
        options.push(title);
        options.push(title);
        options.push(title);
        break;
    };
    return(options);
  }

  calculateDecision() {
    const optionTitlesAndValues = this.props.options.map(
      option =>[option.description, option.proVal]);
    console.log(optionTitlesAndValues);
    const proportioned = optionTitlesAndValues.map(
      option => this.proportion(option[0], option[1]));
    console.log(proportioned);
    const optionTitles = proportioned.flat(1);
    console.log(optionTitles);
    const choice = Math.round(1 + Math.random() * (optionTitles.length-1))-1;
    console.log(choice);
    return (<Text>{optionTitles[choice]}</Text>);
  }

    render() {  
      return (
        <Card>
          <CardSection>
            <Text>
              {this.props.title}
            </Text>
          </CardSection>
          <CardSection>
            <Text>Arthur Thinks You Should:</Text>
          </CardSection>
          <CardSection>
            {this.calculateDecision()}
          </CardSection>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
               Ask Arthur Something Else
            </Button>
          </CardSection>
        </Card>
      );
    }
  };
  const mapStateToProps = (state) => {  
    return { 
        title: state.initial.description,
        complexity: state.initial.complexityValue,
        options: state.list.allOptions
        };
};

export default connect(mapStateToProps, { newDecision })(Results);