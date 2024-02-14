import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homescreen';
import Categoriescreen from '../screens/categoriesscreen';
import Favourite from '../screens/favouritescreen';
import AddToCart from '../screens/addtocartscreen';
import fastscreen from '../screens/Fastscreen';
import VegChickenScreen from '../screens/vegchickenscreen';
import drinkscreen from '../screens/Drinkscreen';
import dessertscreen from '../screens/Dessertscreen';
import {
  Feather, MaterialCommunityIcons, MaterialIcons, Entypo, Fontisto
} from 'react-native-vector-icons';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function Navigations() {

  function MyDrawer() {
    return (
      <Drawer.Navigator initialRouteName='chat'
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: 'green',
          drawerIndicatorStyle: {
            backgroundColor: 'blue'
          },
          drawerLabelStyle: {
            fontWeight: 'bold'
          },
          drawerStyle: {
            backgroundColor: 'white'
          },
        }}>
        <Drawer.Screen name="Home" component={HomeScreen} options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='home-export-outline' size={24} color={color} />
          ),
          headerTitleAlign: 'center', drawerLabelStyle: styles.tabBarLabel
        }} />
        <Drawer.Screen name="FastF0oD" component={fastscreen} options={{
          drawerIcon: () => (<Text>FastF0oD</Text>
          ),
          title: '', drawerLabelStyle: styles.tabBarLabel
        }} />
        <Drawer.Screen name="Veg+Chick" component={VegChickenScreen} options={{
          drawerIcon: () => (<Text>Veg+Chick</Text>
          ),
          title: '', drawerLabelStyle: styles.tabBarLabel
        }} />
        <Drawer.Screen name="Dessert" component={dessertscreen} options={{
          drawerIcon: () => (<Text>Dessert</Text>
          ),
          title: '', drawerLabelStyle: styles.tabBarLabel
        }} />
        <Drawer.Screen name="Drinks" component={drinkscreen} options={{
          drawerIcon: () => (<Text>Drinks</Text>
          ),
          title: '', drawerLabelStyle: styles.tabBarLabel
        }} />
        <Drawer.Screen name="AddToCart" component={AddToCart} options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='cart-arrow-right' size={24} color={color} />
          ),
          title: '', drawerLabelStyle: styles.tabBarLabel
        }} />
        <Drawer.Screen name="Favorite" component={Favourite} options={{
          drawerIcon: ({ color }) => (
            <Fontisto
              name='heart-alt' size={24} color={color} />
          ),
          title: '',
          drawerLabelStyle: styles.tabBarLabel
        }} />
        <Drawer.Screen name="Categories" component={Categoriescreen} options={{
          drawerIcon: ({ color }) => (
            <MaterialIcons
              name='category' size={24} color={color} />
          ),
          title: '',
          drawerLabelStyle: styles.tabBarLabel
        }} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  tabBarLabel: {
    display: 'none',
  },
});