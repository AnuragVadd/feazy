import React, {Component} from 'react';
import {Image, TouchableOpacity, TextInput} from 'react-native';
import Snackbar from 'react-native-snackbar'
import {Container, Text, Content, View} from 'native-base';
import * as firebase from "firebase";
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';  
import CustomTheme from '../themes/customTheme';
import allColors from '../themes/allColors';
GoogleSignin.configure({  
 webClientId: '--------------.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)  
 });  
//  import {db} from '../c';
export default class AuthenticationScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            isFocusedEmail: false,  
             isFocusedPassword: false,
            password: '',
            showPassword: true
        }
    }  

    // componentDidMount() {
    //     let ref = firebase.database().ref('/');
    //     ref.on('value', querySnapShot => {
    //       let data = querySnapShot.val() ? querySnapShot.val() : {};
    
    //     //   let todoItems = {...data};
    //       console.log('STORED DATA = ' + JSON.stringify(data));
    //     //   this.setState({
    //     //     todos: todoItems,
    //     //   });
    //     });
    //   }

    returnBorder = (i) => {
    if(i === 1) {
        if(this.state.isFocusedEmail === true){
            return CustomTheme.authenticationScreenThemes().searchSectionSelected
        }else {
            return CustomTheme.authenticationScreenThemes().searchSection
        }
    }else if (i === 2){
        if(this.state.isFocusedPassword === true){
            return CustomTheme.authenticationScreenThemes().searchSectionSelected
        }else {
            return CustomTheme.authenticationScreenThemes().searchSection
        }
    }
       
    }



    _signInUsingGoogle = async () => {  
        try {  
          await GoogleSignin.hasPlayServices();  
          const userInfo = await GoogleSignin.signIn()  .then(res => {
            console.log('USER = ' + JSON.stringify(res));
            this.props.navigation.navigate('bottom_tab_navi', {userData: res.user})
     }).catch(error => {  
       console.log('ERRORDWQADA = '  + JSON.stringify(error.code)) 
     // switch(error.code) {
     //   case 'auth/email-already-in-use':
      Snackbar.show({
             text: JSON.stringify(error.message),
             duration: Snackbar.LENGTH_LONG,
           })
             // break;
 //    }
  });  
          console.log(userInfo);  
 
    
        } catch (error) {  
            Snackbar.show({
                text: JSON.stringify(error),
                duration: Snackbar.LENGTH_LONG,
              })
        }  
      }; 

    Login = (email, password) => {
        console.log(email + password)
        if(this.state.email.length && this.state.password.length > 0){
            try {
                firebase
                   .auth()
                   .signInWithEmailAndPassword(email, password)
                   .then(res => {
                       console.log('USER = ' + JSON.stringify(res.user));
                       this.props.navigation.navigate('bottom_tab_navi', {userData: res.user})
                }).catch(error => {  
                  console.log(error) 
                // switch(error.code) {
                //   case 'auth/email-already-in-use':
                 Snackbar.show({
                        text: JSON.stringify(error.message),
                        duration: Snackbar.LENGTH_LONG,
                      })
                        // break;
            //    }
             })
          } catch (error) {
                console.log(error.toString(error));
              }
        }else if(this.state.email === ''){
            Snackbar.show({
                text: JSON.stringify("Please enter email"),
                duration: Snackbar.LENGTH_LONG,
              })
        }else if(this.state.password === ''){
            Snackbar.show({
                text: JSON.stringify("Please enter password"),
                duration: Snackbar.LENGTH_LONG,
              })
        }
   
      };

    SignUp = (email, password) => {
        try{
            firebase.auth().createUserWithEmailAndPassword(email,password)
              .then(() => this.props.navigation.navigate('bottom_tab_navi', {userData: user}))
              .catch(error => {  
                  console.log(error) 
                // switch(error.code) {
                //   case 'auth/email-already-in-use':
                 Snackbar.show({
                        text: JSON.stringify(error.message),
                        duration: Snackbar.LENGTH_SHORT,
                      })
                        // break;
            //    }
             })
           }catch(err){
            return Snackbar.show({
                text: err,
                duration: Snackbar.LENGTH_SHORT,
              })
           }
    }
    // this.props.navigation.navigate('bottom_tab_navi', {userData: user})
    handleFocusEmail = () => this.setState({isFocusedEmail: true})
    handleFocusPassword = () => this.setState({isFocusedPassword: true})
    handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
    render(){
        return(
         <Container>
             <Content>
             <Image
              style={CustomTheme.authenticationScreenThemes().image}
              resizeMode="contain"
              source={require('../assets/images/dinnerbackground.jpg')}
            />

            <View style={CustomTheme.authenticationScreenThemes().titleView}>
                        <Text style={{color: allColors.white, fontSize: 36}}>
                            Feazy
                        </Text>
                        <Text style={{color: allColors.white, fontSize: 16}}>
                            fast and eazy
                        </Text>
            </View>



            <View style={CustomTheme.authenticationScreenThemes().mainView}>
       
                    <Text style={CustomTheme.authenticationScreenThemes().signIn}>
                        Sign In
                    </Text>


                    <View style={{ margin: 10}}>
                        <Text style={{marginTop: -20}}>
                            Email ID
                        </Text>
    
       
              <View style={this.returnBorder(1)}>
   
   <TextInput
        onFocus={this.handleFocusEmail}
       style={CustomTheme.authenticationScreenThemes().input}
       placeholder="Enter Email ID"
       onChangeText={(searchString) => {this.setState({email: searchString})}}
       underlineColorAndroid="transparent"
   />

</View>

                        <Text style={{ marginTop: 10}}>
                            Password
                        </Text>
                        
                    
                        <View style={this.returnBorder(2)}>
   
    <TextInput
      onFocus={this.handleFocusPassword}
        style={CustomTheme.authenticationScreenThemes().input}
        secureTextEntry={this.state.showPassword}
        placeholder="Enter Password"
        onChangeText={(searchString) => {this.setState({password: searchString})}}
        underlineColorAndroid="transparent"
    />
<TouchableOpacity onPress={() => this.setState({showPassword: !this.state.showPassword})}>
<Image
            style={CustomTheme.authenticationScreenThemes().passwordIcon}
              resizeMode="contain"
              source={require('../assets/images/passwordicon.png')}
            />
</TouchableOpacity>

</View>
                     <TouchableOpacity onPress={() => {
                         this.Login(this.state.email, this.state.password)
                         }}>


                     <View style={CustomTheme.authenticationScreenThemes().loginButton}>

                                 <Image
                                style={{ width: 70, height: 50}}
                                resizeMode="contain"
                                source={require('../assets/images/loginarrow.png')} />

                     </View>
                     </TouchableOpacity>

                        
                        <Text style={CustomTheme.authenticationScreenThemes().or}>
                            Or
                        </Text>

                        <View style={CustomTheme.authenticationScreenThemes().googleSignInButton}>
                            <TouchableOpacity style={CustomTheme.authenticationScreenThemes().googleSignIn}
                           
                           onPress={() => {this._signInUsingGoogle()}}
                           >
                                         <Image
              style={CustomTheme.authenticationScreenThemes().loginIcons}
              resizeMode="contain"
              source={require('../assets/images/google.png')}
            />
<Text style={{fontSize: 16, marginLeft: 10}}>Google</Text>
                             
                            </TouchableOpacity>

                            <TouchableOpacity style={CustomTheme.authenticationScreenThemes().facebookSignIn}>
                            <Image
                           
              style={CustomTheme.authenticationScreenThemes().loginIcons}
              resizeMode="contain"
              source={require('../assets/images/facebook.png')}
            />
<Text style={{color: 'white', fontSize: 16}}>Facebook</Text>
                         
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 10}}>
                            <Text style={{color: allColors.textfieldSelected}}>
                                Not a member yet?  
                            </Text>
                            <TouchableOpacity onPress={() => { this.SignUp(this.state.email, this.state.password)}}>
                            <Text style={CustomTheme.authenticationScreenThemes().signupText}> Sign Up</Text>
                            </TouchableOpacity>
                           
                        </View> 
                    </View>
            </View>

             </Content>
         </Container>
        )
    }
}

