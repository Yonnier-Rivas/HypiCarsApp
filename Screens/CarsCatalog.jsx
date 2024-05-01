import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Text, Searchbar, Title } from 'react-native-paper';
import FirebaseContext from '../context/firebase/firebaseContext';
import RequestContext from '../context/requests/requestContext';

const CarsCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { carsCatalog, getVehicles } = useContext(FirebaseContext);
  const { getCar } = useContext(RequestContext);
  const navigation = useNavigation();

  useEffect(() => {
    getVehicles();
  }, []);

  // Obtener categorías únicas de los autos disponibles
  const categories = ['Todos', ...Array.from(new Set(carsCatalog.map(car => car.category)))]; // Si no hay categoría seleccionada o coincide con la categoría seleccionada

  const filteredCars = carsCatalog.filter((car) =>
    (!selectedCategory || selectedCategory === 'Todos' || car.category === selectedCategory) &&
    (car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.condition.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Buscar vehículo"
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.searchBar}
        iconColor="#EEF6FE"
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <Button
              key={index}
              mode="contained"
              style={selectedCategory === category ? styles.selectedCategoryButton : styles.categoryButton}
              onPress={() => setSelectedCategory(category)}
              labelStyle={styles.categoryLabel}
            >
              {category}
            </Button>
          ))}
        </ScrollView>
        {filteredCars.map((car, index) => (
          <Card key={car.id} mode="elevated" style={styles.card}>
            <Card.Cover source={{ uri: car.image }} style={styles.cardImage} />
            <Card.Content style={styles.cardContent}>
              <View style={styles.cardTitleContainer}>
                <Text variant="titleLarge" style={styles.cardTitle}>
                  {car.brand} {car.model}
                </Text>
                <Avatar.Text
                  size={30}
                  label={car.condition}
                  style={styles.brandAvatar}
                />
              </View>
              <Text variant="bodyMedium" style={styles.cardPrice}>
                {car.price.toLocaleString()} $
              </Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                mode="contained"
                buttonColor="#3B63A8"
                textColor="white"
                style={styles.cardButton}
                onPress={() => {
                  getCar(car);
                  navigation.navigate('CarDetail', { car });
                }}
              >
                Más información
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  categoryButton: {
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#EDEDED',
  },
  selectedCategoryButton: {
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#E0E9EE',
  },
  categoryLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
  },
  searchBar: {
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2,
    marginBottom: 5,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    elevation: 4,
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
  },
  brandAvatar: {
    backgroundColor: '#E0E9EE',
    marginLeft: 4,
    width: 55,
    borderRadius: 16,
  },
  cardPrice: {
    fontWeight: 'bold',
    color: '#7D94BE',
  },
  cardActions: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardButton: {
    borderRadius: 24,
    paddingHorizontal: 24,
  },
});

export default CarsCatalog;