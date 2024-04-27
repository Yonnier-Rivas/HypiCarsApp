import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text, Searchbar } from 'react-native-paper';

const CarsCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const cars = [
    {
      id: 1,
      name: 'BMW Z4 M40i 2024',
      price: '240.000.000$',
      image: require('../images/bmwz4.png'),
    },
    {
      id: 2,
      name: 'Mercedes-AMG Clase G',
      price: '1.399.900.000$',
      image: require('../images/MercedesAMGCG.jpg'),
    },
    {
      id: 3,
      name: 'BMW Z4 M40i 2024',
      price: '240.000.000$',
      image: require('../images/bmwz4.png'),
    },
  ];

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const navigation = useNavigation();
  
  return (
    <ScrollView>
      <Searchbar
        placeholder="Buscar vehículo"
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      {filteredCars.map((car) => (
        <Card key={car.id} mode="outlined" style={styles.card}>
          <Card.Content>
            <Text variant="titleLarge">{car.name}</Text>
            <Text variant="bodyMedium">Precio: {car.price}</Text>
          </Card.Content>
          <Card.Cover source={car.image} style={styles.cardImage} />
          <Card.Actions>
            <Button  mode="elevated" buttonColor="#3B63A8" textColor="white" onPress={() => navigation.navigate('CarDetail')}>
                Más información
            </Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    margin: 10,
    backgroundColor: '#D7E3F0',
    
  },
  card: {
    margin: 10,
  },
  cardImage: {
    margin: 10,
  },
});

export default CarsCatalog;