import React from 'react';
import { View, Text, Button } from 'react-native';

const ListItem = ({ onPress, children }) => {
    const { textStyle, container, deleteButton } = styles;
    
    
    return (
        <View style={container}>
            <Text style={textStyle}>
                {children}
            </Text>
            <Button
                style={deleteButton}
                onPress={onPress}
                title="Delete"
                color="red"
            />
        </View>
    );
};

const styles = {
    textStyle: {
      flex: 1,
      paddingLeft: 15,
      fontSize: 16,
      color: 'black'
    },
    container: {
        height: 35,
        flex: 1,
        flexDirection: 'row'
    },
    deleteButton: {
        alignSelf: 'right',
        flex: 1
    }
};

export { ListItem };