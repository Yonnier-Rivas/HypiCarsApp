import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, Divider, Button } from 'react-native-paper';

const CarDetails = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <Image source={require('../images/MercedesAMGCG.jpg')} style={styles.image} />
            <Text variant="titleLarge" style={styles.carName}>
              Mercedez AMG Clase G-63
            </Text>
            <Text variant="bodyMedium" style={styles.price}>
              $25,000
            </Text>
            <Divider style={styles.divider} />
            <Text variant="bodyLarge">
              La Mercedes-AMG G 63 es una imponente y lujosa SUV de alto rendimiento. Se caracteriza por su diseño robusto de estilo
              militar combinado con un potente motor V8 biturbo de 577 caballos de fuerza y una transmisión automática AMG de 9 velocidades.
              A pesar de su gran tamaño y peso, alcanza una aceleración de 0 a 100 km/h en apenas 4.5 segundos gracias a su configuración deportiva AMG.
            </Text>
            <View style={styles.detailsContainer}>
              <Text variant="bodyMedium">Año: 2024</Text>
              <Text variant="bodyMedium">Kilometraje: 35,000 km</Text>
              <Text variant="bodyMedium">Transmisión: Automática</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('DriveTest')}>
                Provar
              </Button>
              <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('RequestQuote')}>
                Cotizar
              </Button>
    
            </View>
          </Card.Content>
        </Card>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 30,
  },
  image: {
    marginBottom: 10,
    width: '100%',
    height: 300,
    borderRadius: 20,
  },
  carName: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  price: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  divider: {
    marginVertical: 8,
  },
  detailsContainer: {
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 35,
  },
  button: {
    marginVertical: 8,
    width: 100,
    borderRadius: 100,
    backgroundColor: '#3B63A8',
    shadowColor: '#000',
  },
});

export default CarDetails;