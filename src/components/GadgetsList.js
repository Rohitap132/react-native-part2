import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import GadgetsDetail from './GadgetsDetail';
import { GadgetsContext } from '../GadgetsContext';

const GadgetsList = () => {
    const { cars, loading } = useContext(GadgetsContext);

    if (loading) {
        return (
            <View>
                <Text>Loading..</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View>
                {cars.map((carBrand, index) => (
                    <View key={index}>
                        <GadgetsDetail {...carBrand} />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default GadgetsList;
