import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View ,Button,TextInput,TouchableHighlight,TouchableOpacity} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import LoginScreen from "react-native-login-screen";

const styles = StyleSheet.create({
  container: {
          backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center'
       },
  stretch: {
    width: 400,
    height: 250,
    resizeMode: 'stretch',
  },

  shrink: {
    width: 250,
    height: 250,
    
  },
  onedown: {
    paddingTop: 5
    
  },
  button: {
    width: 200,
    marginTop: 30,
    backgroundColor: "red",
    height:50,
    paddingTop:10,
    paddingLeft:55,
        borderRadius: 27,
   
  },
});

export default function Signup() {
  const history = useNavigate();
  const coursesPage = () => {
    history("/Login")
}
    return (
      <View style={styles.container}>


<Image
        style={styles.shrink}
        source={require('./assets/goldlady.JPG')}                                                                                                                                                          
      />
      {/* <Text style={{ fontSize: 50, fontFamily: 'cursive' , color:'#f2b438'}} ><h1>She Grows</h1></Text> */}
      {/* <Text style={{ fontSize: 25, fontFamily: 'cursive' , color:'#f2b438'}} ><h1>She Grows</h1></Text> */}
      
     
      {/* <LoginScreen
  logoImageSource={require("./assets/images1.jpg")}
  onLoginPress={() => {  
    coursesPage();
  }}

  onHaveAccountPress={() => {}}
  onEmailChange={(Mobile: string) => {}}
  // onPasswordChange={(OTP: string) => {}}
/> */}

<Image
        style={styles.stretch}
        source={require('./assets/femaleimg.jpeg')}
      />
 {/* <div style={styles1.onedown}> */}
 {/* <Text style={styles.text}> {'\n'}</Text> */}
 {/* <View style={styles1.button}
        title= "Go To Details"
        onPress={() => {  
          coursesPage();
        }}
        title="Sign up"
         />
    */}

<TouchableOpacity
        style={styles.button}
        onPress={() => {  
          coursesPage();
        }}
      >
        <Text style={{ fontSize: 21,color:'white', fontFamily: 'monospace',justifyContent:'center', alignContent:'center'}}>Sign up</Text>
      </TouchableOpacity>
{/* <TouchableHighlight 
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:8,
                    borderBottomRightRadius:1,
                    backgroundColor : "orange",
                    marginLeft :50,
                    marginRight:50,
                    marginTop :20
                }}>


<Button
  onPress={() => {  
    coursesPage();
  }}
  title="Sign up"
  color="red"
/></TouchableHighlight> */}
{/* </div> */}
 <Text style={styles.text}> {'\n'}</Text>
<Text style={{ fontSize: 16,color:'grey', fontFamily: 'monospace'}} >Already having an account ?</Text>
{/* <TextInput editable={false} selectTextOnFocus={false} >Already having an account ?</TextInput> */}
      <StatusBar style="auto" />
 
    </View>
   
    //       <OtpInputs
    // handleChange={(code) => console.log(code)}
    // numberOfInputs={4}
    
 // />
 
    )
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });
