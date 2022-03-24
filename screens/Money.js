import React from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, TouchableHighlight, TouchableOpacity }
  from 'react-native';
import { useNavigate } from "react-router-dom";


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
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
});
export default function Money() {
  const history = useNavigate();
  const profile = () => {
    history("/Profile")
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        profile();
      }}>
        <Image
          style={styles.stretch}
          source={require('./assets/New_Bie.png')} />
      </TouchableOpacity>
      <br />
      <TouchableOpacity onPress={() => {
        profile();
      }}>
        <Image
          style={styles.stretch}
          source={require('./assets/Exp.png')} />
      </TouchableOpacity>

    </View>
  )
}
