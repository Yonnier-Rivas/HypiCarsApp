import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text, Searchbar, Title } from 'react-native-paper';
import FirebaseContext from '../context/firebase/firebaseContext';
import RequestContext from '../context/requests/requestContext';

const CarsCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { carsCatalog, getVehicles } = useContext(FirebaseContext); // Utiliza el contexto de Firebase para obtener los datos
  const { getCar } = useContext(RequestContext);
  const navigation = useNavigation();

  useEffect(() => {
    getVehicles();
  }, []);

  const filteredCars = carsCatalog.filter((car) =>
    car.brand.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||
    car.model.toLowerCase().includes(searchQuery && searchQuery.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const mostrarHeading = (category, i) => {
    if (i > 0) {
      const marcaAnterior = filteredCars[i - 1].category;
      if (marcaAnterior !== category) {
        return <Title>{category}</Title>;
      }
    }
    return null;
  };

  return (
    <ScrollView>
      <Searchbar
        placeholder="Buscar vehículo"
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      {filteredCars.map((car, index) => (
        <React.Fragment key={car.id}>
          {mostrarHeading(car.category, index)}
          <Card key={car.id} mode="outlined" style={styles.card}>
            <Card.Content>
              <Text variant="titleLarge">{car.brand}</Text>
              <Text variant="bodyMedium">Modelo: {car.model}</Text>
              <Text variant="bodyMedium">Precio: {car.price.toLocaleString()} $</Text>
            </Card.Content>
            <Card.Cover source={{ uri: car.image }} style={styles.cardImage} />
            <Card.Actions>
              <Button
                mode="elevated"
                buttonColor="#3B63A8"
                textColor="white"
                onPress={() => {
                  getCar(car);
                  navigation.navigate('CarDetail', { car });
                }}
              >
                Más información
              </Button>
            </Card.Actions>
          </Card>
        </React.Fragment>
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
