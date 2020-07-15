import {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import allColors from '../themes/allColors'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default class CustomTheme extends Component{

    static bottomNavigationThemes = () => {
        return StyleSheet.create({
            image: { 
                width: 30, 
                height: 30 
            },

            selected: { 
                fontSize: 12, 
                marginBottom: 5, 
                color: allColors.green, 
                textAlign: 'center' 
        },

        notSelected : { 
            fontSize: 12,
             marginBottom: 5, 
             color: allColors.textfieldSelected,
              textAlign: 'center' 
    }
        })
    }

    static authenticationScreenThemes = () => {
        return StyleSheet.create({
            image: { 
                width: SCREEN_WIDTH, 
                height: SCREEN_HEIGHT/3, 
                marginTop: -3 
            },

            titleView : { 
                position: 'absolute',
                 top: 45,
                 left: SCREEN_WIDTH/2.8,
                 width: 150,
                 height: 60,
                 },

            mainView : { 
                backgroundColor: allColors.white,
                 width: SCREEN_WIDTH,
                 height: SCREEN_HEIGHT, 
                 borderRadius: 10, 
                 marginTop: -20, 
                 justifyContent: 'flex-start'
        },

        signIn : { 
            fontSize: 30, 
            fontWeight: 'bold', 
            margin: 20, 
            alignSelf: 'center' 
    },

    searchSection: {
        // flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: allColors.textfieldNotSelected,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10
    },

    searchSectionSelected : {
        // flex: 1,
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: allColors.textfieldSelected,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10
    },

    input: {
        flex: 1,
        marginLeft: 14,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        color: allColors.black,
    },

    passwordIcon : {
         width: 30,
        height: 30,
        marginRight: 14,
        backgroundColor: 'white' 
    },

    loginButton : {          
        width: '40%',
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 20,
        height: 50,
        alignItems: 'center',
        backgroundColor: allColors.green,
        justifyContent: 'center'
    },

    or : {
         fontSize: 16, 
         color: allColors.grey, 
         alignSelf: 'center', 
         margin: 10
},

googleSignIn : {
    height: 50, 
    width: '48%', 
backgroundColor: 'white',
 borderRadius: 5,
 borderWidth: 1,
  borderColor: allColors.grey,
alignItems: 'center', 
flexDirection: 'row'
},

facebookSignIn : {
    flexDirection: 'row' ,
height: 50, 
width: '48%', 
backgroundColor: allColors.facebookBlue, 
borderRadius: 5,
 borderWidth: 1,
 borderColor: allColors.grey,
  alignItems: 'center'
},

signupText : {
    color: allColors.green, 
    textDecorationColor: allColors.green, 
    textDecorationLine: 'underline'
},

googleSignInButton : {
    flexDirection: 'row',
     width: SCREEN_WIDTH - 20, 
     justifyContent: 'space-between'
},

loginIcons : {
     width: 30, 
     height: 30, 
     marginLeft: '15%' 
}

        })
    }


    static appScreenThemes = () => {
        return StyleSheet.create({
            locationView : {
                height: 50,
                 width: 50, 
                 backgroundColor: allColors.backgroundGrey , 
                 borderRadius: 5, 
                 alignItems: 'center', 
                 justifyContent: 'center'
        },

        locationImage : { 
            width: 30,
             height: 30, 
             backgroundColor:allColors.backgroundGrey
             },

             textFieldView : {
                 height: 50, 
                 width: '80%', 
                 backgroundColor: allColors.backgroundGrey, 
                 borderRadius: 5,
            },

            mcdonalds : {
                marginLeft: 14, 
                fontSize: 20, 
                marginTop: 10, 
                marginBottom: 10
            },

            titleView : {
                flexDirection: 'row', 
                margin: 14, 
                justifyContent: 'space-between', 
                alignItems: 'center'
        },

        title : {
            fontSize: 20, 
            fontWeight: 'bold', 
    },

    filterIcon : { 
        width: 30, 
        height: 30, 
        backgroundColor:allColors.backgroundGrey, 
        alignSelf: 'center' 
},

viewAll : {
    flexDirection: 'row', 
    backgroundColor: allColors.backgroundGrey,
     width: 90, 
     height: 30, 
     borderRadius: 5, 
     justifyContent: 'center', 
     alignItems: 'center'
},

searchImage : { 
    width: 50, 
    height: 50, 
    backgroundColor: allColors.backgroundGrey,
},

filterText : {
    fontSize: 18, 
    color: allColors.textGrey,
     alignSelf: 'center', 
     marginLeft: 10
},

firstFlatlistImage : {
    backgroundColor:allColors.backgroundGrey, 
    width: 100, 
    height: undefined, 
    borderRadius: 10, 
    flex: 1
},

firstFlatlistText : {
    fontSize: 16, 
    alignSelf: 'center', 
    fontWeight: 'bold'
},

viewAllText : {
    fontSize: 16,
     color: allColors.textGrey
},

secondflatListFirstView : {
    borderRadius: 10, 
    borderColor: allColors.flatListBackground , 
    borderWidth: 1, 
    margin: 14
},

secondflatListImage : {
    backgroundColor:allColors.backgroundGrey, 
    width: 100, 
    height: undefined, 
    borderRadius: 10,
     flex: 1
},

priceBefore : {
    color: allColors.price, 
    textDecorationLine: 'line-through', 
    fontSize: 20
},


price : {
    fontSize: 18, 
    fontWeight: 'bold'
},

addButton : {
    backgroundColor: allColors.green, 
    width: 50, 
    height: 26, 
    borderRadius: 5
},

add: {
    color: allColors.white, 
    alignSelf: 'center'
},

thirdFlatlistImage : {
    backgroundColor:allColors.backgroundGrey, 
    width: 220, 
    height: undefined,
     borderRadius: 10,
      flex: 1
},

thirdFlatlistFirstView : {
    borderRadius: 10, 
    borderColor: allColors.flatListBackground, 
    borderWidth: 1, 
    margin: 14
}

        })
    }

}