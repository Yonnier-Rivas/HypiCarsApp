import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Headline, Subheading, Divider, Portal, Modal, Provider, Text } from 'react-native-paper';
import { validateName, validateLastName, validateIdNumber, validatePhoneNumber} from '../inputsValidations/validations';
import firebase from '../firebaseDB';

const RequestQuote = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleSubmit = () => {

    const sendDataToFirebase = async (name, lastName, idNumber, phoneNumber) => {
      try {
        const quoteRef = await firebase.db.collection('Quotes').add({
          name,
          lastName,
          idNumber,
          phoneNumber,
        });
        console.log('Datos enviados a Firebase con ID:', quoteRef.id);
    
        // Restablecer los campos de entrada
        setName('');
        setLastName('');
        setIdNumber('');
        setPhoneNumber('');
      } catch (error) {
        console.error('Error al enviar datos a Firebase:', error);
      }
    };

    const nameError = validateName(name);
    const lastNameError = validateLastName(lastName);
    const idNumberError = validateIdNumber(idNumber);
    const phoneNumberError = validatePhoneNumber(phoneNumber);

    const errors = [nameError, lastNameError, idNumberError, phoneNumberError].filter(Boolean);

    if (errors.length > 0) {
      Alert.alert('Error', errors.join('\n'));
    } else {
      Alert.alert(
        'Confirmar cotización',
        '¿Estás seguro de enviar la solicitud de cotización?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Enviar',
            onPress: () => {
              sendDataToFirebase(name, lastName, idNumber, phoneNumber);
              showModal();
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <Headline style={styles.title}>Cotizar Vehículo</Headline>
        <Text style={styles.subtitle}>¿Deseas cotizar este vehículo. Llena el siguiente formulario:</Text>
        <TextInput
          label="Nombre"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
        />
        <TextInput
          label="Apellidos"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
        />
        <TextInput
          label="Número de identificación"
          value={idNumber}
          onChangeText={setIdNumber}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
          keyboardType="numeric"
        />
        <TextInput
          label="Número de celular"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
          keyboardType="phone-pad"
        />

        <Button mode="contained" onPress={handleSubmit} style={styles.button} color="#3B63A8">
          Enviar
        </Button>
      </ScrollView>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <Subheading>¡Cotización enviada exitosamente!</Subheading>
          <Divider style={styles.divider} />
          <Button mode="contained" onPress={hideModal} style={styles.button}>
            Aceptar
          </Button>
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
    borderRadius: 20,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#3B63A8',
  },
  modal: {
    padding: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },
  divider: {
    marginVertical: 16,
  },
});

export default RequestQuote;
