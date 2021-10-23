import React from 'react';

import { View, Text, ViewBase } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export function Message(){
  return (
    <View style={styles.container}>
      <Text style={styles.footer}>
        Texto da mensagem
      </Text>
      <View>
        <UserPhoto 
          imageUri="https://github.com/josealves380.png"
          sizes="SMALL"
        />

        <Text style={styles.userName}>
          Nome do Usuario
        </Text>
      </View>

    </View>
  );
}