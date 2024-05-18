import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Text, Button } from 'react-native-paper';
import RequestContext from '../context/requests/requestContext';
import { Box } from 'native-base';

const carShop = () => {
    const { request, showCarShop, deleteVehicleShop, total } = useContext(RequestContext);
    const [totalRequest, setTotalRequest] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        calcularTotal();
    }, [request]);

    const calcularTotal = () => {
        let nuevoTotal = request.reduce((total, vehicle) => {
            const vehicleTotal = (vehicle.price || 0) * (vehicle.cantidad || 0);
            return total + vehicleTotal;
        }, 0);
        setTotalRequest(nuevoTotal);
        showCarShop(nuevoTotal);
    };
    
    const deleteVehicle = id => {
        Alert.alert(
            '¿Deseas eliminar el articulo?',
            'Se va a eliminar un articulo',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        //Eliminar del state el articulo
                        deleteVehicleShop(id);
                    }
                },
                {
                    text: 'Cancelar'
                }
            ]
        );
    };

    return (
        <View>
            <Box>
                {request.map((selectCar, i) => {
                    const { image, brand, condition, description, model, price, id, cantidad } = selectCar;
                    return (
                        <View key={id}>
                            <Avatar.Image size={70} source={{ uri: image }} />
                            <Text>Vehiculo: {brand} {model}</Text>
                            <Text>Cantidad:  {cantidad} </Text>
                            <Text>Precio Unitario: {(price).toLocaleString('es-ES')}</Text>
                            <Button onPress={() => deleteVehicle(id)}>
                                <Text>Eliminar</Text>
                            </Button>
                        </View>
                    );
                })}
                <Text>El total del pedido es: {totalRequest.toLocaleString('es-ES')}</Text>
            </Box>
        </View>
    );
};

const styles = StyleSheet.create({
    // estilos
});

export default carShop;
