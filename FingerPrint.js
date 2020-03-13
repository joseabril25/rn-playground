import React, { Component } from 'react';
import {
  AlertIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  NativeModules,
  Alert,
  Platform
} from 'react-native';

import TouchID from 'react-native-touch-id'

export default class FingerPrint extends Component<{}> {
    constructor() {
      super()
  
      this.state = {
        biometryType: null
      };
    }
  
    componentDidMount() {
      TouchID.isSupported()
      .then(biometryType => {
        this.setState({ biometryType });
      }).catch(err => console.log('Not supported: ', err));
    }
  
    render() {
      return (
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.btn}
            onPress={this.clickHandler}
            underlayColor="#0380BE"
            activeOpacity={1}
          >
            <Text style={{
              color: '#fff',
              fontWeight: '600'
            }}>
              {`Authenticate with ${this.state.biometryType}`}
            </Text>
          </TouchableHighlight>
        </View>
      );
    }
  
    clickHandler() {
      TouchID.isSupported()
        .then(authenticate)
        .catch(error => {
          AlertIOS.alert('TouchID not supported');
        });
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    btn: {
      borderRadius: 3,
      marginTop: 200,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: '#0391D7'
    }
  });
  
  function authenticate() {
    return TouchID.authenticate()
      .then(success => {
        if(Platform.OS === 'ios'){
          console.log("authenticate -> success IOS", success)
          // AlertIOS.alert('Success!', 'Authentication is successful!');
          Alert.alert('Authenticated Successfully!');
        }else if (Platform.OS === 'android'){
          console.log("authenticate -> success Android", success)
          Alert.alert('Authenticated Successfully!');
        }
      })
      .catch(error => {
        console.log('error authenticating: ',error)
        if(Platform.OS === 'ios'){
          AlertIOS.alert('Authentication Error');
        }else if (Platform.OS === 'android'){
          Alert.alert('Authentication Error!');
        }
      });
  }