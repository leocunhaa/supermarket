import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import io from 'socket.io-client';

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
    <View>
    <Text>Chat:</Text>
    <View>
      {messages.map((msg, index) => (
        <Text key={index}>{msg}</Text>
      ))}
    </View>
    <TextInput
      value={inputMessage}
      placeholder='Digite sua mensagem'
      onChangeText={(text) => setInputMessage(text)}
    />
    <Button title='Enviar' onPress={handleSendMessage} />
    <Button title='Fechar' onPress={onClose} />
  </View>
  );
};

export default ChatModal;
