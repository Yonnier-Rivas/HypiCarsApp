import React, { useContext, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Divider, Avatar, Text } from 'react-native-paper';
import FirebaseContext from '../context/firebase/firebaseContext';

const ServiceHistory = () => {
  const { historyCatalog, getServiceRequest } = useContext(FirebaseContext);

  useEffect(() => {
    getServiceRequest();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {historyCatalog.map((request) => (
        <Card key={request.id} style={styles.card} elevation={4}>
          <Card.Title
            title={request.serviceType}
            titleStyle={styles.serviceTitle}
            left={(props) => <Avatar.Icon {...props} icon="car" style={styles.cardIcon} />}
            rightStyle={styles.cardRight}
          />
          <Card.Content style={styles.cardContent}>
            <View style={styles.infoContainer}>
              <Paragraph style={styles.infoText}>
                <Text style={styles.label}>Modelo de vehículo: </Text>
                {request.vehicleModel}
              </Paragraph>
              <Paragraph style={styles.infoText}>
                <Text style={styles.label}>Nombre: </Text>
                {request.name}
              </Paragraph>
              <Paragraph style={styles.infoText}>
                <Text style={styles.label}>Fecha de cita: </Text>
                {request.appointmentDate
                  ? request.appointmentDate.toDate().toLocaleDateString()
                  : ''}
              </Paragraph>
              <Paragraph style={styles.infoText}>
                <Text style={styles.label}>Hora: </Text>
                {request.appointmentTime}
              </Paragraph>
            </View>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  cardIcon: {
    backgroundColor: '#3B63A8',
  },
  cardRight: {
    marginRight: 16,
  },
  cardContent: {
    paddingHorizontal: 16,
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3B63A8',
  },
  infoContainer: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333333',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ServiceHistory;