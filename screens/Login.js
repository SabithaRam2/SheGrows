import React ,{useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import LoginScreen from "react-native-login-screen";
import Otp from './Otp';

  
   

export default function Login() {
  const history = useNavigate();
  const[flag, setFlag] = useState('N');
  const getOtp = () => {
    //history("/Otp")
    setFlag('Y');
}
    return (
      <View style={styles.container}>
     
      <LoginScreen
  logoImageSource={require("./assets/goldlady.JPG")}
  onLoginPress={() => {  
    getOtp();
  }}

  onHaveAccountPress={() => {}}
  onEmailChange={(Mobile: string) => {}}
  // onPasswordChange={(OTP: string) => {}}
/>
{(flag=="Y")?
<Otp></Otp>:""}
{/* 
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
 
    </View>
   
    //       <OtpInputs
    // handleChange={(code) => console.log(code)}
    // numberOfInputs={4}
    
 // />
 
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
