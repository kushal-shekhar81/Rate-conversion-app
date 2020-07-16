import React, {useState, useEffect} from 'react';
import {View, Keyboard, Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        left: 0,
        right: 0,
        bottom: 0
    }
});

export const KeyboardSpacer = ({onToggle}) => {
    const [keyboardSpace, setKeyboardSpace] = useState(0);
    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', event => {
            console.log(event);
            const endY = event.endCoordinates.screenY;
            const screenHeight = Dimensions.get('window').height;

            setKeyboardSpace(screenHeight - endY - 200)
            onToggle(true);
        });

        const hideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardSpace(0);
            onToggle(false);
        });

        return () => {
            hideListener.remove();
            showListener.remove();
        }
    },[])

    return (
      <View style={[styles.container, {height: keyboardSpace}]} />
    )
};