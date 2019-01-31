import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Button, CardSection, Card, Prompt, ListItem } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { optionFetch } from '../actions';

class OptionScreen extends Component {  

  componentWillMount() {
    this.props.optionFetch();
    console.log(this.props.allOptions);
  }

  onAddPress() {
    Actions.addOption();
  }
  
  onArthurPress() {
    Actions.ask();
  }

  onDelete() {
    
  }

  renderOptions() {
    return this.props.allOptions.map(listItem =>
      <CardSection key={listItem.description}>
        <ListItem onPress={this.onDelete.bind(this)}>
          {listItem.description}
        </ListItem>
      </CardSection> 
      );
  };

    render() { 
      return (
        <Card>
          <ScrollView>
          <CardSection>
            <Prompt>Your Options:</Prompt>
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
          </ScrollView>
        </Card>
      );
    }
  }

  const mapStateToProps = (state) => {  
    return { allOptions: state.list.allOptions,
             complexity: state.initial.complexityValue };
};

  export default connect(mapStateToProps, { optionFetch })(OptionScreen);