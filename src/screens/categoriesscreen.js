import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Categoriescreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#fff8dc', }}>
            <View>
                <Text style={{ fontSize: 20, textAlign: 'center', backgroundColor: '#f5fffa' }}>Choose your favourite Categories</Text>
            </View>
            <ScrollView>
                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }} onPress={() => navigation.navigate("FastFoodi")}>
                    <Image
                        style={{ height: 150, width: 150, borderRadius: 900 }}
                        source={require('../../assets/fast.jpg')}
                    />
                    <Text style={{ fontSize: 20, color: 'grey', fontWeight: 'bold', }} >Fast Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }} onPress={() => navigation.navigate("VegchickenFoodi")}>
                    <Image
                        style={{ height: 150, width: 150, borderRadius: 900 }}
                        source={require('../../assets/vegi.jpg')}
                    />
                    <Text style={{ fontSize: 20, color: 'grey', fontWeight: 'bold', }} >Veg+Chicken</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }} onPress={() => navigation.navigate("DessertFoodi")}>
                    <Image
                        style={{ height: 150, width: 150, borderRadius: 900 }}
                        source={require('../../assets/dessert.jpg')}
                    />
                    <Text style={{ fontSize: 20, color: 'grey', fontWeight: 'bold', }} >Dessert</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }} onPress={() => navigation.navigate("DrinkFoodi")}>
                    <Image
                        style={{ height: 150, width: 150, borderRadius: 900 }}
                        source={require('../../assets/drink.jpg')}
                    />
                    <Text style={{ fontSize: 20, color: 'grey', fontWeight: 'bold', }} >Drink</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}



// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
// import CategoriesDATA from "../../src/screens/Data/Homedata";

// export default function Categoriescreen() {

//     return (
//         <View style={{ flex: 1, backgroundColor: '#fff8dc', }}>
//             <View>
//                 <Text style={{ fontSize: 20, textAlign: 'center', backgroundColor: '#f5fffa' }}>Choose your favourite Categories</Text>
//             </View>
//             <ScrollView>
//                 {CategoriesDATA.map((item) =>
//                     <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }} onPress={() => Alert.alert('dfd')}>
//                         <Image style={{ height: 150, width: 150, borderRadius: 900 }} source={item.photos} />
//                         <Text style={{ fontSize: 20, color: 'grey', fontWeight: 'bold', }} >{item.name}</Text>
//                     </TouchableOpacity>
//                 )}
//             </ScrollView>
//             <View></View>
//         </View>
//     )
// }
