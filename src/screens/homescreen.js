import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/home.jpg')} style={{ height: 150, width: 'auto', }} />
            </View>
            <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ borderLeftWidth: 2 }} onPress={() => Alert.alert('')}>
                    <MaterialIcons name='food-bank' size={30} color='Black' />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontSize: 30, fontStyle: 'italic', borderBottomWidth: 2, borderTopWidth: 2 }}> Food'i  </Text>
                <TouchableOpacity style={{ borderRightWidth: 2, }} onPress={() => Alert.alert('')}>
                    <MaterialCommunityIcons name='food-halal' size={30} color='Black' />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <TextInput placeholder='Search your mode' textAlign='center' style={{ borderWidth: 1, height: 40, width: '80%', borderRadius: 10 }} />
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => Alert.alert('')}>
                    <MaterialIcons name='search' size={30} color='Black' />
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require('../../assets/homeii.jpg')} style={{ width: 'auto', marginTop: 40 }} />
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: '#f0ffff',
    },
});
