import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const initialRecommendations = [
  {
    id: 1,
    title: 'Pancakes',
    shortDescription: 'Fluffy breakfast treat',
    image: require('../../assets/img/pancake.jpg'),
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Salad',
    shortDescription: 'Fresh and healthy',
    image: require('../../assets/img/salad.jpg'),
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Beef Steak',
    shortDescription: 'Juicy grilled steak',
    image: require('../../assets/img/beefstake.jpg'),
    isFavorite: false,
  },
  {
    id: 4,
    title: 'Pizza',
    shortDescription: 'Cheesy goodness',
    image: require('../../assets/img/pizza.jpg'),
    isFavorite: false,
  },
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState(initialRecommendations);

  const toggleFavorite = (id) => {
    const updated = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    );
    setRecipes(updated);
  };

  const renderRecipeCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        if (item.title === 'Pancakes') {
          navigation.navigate('Pancake');
        } else {
          navigation.navigate('RecipeDetail', { recipe: item });
        }
      }}
    >
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.shortDescription}</Text>
        <TouchableOpacity
          style={styles.heartIcon}
          onPress={() => toggleFavorite(item.id)}
        >
          <Ionicons
            name={item.isFavorite ? 'heart' : 'heart-outline'}
            size={22}
            color={item.isFavorite ? 'red' : '#999'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Top Logo and App Name */}
      <View style={styles.header}>
        <Text style={styles.chefEmoji}>👨‍🍳</Text>
        <Text style={styles.appName}>HomeChef</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        placeholder="Search recipes..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
      />

      {/* Recommendations */}
      <Text style={styles.sectionTitle}>⭐ Recommendations</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRecipeCard}
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
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  chefEmoji: {
    fontSize: 28,
    marginRight: 10,
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBar: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 25,
    fontSize: 16,
    color: '#000',
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    color: '#000',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
    marginBottom: 20,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardContent: {
    padding: 12,
    position: 'relative',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#333',
  },
  heartIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
});
