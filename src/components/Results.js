import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
      case -1:
        break;
      case 0:
        options.push(title);
      case 1:
        options.push(title);
        options.push(title);
        break;
      case 2:
        options.push(title);
        options.push(title);
        options.push(title);
        break;
      case 3:
        options.push(title);
        options.push(title);
        options.push(title);
        options.push(title);
        break;
    };
    return(options);
  }

  calculateDecision() {
    const optionTitlesAndValues = this.props.options.map(
      option =>[option.description, parseInt(option.proVal, 10), parseInt(option.conVal, 10)]);
     console.log(optionTitlesAndValues);
    const proportioned = optionTitlesAndValues.map(
      option => this.proportion(option[0], (option[1]-option[2])));
     console.log(proportioned);
    const optionTitles = proportioned.flat(1);
     console.log(optionTitles);
    const choice = Math.round(1 + Math.random() * (optionTitles.length-1))-1;
     console.log(choice);
    return (<Text style={styles.resultText}>{optionTitles[choice]}</Text>);
  }

    render() {  
      return (
        <Card>
          <CardSection>
            <View style={styles.container}>
              <Text style={styles.titleText}>{this.props.title}</Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.container}>
              <Text style={styles.defaultText}>Arthur Says...</Text>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.container}>
              {this.calculateDecision()}
            </View>
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

  const styles = {
    defaultText: {
      fontSize: 20,
      color: 'black',
      fontWeight: "200"
    },
    titleText: {
      fontSize: 32,
      color: 'black',
      fontWeight: "400"
    },
    resultText: {
      fontSize: 40,
      color: 'black',
      fontWeight: "800"
    },
    container: {
        flex: 1,
        alignItems: 'center',
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