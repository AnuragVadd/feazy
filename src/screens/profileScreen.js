import React, {Component} from 'react';
import {StyleSheet, Image, TouchableOpacity, Dimensions, ColorPropType, FlatList} from 'react-native';
import {Container, Text, Button, Footer, Row, Grid, View, Header, Left, Content, Separator, ListItem, Card} from 'native-base';
import Onboarding from 'react-native-onboarding-swiper';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
// import Icon from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-paper';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Snackbar from 'react-native-snackbar'

export default class ProfileScreen extends Component{
render(){
    return(
        <View>
            <Text>
                ProfileScreen
            </Text>
        </View>
    )
}
}
