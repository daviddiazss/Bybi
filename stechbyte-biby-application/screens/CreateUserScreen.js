import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, PermissionsAndroid} from "react-native";
import firebase from '../database/firebase'

const CreateUserScreen = (props) => {

    const [state, setState] = useState ({
        name: '',
        mail: '',
        code: '',
        password: '',
        confpassword: ''
    })

    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
      };

    const saveNewUser = async() => {
        if (state.name === ''){
            alert('Por favor ingresa tu nombrecito tkm')
        }
        else {
            await firebase.db.collection('users').add({
                name: state.name,
                mail: state.mail,
                code: state.code,
                password: state.password,
                confpassword: state.password
            })
            props.navigation.navigate('CreateBikeScreen')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre de usuario" onChangeText={(value) => handleChangeText("name", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Correo electrónico" onChangeText={(value) => handleChangeText("mail", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Código institucional" onChangeText={(value) => handleChangeText("code", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Contraseña" onChangeText={(value) => handleChangeText("password", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Confirmar contraseña" onChangeText={(value) => handleChangeText("confpassword", value)}/>
            </View>
            <View style={styles.inputGroup}>
                <Button title="Registrarse" onPress={() => saveNewUser()}/>
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

export default CreateUserScreen