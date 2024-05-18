import React, { useContext, useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Card, Text, Divider, Button, TextInput } from 'react-native-paper';
import RequestContext from '../context/requests/requestContext';
import { FormControl, HStack } from 'native-base';

const CarDetails = () => {
  const { selectCar, saveCar } = useContext(RequestContext)
  const { image, brand, condition, description, model, price, id } = selectCar;
  const navigation = useNavigation();
  const [ cantidad, guardarCantidad ] = useState(0);

  const decrementar = () =>{
    if(cantidad > 1){
        const nuevaCantidad = parseInt(cantidad) - 1
        guardarCantidad(nuevaCantidad)
    }
}

const incrementar = () =>{
    const nuevaCantidad = parseInt(cantidad) + 1
    guardarCantidad(nuevaCantidad)
}

const confirmarOrden =()=>{
  Alert.alert('¿Deseas agregar este carro y cantidad',
  'Este carro se agregara al carrito de compras',
  [{
      text: 'Confirmar',
      onPress: () => {
          //Almacenar el pedido al pedido principal
          const request ={
              ...selectCar,
              cantidad,
          }

          saveCar(request)

          //Navegar hacia resumen
          navigation.navigate('carShop')
      }
      
  },
  {
      text: 'Cancelar'
      
      }
  ]
)
}

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
            <Avatar.Text
              size={30}
              label={condition}
              style={styles.brandAvatar}
            />
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
          <FormControl>
            <Text>Cantidad: </Text>
            <HStack space={3}>
                        <Button 
                          
                            dark
                            style = {{height:80, justifyContent:'center'}}
                            onPress={()=> decrementar()}
                        >-</Button>
                        <TextInput
                            style = {{textAlign:'center', fontSize:20}}
                            keyboardType='numeric'
                            onChangeText={ cantidad => guardarCantidad(cantidad)}
                        > {cantidad}</TextInput> 
                        <Button 
                            props
                            dark
                            style = {{height:80, justifyContent:'center'}}
                            onPress={()=> incrementar()}
                        >+</Button>
                    </HStack>
                        <HStack>
                            <Card>
                                <Card.Actions>
                                    <Button 

                                      onPress={() => confirmarOrden()}
                                    >
                                       <Text>Ordenar</Text>
                                    </Button>
                                </Card.Actions>
                            </Card>
                        </HStack>
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
});

export default CarDetails;