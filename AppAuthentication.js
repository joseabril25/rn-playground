import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'

export default function AppAuthentication() {

    return (
        <View sytle={styles.content}>
            <Header title="Guess a Number" />
            <StartGameScreen  />

        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 80,
        flex: 1
    },
    
})