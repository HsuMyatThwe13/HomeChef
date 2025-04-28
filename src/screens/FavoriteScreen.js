import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function FavoritesScreen({ navigation }) {
  // Initial recipe data with favorites set to Pancakes and Salad
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Pancakes', shortDescription: 'Fluffy breakfast treat', image: require('../assets/pancake.jpg'), isFavorite: true },
    { id: 2, title: 'Salad', shortDescription: 'Fresh and healthy', image: require('../assets/salad.jpg'), isFavorite: true },
    { id: 3, title: 'Pizza', shortDescription: 'Cheesy goodness', image: require('../assets/pizza.jpg'), isFavorite: false },
    { id: 4, title: 'Beef Steak', shortDescription: 'Juicy grilled steak', image: require('../assets/beefstake.jpg'), isFavorite: false },
  ]);

  // Filter favorites
  const favorites = recipes.filter(recipe => recipe.isFavorite);

  const renderRecipeCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
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

  const toggleFavorite = (id) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    );
    setRecipes(updatedRecipes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>❤️ Favorite Recipes</Text>
      {favorites.length === 0 ? (
        <Text style={styles.empty}>No favorite recipes yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderRecipeCard}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9DC', // Matching HomeScreen color
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
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
  empty: {
    marginTop: 50,
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
  },
});
