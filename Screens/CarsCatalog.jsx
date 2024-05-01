import React, { useState, useEffect, useContext, Fragment } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text, Searchbar } from 'react-native-paper';
import FirebaseContext from '../context/firebase/firebaseContext';
import RequestContext from '../context/requests/requestContext';

const CarsCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { carsCatalog } = useContext(FirebaseContext); // Utiliza el contexto de Firebase para obtener los datos

  const filteredCars = carsCatalog.filter((car) =>
  car.model.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())
);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    // Aquí puedes realizar cualquier acción adicional al cargar la lista de vehículos desde Firebase
  }, []);

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
            <Text variant="titleLarge">{car.brand}</Text>
            <Text variant="bodyMedium">Precio: {car.price}</Text>
          </Card.Content>
          <Card.Cover source={car.image} style={styles.cardImage} />
          <Card.Actions>
            <Button mode="elevated" buttonColor="#3B63A8" textColor="white" onPress={() => navigation.navigate('CarDetail')}>
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
