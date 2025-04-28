import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const breakfastItems = [
  {
    id: '1',
    title: 'Waffles',
    description: 'Crispy and golden sweet treat',
    image: require('../../assets/img/waffles.jpg'),
  },
  {
    id: '2',
    title: 'Omelette',
    description: 'Fluffy egg perfection',
    image: require('../../assets/img/omelette.jpg'),
  },
  {
    id: '3',
    title: 'Avocado Toast',
    description: 'Healthy and delicious',
    image: require('../../assets/img/avogado.jpg'),
  },
  {
    id: '4',
    title: 'Pancakes',
    description: 'Soft and fluffy goodness',
    image: require('../../assets/img/pancake.jpg'),
  },
  {
    id: '5',
    title: 'Pudding',
    description: 'Silky sweet delight',
    image: require('../../assets/img/pudding.jpg'),
  },
  {
    id: '6',
    title: 'Croissant with Ham & Cheese',
    description: 'Buttery croissant with filling',
    image: require('../../assets/img/croissant.jpg'),
  },
  {
    id: '7',
    title: 'Tacos',
    description: 'Savory breakfast taco',
    image: require('../../assets/img/taco.jpg'),
  },
  {
    id: '8',
    title: 'Fried Rice',
    description: 'Morning fried rice boost',
    image: require('../../assets/img/rice.jpg'),
  },
  {
    id: '9',
    title: 'Cinnamon Rolls',
    description: 'Sweet and spiced rolls',
    image: require('../../assets/img/cinnamon.jpg'),
  },
  {
    id: '10',
    title: 'Porridge',
    description: 'Warm and hearty bowl',
    image: require('../../assets/img/porridge.jpg'),
  },
];

export default function BreakfastScreen({ navigation }) {
  const renderBreakfastCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerTitle}>Breakfast Menu</Text>

      {/* Breakfast List */}
      <FlatList
        data={breakfastItems}
        renderItem={renderBreakfastCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9DC',
    paddingTop: 90,
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    width: (screenWidth - 48) / 2, // 16+16 padding and 16 between
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 130, 
  },
  cardContent: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#555',
  },
});
