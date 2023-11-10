import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import Styles from '../introducao/Style'
import Icon from 'react-native-vector-icons/AntDesign'

const CreateAccount = ({navigation}: any) =>{
    return(
        <View style={Styles.container}>

        <View style={Styles.logo}>
            <Text style={Styles.text}>Cadastro</Text>
        </View>

        <Text style={Styles.label}>Login</Text>
        <TextInput style={Styles.input}/>

        <Text style={Styles.label}>Email</Text>
        <TextInput style={Styles.input}/>

        <Text style={Styles.label}>Password</Text>
        <TextInput style={Styles.input}/>
        <Text style={Styles.label}>Digite novamente a senha</Text>
        <TextInput style={Styles.input}/>

        <TouchableOpacity onPress={()=>{navigation.navigate("login")}} style={Styles.buttonCreateAccount}>
            <Text style={Styles.buttonTextCreateAccount}>Cadastrar</Text>
        </TouchableOpacity>

        </View> 
   )
}

export default CreateAccount