import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = ({ navigation }: any) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch("http://192.168.1.7:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: login,
          senha: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        // Autenticação bem-sucedida, redirecione para a página Home
        console.log("Login bem-sucedido");
        console.log("Token:", data.token);
        navigation.navigate("home");
      } else {
        // Trate erros de login falhado
        console.error("Erro ao fazer login");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }

  };

  return (
    <View style={Styles.container}>
      <View style={Styles.logo}>
        <Icon name="pets" size={100} color="#4b0081" />
        <Text style={Styles.text}>AdoteJá</Text>
      </View>

      <Text style={Styles.label}>Email</Text>
      <TextInput style={Styles.input} onChangeText={(text) => setLogin(text)} value={login} />

      <Text style={Styles.label}>Senha</Text>
      <TextInput
        style={Styles.input}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <View style={Styles.createAccountForgot}>
        <Text onPress={() => navigation.navigate('createAccount')} style={Styles.link}>
          Create Account
        </Text>
        <Text onPress={() => navigation.navigate('forgotPassword')} style={Styles.link}>
          Forgot Password
        </Text>
      </View>

      <TouchableOpacity onPress={handleLogin} style={Styles.button}>
        <Text style={Styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
