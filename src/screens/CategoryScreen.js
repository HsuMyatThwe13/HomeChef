import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const categories = [
  {
    name: 'Breakfast',
    image: require('../assets/breakfast.jpg'),
    description: 'Kickstart your day with energy and focus.',
  },
  {
    name: 'Lunch',
    image: require('../assets/lunch.jpg'),
    description: 'Refuel your body during the day’s busiest hours.',
  },
  {
    name: 'Dinner',
    image: require('../assets/dinner.jpg'),
    description: 'End the day with a satisfying and balanced meal.',
  },
  {
    name: 'Snack',
    image: require('../assets/snack.jpg'),
    description: 'Small bites to keep you going between meals.',
  },
];

export default function CategoryScreen({ navigation }) {
  const handleCategory = (category) => {
    if (category === 'Breakfast') {
      navigation.navigate('Breakfast');
    } else {
      // Later you can add for Lunch, Dinner, Snack
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.categoryEmoji}>🍽️</Text>
        <Text style={styles.headerText}>Categories</Text>
      </View>

      {/* Category Cards */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleCategory(item.name)}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9DC',
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryEmoji: {
    fontSize: 28,
    marginRight: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  image: {
    width: screenWidth - 32,
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  textContainer: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  cardDesc: {
    fontSize: 14,
    color: '#333',
  },
});
