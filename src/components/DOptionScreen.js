import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, CardSection, Card } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { optionFetch } from '../actions';

class OptionScreen extends Component {  

  componentWillMount() {
    this.props.optionFetch();
    console.log(this.props.allOptions);
  }

  onAddPress() {
    switch (this.props.complexity) {
      case '1':
        Actions.simpleOption();
        break;
      case '2':
        Actions.addOption();
        break;
      case '3':
        Actions.complexOption();
        break;
      default:
        Actions.addOption();
        break;
    }
  }
  
  onArthurPress() {
    Actions.ask();
  }

  renderOptions() {
    return this.props.allOptions.map(listItem =>
      <CardSection key={listItem.description}>
        <Text>{listItem.description}</Text>
      </CardSection> 
      );
  };

    render() { 
      return (
        <Card>
          <CardSection>
            <View style={styles.textContainer}>
              <Text style={styles.pickerTextStyle}>Your Options:</Text>
            </View>
          </CardSection>
          <CardSection>
            <ScrollView>
              {this.renderOptions()}
            </ScrollView>
          </CardSection>
          <CardSection>
            <Button onPress={this.onAddPress.bind(this)}>
               Add An Option
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.onArthurPress.bind(this)}>
               Ask Arthur
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
    return { allOptions: state.list.allOptions,
             complexity: state.initial.complexityValue };
};

  export default connect(mapStateToProps, { optionFetch })(OptionScreen);