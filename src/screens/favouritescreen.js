import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { MaterialIcons, Fontisto, MaterialCommunityIcons } from 'react-native-vector-icons';
import FavoriteDATA from './Data/favorite';
export default function Favourite() {
  return (
    <View>
      <View style={{ backgroundColor: '#f5fffa', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 20, textAlign: 'center', }}>Favorite</Text>
        <Fontisto name='heartbeat-alt' size={30} color='black' />
      </View>
      <ScrollView style={{ marginBottom: 40 }} >
        {FavoriteDATA.map((item) =>
          <View style={{ margin: 10, borderRadius: 20, flexDirection: 'row', borderWidth: 2, borderColor: 'grey', backgroundColor: '#fdf5e6' }} onPress={() => Alert.alert('dfd')}>
            <Image style={{ height: 250, width: 250, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} source={item.photos} />
            <View style={{ justifyContent: 'space-evenly', marginLeft: 10 }} >
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }} >{item.name}</Text>
              <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => Alert.alert('')}>
                <MaterialIcons name='favorite' size={30} color='red' />
              </TouchableOpacity>
              <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }} >{item.price}</Text>
              <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => Alert.alert('')}>
                <MaterialCommunityIcons name='cart-heart' size={30} color='black' />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
