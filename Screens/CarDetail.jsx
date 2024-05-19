import React, { useContext, useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Card, Text, Divider, Button, TextInput } from 'react-native-paper';
import RequestContext from '../context/requests/requestContext';
import { Center, FormControl, HStack } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CarDetails = () => {
  const { selectCar, saveCar } = useContext(RequestContext);
  const { image, brand, condition, description, model, price, id } = selectCar;
  const navigation = useNavigation();
  const [quantity, saveQuatity] = useState(1);

  const decrementar = () => {
    if (quantity > 1) {
      saveQuatity(quantity - 1);
    }
  };

  const incrementar = () => {
    saveQuatity(quantity + 1);
  };

  const confirmarOrden = () => {
    Alert.alert(
      '¿Deseas agregar este carro y quantity?',
      'Este carro se agregará al carrito de compras',
      [
        {
          text: 'Confirmar',
          onPress: () => {
            const request = {
              ...selectCar,
              quantity,
            };

            saveCar(request);
            navigation.navigate('CarShop');
          },
        },
        {
          text: 'Cancelar',
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: image }} style={styles.cardCover} />
          <Card.Content style={styles.cardContent}>
            <Text variant="titleLarge" style={styles.carName}>
              {brand} {model}
            </Text>
            <Text variant="bodyMedium" style={styles.price}>
              {price.toLocaleString()} $
            </Text>
            <Avatar.Text size={30} label={condition} style={styles.brandAvatar} />
            <Divider style={styles.divider} />
            <Text variant="bodyLarge" style={styles.description}>
              {description}
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
          <FormControl style={styles.formControl}>
            <Text style={styles.quantityLabel}>Cantidad a ordenar:</Text>
            <HStack space={3} style={styles.quantityContainer}>
              <Button
                dark
                style={styles.quantityButton}
                onPress={() => decrementar()}
              >➖</Button>
              <TextInput
                style={styles.quantityInput}
                keyboardType="numeric"
                value={String(quantity)}
                onChangeText={quantity => saveQuatity(parseInt(quantity))}
              />
              <Button
                dark
                style={styles.quantityButton}
                onPress={incrementar}
              >➕</Button>
            </HStack>
            <Button
              mode="contained"
              style={styles.orderButton}
              onPress={confirmarOrden}
            >
              Ordenar
            </Button>
          </FormControl>
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
    textAlign: 'justify',
    margin: 5,
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
  formControl: {
    marginTop: 16,
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#f0f1f5',
    elevation: 4,
  },
  quantityLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quantityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButton: {
    backgroundColor: 'none',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 8,
  },
  quantityInput: {
    fontSize: 20,
    width: 50,
    borderWidth: 1,
    borderColor: '#3B63A8',
    marginHorizontal: 8,
    backgroundColor: '#dce8fc',
    borderRadius: 8,
  },
  orderButton: {
    marginTop: 20,
    backgroundColor: '#3d66ad',
    borderRadius: 24,
    paddingVertical: 10,
  },
});

export default CarDetails;
