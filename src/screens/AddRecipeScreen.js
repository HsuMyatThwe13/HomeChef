import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddRecipeScreen() {
  const [foodTitle, setFoodTitle] = useState('');
  const [recipe, setRecipe] = useState('');
  const [calories, setCalories] = useState('');
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // track which recipe is being edited

  const handleSaveRecipe = () => {
    if (foodTitle && recipe && calories) {
      const newRecipe = { foodTitle, recipe, calories };
      
      if (editingIndex !== null) {
        // Editing an existing recipe
        const updatedRecipes = [...savedRecipes];
        updatedRecipes[editingIndex] = newRecipe;
        setSavedRecipes(updatedRecipes);
        setEditingIndex(null);
      } else {
        // Adding a new recipe
        setSavedRecipes([...savedRecipes, newRecipe]);
      }

      // Clear input fields
      setFoodTitle('');
      setRecipe('');
      setCalories('');
    } else {
      alert('Please fill in all fields before saving.');
    }
  };

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = savedRecipes.filter((_, i) => i !== index);
    setSavedRecipes(updatedRecipes);
  };

  const handleEditRecipe = (index) => {
    const recipeToEdit = savedRecipes[index];
    setFoodTitle(recipeToEdit.foodTitle);
    setRecipe(recipeToEdit.recipe);
    setCalories(recipeToEdit.calories);
    setEditingIndex(index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <View style={styles.header}>
        <Text style={styles.title}>Create Your Own Recipe</Text>
      </View>

      {/* Input Box */}
      <View style={styles.inputBox}>
        {/* Food Title Input */}
        <Text style={styles.label}>Food Title</Text>
        <TextInput
          placeholder="Enter food title..."
          placeholderTextColor="#888"
          value={foodTitle}
          onChangeText={setFoodTitle}
          style={styles.input}
        />

        {/* Recipe Input */}
        <Text style={styles.label}>Recipe</Text>
        <TextInput
          placeholder="Write your recipe..."
          placeholderTextColor="#888"
          value={recipe}
          onChangeText={setRecipe}
          multiline
          numberOfLines={4}
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
        />

        {/* Calories Input */}
        <Text style={styles.label}>Estimated Calories</Text>
        <TextInput
          placeholder="Enter estimated calories..."
          placeholderTextColor="#888"
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
          style={styles.input}
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveRecipe}>
          <Text style={styles.saveButtonText}>{editingIndex !== null ? 'Update Recipe' : 'Save Recipe'}</Text>
        </TouchableOpacity>
      </View>

      {/* Display Saved Recipes */}
      {savedRecipes.length > 0 && (
        <View style={styles.savedBox}>
          <Text style={styles.sectionTitle}>📖 Own Recipes</Text>

          {savedRecipes.map((item, index) => (
            <View key={index} style={styles.recipeCard}>
              {/* Edit and Delete Icons */}
              <View style={styles.iconsRow}>
                <TouchableOpacity onPress={() => handleEditRecipe(index)} style={styles.iconButton}>
                  <Ionicons name="create-outline" size={22} color="#4CAF50" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDeleteRecipe(index)} style={styles.iconButton}>
                  <Ionicons name="trash-outline" size={22} color="red" />
                </TouchableOpacity>
              </View>

              {/* Recipe Details */}
              <Text style={styles.recipeTitle}>{item.foodTitle}</Text>
              <Text style={styles.recipeText}>📋 {item.recipe}</Text>
              <Text style={styles.recipeText}>🔥 {item.calories} calories</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF9DC',
    padding: 20,
    paddingBottom: 40,
    paddingTop: 70,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  inputBox: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 16,
    elevation: 3,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  savedBox: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  recipeCard: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    position: 'relative',
    marginBottom: 20,
  },
  iconsRow: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    marginTop: 10,
  },
  recipeText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
});
