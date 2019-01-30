import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Button, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { optionFetch } from '../actions';

class OptionScreen extends Component {  

  componentWillMount() {
    this.props.optionFetch();
    console.log(this.props.allOptions);
  }

  onButtonPress() {
    Actions.addOption();
    }

  renderOptions() {
    return this.props.allOptions.map(listItem =>
      <CardSection>
        <Text>{listItem.description}</Text>
      </CardSection> 
      );
  };

    render() { 
      return (
        <View>
          <ScrollView>
           {this.renderOptions()}
          </ScrollView>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
               Add Option
            </Button>
          </CardSection>
        </View>
      );
    }
  }
  const mapStateToProps = (state) => {  
    return { allOptions: state.list.allOptions };
};

  export default connect(mapStateToProps, { optionFetch })(OptionScreen);