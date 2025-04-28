import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoriteScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import PancakeScreen from './src/screens/Pancake';
import BreakfastScreen from './src/screens/Breakfast';
import AddRecipeScreen from './src/screens/AddRecipeScreen'; // 🆕 import

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    setFavorites((prev) =>
      prev.some((r) => r.id === recipe.id)
        ? prev.filter((r) => r.id !== recipe.id)
        : [...prev, recipe]
    );
  };

  const isFavorite = (recipe) => favorites.some((r) => r.id === recipe.id);

  // 🆕 Fix: Move HomeScreen props wrapper OUTSIDE
  const HomeScreenWithProps = (props) => (
    <HomeScreen
      {...props}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
      isFavorite={isFavorite}
    />
  );

  const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreenWithProps} />
      <Stack.Screen name="Pancake" component={PancakeScreen} />
    </Stack.Navigator>
  );

  const FavoritesStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Favorites"
        children={(props) => (
          <FavoritesScreen
            {...props}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      />
    </Stack.Navigator>
  );

  const CategoryStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CategoryMain" component={CategoryScreen} />
      <Stack.Screen name="Breakfast" component={BreakfastScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'restaurant';
            else if (route.name === 'Categories') iconName = 'grid';
            else if (route.name === 'Favorites') iconName = 'heart';
            else if (route.name === 'Own Recipe') iconName = 'create';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Categories" component={CategoryStack} />
        <Tab.Screen name="Favorites" component={FavoritesStack} />
        <Tab.Screen name="Own Recipe" component={AddRecipeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
