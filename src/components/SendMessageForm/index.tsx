import React, {useState} from 'react';

import { Alert, TextInput, View } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessagesSubimit(){
    const messageFormatted = message.trim();
   

    

    if (messageFormatted.length > 0) {
      setSendingMessage(true);
      await api.post('/messages', {message: messageFormatted});
      setMessage('');
      keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('Messagem eviada com sucesso!');
    }else {
      Alert.alert('Escreva a mensagem para enviar.');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={styles.input}
        editable={!sendingMessage}
      />

      <Button 
        title="ENVIAR MESSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessagesSubimit}
      />

    </View>
  );
}