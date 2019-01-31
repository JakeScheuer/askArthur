import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
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
                    <Text style={styles.welcome}>Welcome To Ask Arthur</Text>
                </CardSection>
                <CardSection>
                    <TouchableOpacity 
                    style={styles.container}
                    onPress={this.onPet.bind(this)}>
                        <Image 
                        style={styles.cat} 
                        source={require('../resources/pathetic2.jpg')}
                        />
                    </TouchableOpacity>
                </CardSection>
                <CardSection>
                    <View style={styles.container}>
                        <Text style={styles.instructions}>Give Arthur A Scratch To Get Started</Text>
                    </View>
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
    fontWeight: 'bold',
    margin: 10,
    },
container: {
    flex: 1,
    alignItems: 'center'
},
cat: {
    borderRadius: 50,
},
instructions: {
    color: 'red',
    fontSize: 18,
    margin: 5
    },
};

export default StartPage;