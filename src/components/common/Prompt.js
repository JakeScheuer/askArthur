import React from 'react';
import { Text, View } from 'react-native';

const Prompt = ({ children }) => {
    const { textStyle, textContainer } = styles;

    return(
        <View style={textContainer}>
            <Text style={textStyle}>
                {children}
            </Text>
        </View>
    );
};

const styles = {
    textStyle: {
      fontSize: 18,
      color: 'red'
    },

    textContainer: {
        flex: 1,
        alignItems: 'center'
    }
};

export { Prompt };