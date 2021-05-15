import React from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet, CheckBox, PermissionsAndroid} from "react-native";
import firebase from '../database/firebase'

const CodeScreen = () => {
    return (
        <ScrollView style={styles.container}>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35,
    }
})

/*
const CodeScreen = () => {
return (
    <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <Image 
                source={{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1200px-Codigo_QR.svg.png",}}/>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35,
    }
})
*/
export default CodeScreen