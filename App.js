import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as firebase from "firebase";
import { Container, Item, Form, Input, Button, Label } from "native-base";
import AppContainer from './src/navigators';

import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { Provider } from 'react-redux';

import { StyleProvider } from 'native-base';

export default function App(props) {
  return (
    <StyleProvider style={getTheme(material)}>
        <AppContainer />
    </StyleProvider>
  );
}
var config = {
  apiKey: "AIzaSyDFdsjQWG8IFLXmviNqSiVZMw_ADFl5tpo",
  authDomain: "react-native-firebase-3bde9.firebaseapp.com",
  databaseURL: "https://react-native-firebase-3bde9.firebaseio.com",
  projectId: "react-native-firebase-3bde9",
  storageBucket: "react-native-firebase-3bde9.appspot.com",
   messagingSenderId: "269398778466"
};
firebase.initializeApp(config);