import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet} from 'react-native';
import io from 'socket.io-client';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  chatMessages: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F0F0F0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  sendButton: {
    minWidth: 80,
  },
  closeButton: {
    marginBottom: 10,
  },
});

const ChatModal = ({ onClose, userName }: { onClose: () => void, userName: string }) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const socket = io('http://192.168.1.7:3000');

  useEffect(() => {
    // Lidar com mensagens recebidas do servidor
    socket.on('chat', (data: { user: string, message: string }) => {
      const { user, message } = data;
      setMessages((prevMessages) => [...prevMessages, `${user}: ${message}`]);
});

    // Limpeza da conexão ao desmontar o componente
    return () => {
      socket.disconnect();
    };
  }, []);  // Executado apenas uma vez ao montar o componente

  const handleSendMessage = () => {
    if (userName && inputMessage) {
      // Enviar a mensagem para o servidor
      const messageData = { user: userName, message: inputMessage };
      socket.emit('chat', messageData);
  
      // Limpar o campo de entrada
      setInputMessage('');
    }
  };

  return (

    
    <Modal animationType="slide"
    transparent={false}
    visible={true}
    onRequestClose={onClose}>

    <KeyboardAwareScrollView
    contentContainerStyle={styles.container}
    resetScrollToCoords={{ x: 0, y: 0 }}
    scrollEnabled={true}
  >
    <View style={styles.container}>
      <View style={styles.container}>
        {messages.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        value={inputMessage}
        placeholder='Digite sua mensagem'
        onChangeText={(text) => setInputMessage(text)}
        />
        <Button title='Enviar' onPress={handleSendMessage} />
        <Button title='Fechar' onPress={onClose} />
      </View>
  </View>
        </KeyboardAwareScrollView>
    </Modal>
  );
};

export default ChatModal;