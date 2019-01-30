import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class StartPage extends Component {
    onPet() {
        Actions.decsion();
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Text style={styles.welcome}>Welcome indecisive human.</Text>
                </CardSection>
                <CardSection>
                    <Text style={styles.instructions}>To get started, give me a scratch</Text>
                </CardSection>
                <CardSection>
                    <TouchableOpacity onPress={this.onPet.bind(this)}>
                        <Image  
                        source={require('./pathetic2.jpg')} 
                        />
                    </TouchableOpacity>
                </CardSection>
            </Card>
        )
    }
}
  
const styles = {
welcome: {
    color: 'black',
    fontSize: 34,
    textAlign: 'center',
    margin: 20,
    },
instructions: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 25
    }
}

export default StartPage;