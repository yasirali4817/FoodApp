import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { MaterialIcons, Fontisto, MaterialCommunityIcons, Entypo, Ionicons } from 'react-native-vector-icons';
import Dessertdata from './Data/dessert';
export default function dessertscreen() {
  return (
    <View>
      <View style={{ backgroundColor: '#f5fffa', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <MaterialIcons name='icecream' size={30} color='black' />
        <Text style={{ fontSize: 20, textAlign: 'center', }}> Dessert Foodi </Text>
        <MaterialCommunityIcons name='cupcake' size={30} color='black' />
      </View>
      <View style={{ alignItems: 'center', backgroundColor: '#f0ffff', }}>
        <ScrollView style={{ marginBottom: 60, }} >
          {Dessertdata.map((item) =>
            <View style={{ margin: 10, borderTopRightRadius: 22, borderBottomLeftRadius: 22, width: 304, borderWidth: 2, borderColor: 'grey', backgroundColor: '#fdf5e6' }} onPress={() => Alert.alert('dfd')}>
              <Image style={{ height: 200, width: 300, borderTopRightRadius: 20 }} source={item.photos} />
              <View style={{ justifyContent: 'space-evenly', margin: 10 }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }} >{item.name}</Text>
                  <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => Alert.alert('')}>
                    <Entypo name='dots-three-vertical' size={20} color='black' />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }} >{item.price}</Text>
                  <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', flexDirection: 'row' }} onPress={() => Alert.alert('')}>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Add To Cart </Text>
                    <MaterialIcons name='add-shopping-cart' size={20} color='grey' />
                  </TouchableOpacity>
                </View>
                <View>

                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}
