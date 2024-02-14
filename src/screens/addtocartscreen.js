import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { MaterialIcons, FontAwesome6, MaterialCommunityIcons, Entypo, Ionicons } from 'react-native-vector-icons';
import Cartdata from './Data/cart';
export default function AddToCart() {
  const [count, setcount] = useState(1);
  return (
    <View style={{ flex: 1 }} >
      <View style={{ backgroundColor: '#f5fffa', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <MaterialCommunityIcons name='cart-arrow-down' size={20} color='black' />
        <Text style={{ fontSize: 20, textAlign: 'center', }}> Cart </Text>
      </View>
      <View style={{ alignItems: 'center', backgroundColor: '#f0ffff', flex: 1 }}>
        <ScrollView style={{}} >
          {Cartdata.map((item) =>
            <View style={{ margin: 10, width: 304, height: 160, borderWidth: 2, borderColor: 'grey', backgroundColor: '#fdf5e6', }} onPress={() => Alert.alert('dfd')}>
              <View>
                <View style={{ flexDirection: 'row', }}>
                  <Image style={{ height: 100, width: 100, borderBottomRightRadius: 10 }} source={item.photos} />
                  <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', marginLeft: 30 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', }} >{item.name}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', }} >{item.price}</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 20, justifyContent: 'space-between', backgroundColor: '#fff', borderRadius: 10, }}>
                  <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#a52a2a', width: 35, justifyContent: 'space-around', height: 30, borderRadius: 10, alignItems: 'center', flexDirection: 'row' }} onPress={() => setcount(count - 1)}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', }}>{count}</Text>
                  <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#a52a2a', width: 35, justifyContent: 'space-around', height: 30, borderRadius: 10, alignItems: 'center', flexDirection: 'row' }} onPress={() => setcount(count + 1)}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <View style={{ backgroundColor: '#f0ffff', height: 150, width: 'auto', borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2, borderTopRightRadius: 20, borderTopLeftRadius: 20, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Total Price</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$24.5</Text>
        </View>
        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: '#a52a2a', width: 200, height: 60, justifyContent: 'space-around', borderRadius: 30, alignItems: 'center', flexDirection: 'row', }} onPress={() => Alert.alert('Done')}>
          <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

