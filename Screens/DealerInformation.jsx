import React from 'react';
import { ScrollView, StyleSheet, Image, Animated, Linking } from 'react-native';
import { Card, Title, Paragraph, Divider, Avatar, IconButton, Text } from 'react-native-paper';


const DealerInformation = () => {
  const animatedValue = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleCall = () => {
    Linking.openURL('tel:6045656695');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:atencion.hypicars@gmail.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../images/bannerNosotros.png')} style={styles.banner} />
      <Animated.View style={[styles.card, { opacity: animatedValue }]}>
        <Card style={{ backgroundColor: '#fff', borderRadius: 8, elevation: 4 }}>
          <Card.Title
            title="HypiCars"
            subtitle="Concesionario de vehículos última generación"
            right={(props) => (
              <IconButton
                {...props}
                icon="phone"
                onPress={handleCall}
                style={styles.phoneButton}
              />
            )}
          />
          <Card.Content>
            <Title style={styles.title}>¿Quiénes somos?</Title>
            <Paragraph style={styles.paragraph}>
              HypiCars es más que un concesionario, es un estilo de vida. Ven a visitarnos y descubre el futuro de la conducción.
            </Paragraph>
            <Paragraph style={styles.paragraph}>
              Un nuevo concesionario que ofrece una experiencia de compra de autos única y revolucionaria. Nos especializamos en vehículos última generación, con diseños futuristas y tecnología de punta.
            </Paragraph>
            <Divider style={styles.divider} />
            <Title style={styles.title}>¿Dónde estamos ubicados?</Title>
            <Paragraph style={styles.paragraph}>
              Dirección: Carrera 82 # 32-115, Medellín.
            </Paragraph>
            <Paragraph style={styles.paragraph}>
              Teléfono:{' '}
              <Text style={styles.link} onPress={handleCall}>
                604 5656695
              </Text>
            </Paragraph>
            <Paragraph style={styles.paragraph}>
              Correo Electrónico:{' '}
              <Text style={styles.link} onPress={handleEmail}>
                atencion.hypicars@gmail.com
              </Text>
            </Paragraph>
          </Card.Content>
        </Card>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  card: {
    marginTop: -40,
    marginHorizontal: 16,
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
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    marginBottom: 8,
  },
  phoneButton: {
    backgroundColor: '#3B63A8',
  },
  link: {
    color: '#3B63A8',
    textDecorationLine: 'underline',
  },
});

export default DealerInformation;