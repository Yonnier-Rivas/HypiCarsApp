import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Card, Text, Divider, Button } from 'react-native-paper';

const CarDetails = ({ route }) => {
  const { car } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: car.image }} style={styles.cardCover} />
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge" style={styles.carName}>
              {car.brand} {car.model}
            </Text>
            <Text variant="bodyMedium" style={styles.price}>
              {car.price.toLocaleString()} $
            </Text>
            <Avatar.Text
              size={30}
              label={car.condition}
              style={styles.brandAvatar}
            />
            <Divider style={styles.divider} />
            <Text variant="bodyLarge" style={styles.description}>
              {car.description}
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                mode="contained"
                onPress={() => navigation.navigate('DriveTest')}
              >
                Probar
              </Button>
              <Button
                style={styles.button1}
                mode="contained"
                onPress={() => navigation.navigate('RequestQuote')}
              >
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
    backgroundColor: '#F5F5F5',
  },
  cardContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  card: {
    borderRadius: 16,
    elevation: 4,
    backgroundColor: '#F9FCFF',
  },
  cardCover: {
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardContent: {
    padding: 16,
  },
  carName: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333333',
    marginBottom: 8,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3B63A8',
    marginBottom: 16,
  },
  brandAvatar: {
    backgroundColor: '#E0E9EE',
    marginLeft: 4,
    width: 55,
    borderRadius: 16,

  },
  divider: {
    marginVertical: 16,
    backgroundColor: '#E0E0E0',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555555',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    margin: 5,
    marginHorizontal: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: '#3B63A8',
    elevation: 2,
  },
  button1: {
    margin: 5,
    marginHorizontal: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: '#5C6972',
    elevation: 2,
  },
});

export default CarDetails;