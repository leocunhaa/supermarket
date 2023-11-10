import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from './Style'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Login = ({navigation}: any) =>{

    return (
        <View style={Styles.container}>

          <View style={Styles.logo}>
            <Icon name="pets" size={100} color={"#2196F3"}/>
            <Text style={Styles.text}>SuperPETmarket</Text>
          </View>
    
          <Text style={Styles.label}>Login</Text>
          <TextInput style={Styles.input}/>
    
          <Text style={Styles.label}>Password</Text>
          <TextInput style={Styles.input}/>
    
          <View style={Styles.createAccountForgot}>
            <Text onPress={()=>{navigation.navigate("createAccount")}} style={Styles.link}>Create Account</Text>
            <Text onPress={()=>{navigation.navigate("forgotPassword")}} style={Styles.link}>Forgot Password</Text>
          </View>
    
          <TouchableOpacity onPress={()=>{navigation.navigate("home")}} style={Styles.button}>
            <Text style={Styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
          
        </View>
      );
}

export default Login