import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Headline, Subheading, Divider, Portal, Modal, Provider, Text } from 'react-native-paper';

const ServiceRequest = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('')
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const handleSubmit = () => {
    // Lógica para enviar el formulario
    console.log('Nombre:', name);
    console.log('Teléfono:', phone);
    console.log('Correo electrónico:', email);
    console.log('Modelo de vehículo:', vehicleModel);
    console.log('Tipo de servicio:', serviceType);
    console.log('Fecha de cita:', appointmentDate);
    console.log('Hora:', appointmentTime);
    // Mostrar el modal de confirmación
    showModal();
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <Headline style={styles.title}>Solicitar Servicio</Headline>
        <Text style={styles.subtitle}>¿Deseas slicitar un servicio? Llena el siguiente formulario:</Text>
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
          keyboardType="phone-pad"
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
        <TextInput
          label="Tipo de servicio"
          value={serviceType}
          onChangeText={setServiceType}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
        />
        <TextInput
          label="Fecha de cita"
          value={appointmentDate}
          onChangeText={setAppointmentDate}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
        />
        <TextInput
          label="Hora"
          value={appointmentDate}
          onChangeText={setAppointmentTime}
          style={styles.input}
          mode="outlined"
          outlineColor="#3B63A8"
          activeOutlineColor="#3B63A8"
        />
        <Button mode="contained" onPress={handleSubmit} style={styles.button} >
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
    flexGrow: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: 'bold',
    fontSize: 20,
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

export default ServiceRequest;
