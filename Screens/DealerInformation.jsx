import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Divider, Avatar, IconButton } from 'react-native-paper';

const DealerInformation = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../images/bannerNosotros.png')} style={styles.banner} />
      <Card style={styles.card}>
        <Card.Title
          title="HypiCars"
          subtitle="Concesionario de vehículos última generación"
          left={(props) => <Avatar.Icon {...props} icon="car" style={styles.avatar} />}
          right={(props) => <IconButton {...props} icon="phone" onPress={() => console.log('Llamando...')} />}
        />
        <Card.Content>
          <Title>¿Quiénes somos?</Title>
          <Paragraph>
            HypiCars es más que un concesionario, es un estilo de vida. Ven a visitarnos y descubre el futuro de la conducción.
          </Paragraph>
          <Paragraph>
            Un nuevo concesionario que ofrece una experiencia de compra de autos única y revolucionaria. Nos especializamos en vehículos última generación, con diseños futuristas y tecnología de punta.
          </Paragraph>
          <Divider style={styles.divider} />
          <Title>¿Dónde estamos ubicados?</Title>
          <Paragraph style={styles.paragraph}>Dirección: Carrera 82 # 32-115, Medellín.</Paragraph>
          <Paragraph style={styles.paragraph}>Teléfono: 604 5656695</Paragraph>
          <Paragraph style={styles.paragraph}>Correo Electrónico: atencion.hypicars@gmail.com</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  card: {
    elevation: 4,
  },
  avatar: {
    backgroundColor: '#3B63A8',
  },
  divider: {
    marginVertical: 16,
  },
  paragraph: {
    marginBottom: 8,
  },
  banner: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 20,
  },

});

export default DealerInformation;