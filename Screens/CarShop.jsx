import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Text, Button, Card, Title, Paragraph, Divider } from 'react-native-paper';
import RequestContext from '../context/requests/requestContext';
import { Box } from 'native-base';

const CarShop = () => {
    const { request, showCarShop, deleteVehicleShop, total } = useContext(RequestContext);
    const [totalRequest, setTotalRequest] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        calcularTotal();
    }, [request]);

    const calcularTotal = () => {
        let newQuantity = request.reduce((total, vehicle) => {
            const vehicleTotal = (vehicle.price || 0) * (vehicle.quantity || 0);
            return total + vehicleTotal;
        }, 0);
        setTotalRequest(newQuantity);
        showCarShop(newQuantity);
    };

    const deleteVehicle = id => {
        Alert.alert(
            '¿Deseas eliminar el artículo?',
            'Se va a eliminar un artículo',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        deleteVehicleShop(id);
                    }
                },
                {
                    text: 'Cancelar'
                }
            ]
        );
    };

    const renderVehicle = ({ item }) => {
        const { image, brand, condition, model, price, id, quantity } = item;
        return (
            <ScrollView>
                <Card style={styles.cardContainer}>
                    <View style={styles.cardHeader}>
                        <Avatar.Image size={70} source={{ uri: image }} style={styles.avatar} />
                        <View style={styles.cardContent}>
                            <Title style={styles.title}>{brand} {model}</Title>
                            <Paragraph style={styles.condition}>{condition}</Paragraph>
                        </View>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={styles.cardFooter}>
                        <View style={styles.quantityContainer}>
                            <Text style={styles.label}>Cantidad:</Text>
                            <Text style={styles.value}>{quantity}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.label}>Precio Unitario:</Text>
                            <Text style={styles.value}>{price.toLocaleString('es-ES')}</Text>
                        </View>
                        <Button mode="contained" style={styles.button} onPress={() => deleteVehicle(id)}>
                            Eliminar
                        </Button>
                    </View>
                </Card>
            </ScrollView>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={request}
                renderItem={renderVehicle}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>El total del pedido es: {totalRequest.toLocaleString('es-ES')}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    flatListContainer: {
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    cardContainer: {
        marginBottom: 16,
        elevation: 4,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    avatar: {
        marginRight: 16,
        backgroundColor: '#3B63A8',
    },
    cardContent: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    condition: {
        fontSize: 16,
        color: '#6B6B6B',
    },
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    quantityContainer: {
        alignItems: 'center',
    },
    priceContainer: {
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: '#6B6B6B',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        marginLeft: 16,
        backgroundColor: '#3B63A8',
    },
    totalContainer: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        elevation: 4,
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 24,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CarShop;
