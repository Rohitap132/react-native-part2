import React from 'react';
import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native';
import ItemSection from './ItemSection';
import Item from './Item';

const GadgetsDetail = (props) => {
  const handlePress = () => {
    Linking.openURL(props.model[0].url);
  };

  return (
    <Item>
      <ItemSection>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{props.brand}</Text>
          <Text style={styles.headerText}>{props.model[0].name}</Text>
        </View>
      </ItemSection>
      <ItemSection>
        <Image style={styles.imageStyle} source={{ uri: props.model[0].image }} />
      </ItemSection>
      <ItemSection>
        <Button title="URL" onPress={handlePress} />
      </ItemSection>
    </Item>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: "uppercase"
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: 0
  }
});

export default GadgetsDetail;
