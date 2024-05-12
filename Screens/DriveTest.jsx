import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Headline, Subheading, Divider, Portal, Modal, Provider, Text } from 'react-native-paper';
import { validateName, validateLastName, validateIdNumber, validatePhoneNumber, validateDate } from '../inputsValidations/validations';
import { DatePickerInput } from 'react-native-paper-dates';

const DriveTest = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(undefined);
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleSubmit = () => {
    const nameError = validateName(name);
    const lastNameError = validateLastName(lastName);
    const idNumberError = validateIdNumber(idNumber);
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const dateError = validateDate(appointmentDate);

    const errors = [nameError, lastNameError, idNumberError, phoneNumberError, dateError].filter(Boolean);

    if (errors.length > 0) {
      Alert.alert('Error', errors.join('\n'));
    } else {
      // Lógica para enviar el formulario
      console.log('Nombre:', name);
      console.log('Apellidos:', lastName);
      console.log('Número de identificación:', idNumber);
      console.log('Número de celular:', phoneNumber);
      console.log('Fecha de cita:', appointmentDate);

      // Mostrar el modal de confirmación
      showModal();
    }
  };

  //

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <Headline style={styles.title}>Solicitud de Prueba de Manejo</Headline>
        <Text style={styles.subtitle}>¿Deseas conducir este Vehículo? Llena el siguiente formulario:</Text>
        <TextInput
          label="Nombre"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
          keyboardType='ascii-capable'
        />
        <TextInput
          label="Apellidos"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
          keyboardType='ascii-capable'
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
        <DatePickerInput
          style={styles.input}  
          locale="en"
          label="Fecha de cita"
          value={appointmentDate}
          onChange={(d) => setAppointmentDate(d)}
          inputMode="start"
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
        />

        <Button mode="contained" onPress={handleSubmit} style={styles.button} color="#3B63A8">
          Enviar
        </Button>
      </ScrollView>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <Subheading>¡Solicitud enviada exitosamente!</Subheading>
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

export default DriveTest;