import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Alert } from 'react-native';

const StringAndNumericValidation = ({ value, onChangeText, ...rest }) => {
  const [isValid, setIsValid] = useState(true);

  const handleTextChange = (inputText) => {
    let regex;
    let validationMessage;
    if (!isNaN(inputText)) {
      // Validar que solo se ingresen números
      regex = /^[0-9]+$/;
      validationMessage = 'Ingrese solo números.';
    } else {
      // Validar que solo se ingresen caracteres de texto y espacios
      regex = /^[A-Za-z\s]+$/;
      validationMessage = 'Ingrese solo letras y espacios.';
    }

    if (regex.test(inputText) || inputText === '') {
      setIsValid(true);
      onChangeText(inputText);
    } else {
      setIsValid(false);
      Alert.alert('Error', validationMessage, [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelar'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK') },
      ]);
    }
  };

  return (
    <TextInput
      value={value}
      mode="outlined"
      outlineColor="#3B63A8"
      activeOutlineColor="#3B63A8"
      onChangeText={handleTextChange}
      error={!isValid}
      {...rest}
    />
  );
};

export default StringAndNumericValidation;
