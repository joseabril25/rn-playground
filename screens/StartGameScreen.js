import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard } from 'react-native';
import Cards from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Cards style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.inputField}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" onPress={() => {}} color={Colors.secondary} />
                            </View>
                        <View style={styles.button}><Button title="Confirm" color={Colors.primary} /></View>
                    </View>
                </Cards>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer : {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputField: {
        width: 50,
        textAlign: 'center'
    }
})

export default StartGameScreen;