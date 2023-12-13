import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Styles from '../introducao/Style';

const CreateAccount = ({ navigation }: any) => {


  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = async () => {
    try {
      console.log("Botão de Cadastrar pressionado");
      const response = await fetch("http://172.20.10.6:3000/criar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: login,
          email: email,
          senha: password,
        }),
      });
  
      if (response.ok) {
        // Cadastro bem-sucedido, redirecione ou forneça feedback ao usuário
      } else {
        // Trate erros de cadastro falhado
        console.error("Erro ao cadastrar usuário");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }

    navigation.navigate("login");
    
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.logo}>
        <Text style={Styles.text}>Cadastro</Text>
      </View>

      <Text style={Styles.label}>Login</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(text) => setLogin(text)}
        value={login}
        placeholder="Digite seu login"
      />

      <Text style={Styles.label}>Email</Text>
      <TextInput
        style={Styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Digite seu email"
      />

      <Text style={Styles.label}>Senha</Text>
      <TextInput
        style={Styles.input}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Digite sua senha"
      />

      <TouchableOpacity onPress={handleCreateAccount} style={Styles.buttonCreateAccount}>
        <Text style={Styles.buttonTextCreateAccount}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccount;
