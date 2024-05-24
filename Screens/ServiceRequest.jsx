import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Headline, Subheading, Divider, Portal, Modal, Provider, Text, Menu } from 'react-native-paper';
import { validateName, validateDate, validateVehicleModel, validatePhone, validateEmail, ValidateSelectedService, validateTime } from '../inputsValidations/validations';
import { DatePickerInput } from 'react-native-paper-dates';
import firebase from '../firebaseDB';

const ServiceRequest = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(undefined);
  const [appointmentTime, setAppointmentTime] = useState('');
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleTimeChange = (text) => {
    const error = validateTime(text);
    if (error) {
      setErrorMessage(error);
    } else {
      setErrorMessage('');
      setAppointmentTime(text);
    }
  };

  const handleSubmit = () => {
    const sendDataToFirebase = async (name, phone, email, vehicleModel, serviceType, appointmentDate, appointmentTime) => {
      try {
        const serviceRequestRef = await firebase.db.collection('ServiceRequests').add({
          name,
          phone,
          email,
          vehicleModel,
          serviceType,
          appointmentDate,
          appointmentTime,
        });
        console.log('Datos enviados a Firebase con ID:', serviceRequestRef.id);

        // Restablecer los campos de entrada
        setName('');
        setPhone('');
        setEmail('');
        setVehicleModel('');
        setServiceType('');
        setAppointmentDate(undefined);
        setAppointmentTime('');
      } catch (error) {
        console.error('Error al enviar datos a Firebase:', error);
      }
    };

    const nameError = validateName(name);
    const dateError = validateDate(appointmentDate);
    const phoneError = validatePhone(phone);
    const vehicleModelError = validateVehicleModel(vehicleModel);
    const emailError = validateEmail(email);
    const serviceTypeError = ValidateSelectedService(selectedService);
    const timeError = validateTime(appointmentTime);

    const errors = [nameError, dateError, phoneError, vehicleModelError, emailError, serviceTypeError, timeError].filter(Boolean);

    if (errors.length > 0) {
      Alert.alert('Error', errors.join('\n'));
    } else {
      Alert.alert(
        'Confirmar solicitud de servicio',
        '¿Estás seguro de enviar la solicitud de servicio?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Enviar',
            onPress: () => {
              sendDataToFirebase(name, phone, email, vehicleModel, selectedService, appointmentDate, appointmentTime);
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
        <Headline style={styles.title}>Solicitar Servicio</Headline>
        <Text style={styles.subtitle}>¿Deseas solicitar un servicio? Llena el siguiente formulario:</Text>
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
          label="Teléfono"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
          keyboardType="numeric"
        />
        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
          keyboardType="email-address"
        />
        <TextInput
          label="Modelo de vehículo"
          value={vehicleModel}
          onChangeText={setVehicleModel}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
        />
        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <TextInput
              label="Tipo de servicio"
              value={selectedService}
              onFocus={() => setMenuVisible(true)}
              onChangeText={setServiceType}
              style={styles.input}
              mode="outlined"
              outlineColor="#3B63A8"
              activeOutlineColor="#3B63A8"
            />
          }
          contentStyle={styles.menuContainer}
        >
          <Menu.Item
            onPress={() => {
              setSelectedService('Mantenimiento');
              setMenuVisible(false);
            }}
            title="Mantenimiento"
            titleStyle={styles.menuItemText}
            style={styles.menuItem}
          />
          <Menu.Item
            onPress={() => {
              setSelectedService('Reparación');
              setMenuVisible(false);
            }}
            title="Reparación"
            titleStyle={styles.menuItemText}
            style={styles.menuItem}
          />
          <Menu.Item
            onPress={() => {
              setSelectedService('Revisión técnica');
              setMenuVisible(false);
            }}
            title="Revisión técnica"
            titleStyle={styles.menuItemText}
            style={styles.menuItem}
          />
        </Menu>
        <DatePickerInput
          style={styles.input}
          locale="es"
          label="Fecha de cita"
          value={appointmentDate}
          onChange={(d) => setAppointmentDate(d)}
          inputMode="start"
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
        />
        <TextInput
          label="Hora"
          value={appointmentTime}
          onChangeText={handleTimeChange}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
          maxLength={5}
        />
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Enviar
        </Button>
      </ScrollView>

      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <Subheading>¡Solicitud de servicio enviada exitosamente!</Subheading>
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
    textAlign: 'center',
    marginBottom: 16,
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
  menuContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default ServiceRequest;
