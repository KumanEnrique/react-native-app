import React,{useState} from 'react'
import {View,Button,TextInput,ScrollView,StyleSheet} from 'react-native'
import firebase from '../database/firebase'

const CreateUserScreen = (props) => {

    const [state,setState] = useState({
        name :"",
        email :"",
        phone :""
    })
    const handleChangetext = (property,value)=>{
        setState({...state,[property]: value})
    }
    const saveNewUser = async() =>{
        if (state.name === "" && state.email === "" && state.phone === ""){
            alert("llena todos los campos")
        }else{
            try {
                await firebase.db.collection('users').add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone
                })
                props.navigation.navigate('UserList')
            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='Name User' 
                onChangeText={(value)=>handleChangetext('name',value)}></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='Email User'
                onChangeText={(value)=>handleChangetext('email',value)}
                ></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='Phone User'
                onChangeText={(value)=>handleChangetext('phone',value)}
                ></TextInput>
            </View>
            <View>
                <Button title="Save user"
                onPress={()=>saveNewUser()}></Button>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:35
    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc'
    }
})
export default CreateUserScreen
