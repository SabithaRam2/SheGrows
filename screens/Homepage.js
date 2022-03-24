import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,Text, View ,Button,TextInput,TouchableHighlight,TouchableOpacity,
    AsyncStorage} 
from 'react-native';
import { useNavigate } from "react-router-dom";


const styles = StyleSheet.create({
    container: {
            backgroundColor: '#E5E5E5',
           alignItems: 'center',
           justifyContent: 'center'
         },
         bottom_container: {
            backgroundColor: '#FFD580',
            marginTop: 10,
           paddingTop:5,
           paddingLeft:5,
           paddingRight:140,
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
    button1: {
      width: 300,
      marginTop: 120,
      color: "red",
      paddingTop:10,
      paddingLeft:6,
     
    },
    button2: {
        width: 300,
        color: "#565DFF",
        paddingTop:10,
        paddingLeft:6,
       
      },
    bottomCenter: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    footer: {
    position: 'center',
    height: 4,
    left: 8, 
    marginBottom: 100
},
text: {
    fontfamily: 'verdana',
    color: '#9c27b0',
    fontWeight: 'bold',
    fontSize: 20,
    left: 25, 
    paddingTop:2,
    paddingLeft:90,
    paddingRight:150,
  }
  });
  

export default function Homepage() {
    const history = useNavigate();

  const profile = () => {
    history("/Profile")
}
const portfolio = () => {
    history("/Portfolio")
}
const Money = () => {
    history("/Money")
}
const faq = () => {
    history("/FAQ")
}
const stories = () => {
    history("/Story")
}
const blogs = () => {
    history("/Blogs")
}

    return (
 <View style={styles.container}>
  

<Image
          style={{ width: 80, height: 80 , position: 'absolute', right: 500 ,  top: 30}}
          source={require('./assets/bot.png')}    />   
  <Image
         style={{ width: 80, height: 80, position: 'absolute', right: 700 ,  top: 30 }}
          source={require('./assets/Ellipse 1.png')}
        />
       
       <View style={styles.button1}>
       <Button
                title="Profile"
                color="#FF8C00"
                onPress={() => {profile();}}/>    
          </View>
          <View style={styles.button2}>
        <Button
                title="Grow Money"
                color="#808000"
                onPress={() => {Money();}}/>
                </View>
          <View style={styles.button2}>
        <Button
                title="InvestmentPortfolio"
                color="#FF1493"
                onPress={() => {portfolio();}}/>
        </View>

<View style={styles.text}>
<Text style = {styles.text}>Team SheGrows Bulletin</Text>
</View>
   
            
<View style={styles.bottom_container}>
    <TouchableOpacity onPress={() => {  
          stories();
        }}>
            <Text style = {{ color: "blue" ,  fontSize: 17}}>
               Success Stories
            </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => {  
          faq();
        }}>
            <Text style = {{ color: "blue" ,  fontSize: 17}}>
               FAQs
            </Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => {  
          blogs();
        }}>
            <Text style = {{ color: "blue" ,  fontSize: 17 }}>
               Blogs From Pioneers
            </Text>
         </TouchableOpacity>
         </View>

     </View> 
   

 )
}
