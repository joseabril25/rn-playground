/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import AppTest from './Apptest';
import AppGuess from './AppGuess';
import AppAuthentication from './AppAuthentication';
import FingerPrint from './FingerPrint';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FingerPrint);

