import React, { useState } from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet, CheckBox, PermissionsAndroid} from "react-native";
import firebase from '../database/firebase'


const CreateBikeScreen = (props) => {
    const [state, setState] = useState ({
        name: '',
        color: '',
        model: '',
        accesories: '',
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
      };

      const saveNewBike = async() => {
        if (state.name === ''){
            alert('Por favor ingresa los datos de tu cicla tkm')
        }
        else {
            await firebase.db.collection('bikes').add({
                name: state.name,
                color: state.color,
                model: state.model,
                accesories: state.accesories
            })
            props.navigation.navigate('CodeScreen')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre de bicicleta" onChangeText={(value) => handleChangeText("name", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Color" onChangeText={(value) => handleChangeText("color", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Marca" onChangeText={(value) => handleChangeText("model", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Accesorios" onChangeText={(value) => handleChangeText("accesories", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <Button title="Aceptar terminos" onPress={() => alert('Gracias por aceptar térmiinos')}/>
            </View>
            <View style={styles.inputGroup}>
                <Button title="Registrarse" onPress={() => saveNewBike()}/>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35,
    },
    inputGroup:{
        flex: 1,
        padding:0,
        marginButton:15,
        borderBottomWidth: 1,
        borderBottomColor:'#cccccc',
    }
})

export default CreateBikeScreen