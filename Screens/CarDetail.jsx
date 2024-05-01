import React from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, Divider, Button } from 'react-native-paper';


const CarDetails = ({route}) => {
  const {car} = route.params;

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
          <Card.Cover source={{ uri: car.image}} style={styles.image} />
            <Text variant="titleLarge" style={styles.carName}>
              {car.brand}
            </Text>
            <Text variant="titleLarge" style={styles.carName}>
              {car.model}
            </Text>
            <Text variant="bodyMedium" style={styles.price}>
            	{car.price.toLocaleString()} $
            </Text>
            <Divider style={styles.divider} />
            <Text variant="bodyLarge">
              {car.description}
            </Text>
            <View style={styles.detailsContainer}>
            </View>
            <View style={styles.buttonContainer}>
              <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('DriveTest')}>
                Probar
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
    height: '100%'
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 30,
  },
  image: {
    marginBottom: 10,
    borderRadius: 20,
  },
  carName: {
    fontWeight: 'bold',
    marginBottom: 2,
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