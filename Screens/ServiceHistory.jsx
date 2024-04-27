import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';

const ServiceHistory = () => {
  // Datos de ejemplo para el historial de servicios
  const serviceHistory = [
    {
      id: 1,
      service: 'Cambio de aceite y filtros',
      date: '15/03/2023',
      cost: '$120',
      description: 'Servicio de mantenimiento regular',
    },
    {
      id: 2,
      service: 'Reemplazo de pastillas de freno',
      date: '20/01/2023',
      cost: '$180',
      description: 'Reemplazo de pastillas de freno delanteras y traseras',
    },
    {
      id: 3,
      service: 'Alineación y balanceo de ruedas',
      date: '05/11/2022',
      cost: '$80',
      description: 'Ajuste y balanceo de las ruedas para un mejor rendimiento',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {serviceHistory.map((service) => (
        <Card key={service.id} style={styles.card}>
          <Card.Content>
            <Title>{service.service}</Title>
            <Paragraph>Fecha: {service.date}</Paragraph>
            <Paragraph>Costo: {service.cost}</Paragraph>
            <Divider style={styles.divider} />
            <Paragraph>{service.description}</Paragraph>
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
  },
  card: {
    marginBottom: 16,
  },
  divider: {
    marginVertical: 8,
  },
});

export default ServiceHistory;