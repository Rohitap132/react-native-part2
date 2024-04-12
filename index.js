

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import { name as appName } from './app.json';
import GadgetsList from './src/components/GadgetsList.js';
import { GadgetsProvider } from './src/GadgetsContext.js';

const App = () => {
    return (
        <GadgetsProvider>
            <View>
                <Header title="Gadgets" />
                <GadgetsList></GadgetsList>
            </View>
        </GadgetsProvider>
    );
};

AppRegistry.registerComponent(appName, () => App);