import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PancakeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      {/* Content with Scroll */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Top Title */}
        <Text style={styles.topTitle}>🍳 Recipes For You</Text>

        {/* Pancake Image */}
        <Image
          source={require('../assets/pancake.jpg')}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Pancake Title */}
        <Text style={styles.title}>Pancakes</Text>

        {/* Description */}
        <Text style={styles.description}>
          Fluffy, buttery pancakes perfect for a delicious breakfast!{'\n\n'}
          <Text style={styles.bold}>Ingredients:</Text> Flour, Milk, Eggs, Baking Powder, Sugar, Butter.{'\n\n'}
           <Text style={styles.bold}>How to make:</Text>{'\n'}
          1. Mix all dry ingredients.{'\n'}
          2. Add milk and eggs, then stir until smooth.{'\n'}
          3. Heat a non-stick pan over medium heat.{'\n'}
          4. Pour batter and cook until golden brown on both sides. 
        </Text>

        {/* Estimated Calories */}
        <Text style={styles.calorieTitle}>Estimated Calories</Text>
        <Text style={styles.calorieInfo}>320 Calories per serving</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9DC',
    paddingTop: 90,
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  topTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#000',
    lineHeight: 26,
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  calorieTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginTop: 20,
    marginBottom: 8,
  },
  calorieInfo: {
    fontSize: 16,
    color: '#FF6B6B',
  },
});
