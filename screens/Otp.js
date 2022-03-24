import React from 'react';
import  { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import CountDown from 'react-native-countdown-component';
import CodeInput from 'react-native-confirmation-code-input';
// import Icon from "react-native-vector-icons/FontAwesome5";
import { Input, Button } from "react-native-elements";
//import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";

export default function Otp() {
  //  const auth = useSelector(state => state.auth);
//const dispatch = useDispatch();
const inputRef = useRef('codeInputRef2');
const [counter, SetCounter] = useState(15); // Set here your own timer configurable
const [random, SetRandom] = useState(Math.random());
const [disabled, setDisabled] = useState(true)
const history = useNavigate();
const handleResend = () => {
  SetRandom(Math.random())
  // Handle Resend otp action here
}
const handleVerify = (otp) => {
// Handle the verification logic here
// dispatch verify action
history("/home")
};
    return (
      
        <View style={styles.container}>
      <Text style={{ fontSize: 17,color:'Grey', fontFamily: 'monospace',justifyContent:'left', alignContent:'left'}}>Enter OTP</Text>
      <View style={styles.otp}>
        <View style={{ height: 100, width: 200, marginLeft: 10 }}>
          <CodeInput
            ref={inputRef}
            // secureTextEntry
            borderType={'underline'}
            className={'border-b'}
            activeColor='rgba(0, 0, 0, 1)'
            inactiveColor='rgba(0, 0, 0, 255)'
            space={10}
            keyboardType="numeric"
            autoFocus={true}
            codeLength={6}
            size={20}
            inputPosition='left'
            onFulfill={(code) => handleVerify(code)}
            onChange={(text) => {
                console.log({text})
                   // ref.current.focus();
                
              }}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <CountDown
            key={random}
            until={counter}
            size={15}
            onFinish={() => setDisabled(() => false)}
            separatorStyle={{ color: 'black' }}
            digitStyle={{ backgroundColor: '#FFF' }}
            digitTxtStyle={{ color: 'black' }}
            timeToShow={['M', 'S']}
            showSeparator
            timeLabels={{ m: '', s: '' }}
          />
          <Button disabled={disabled} style={{ marginLeft: 10}} title="RESEND" onPress={handleResend}></Button>
          {/* <TouchableOpacity
        style={styles.button}
        title="RESEND" 
        disabled={disabled}
        onPress={handleResend}
      >
        <Text style={{ fontSize: 21,color:'white', fontFamily: 'monospace',justifyContent:'center', alignContent:'center'}}  disabled={disabled}>RESEND</Text>
      </TouchableOpacity> */}
        
        </View>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
            backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        },
    otp: {
     alignItems: 'flex-start',
      justifyContent: 'center'
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
  