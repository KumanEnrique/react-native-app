import React,{useEffect,useState} from 'react'
import {View,Text,Button,TextInput,ScrollView,StyleSheet,ActivityIndicator,Alert} from 'react-native'
import firebase from '../database/firebase'

const UserDetailScreen = (props) => {

    const [user,setUser] = useState({
        id:"",
        name :"",
        email :"",
        phone :""
    })

    const [loading,setLoading] = useState(true)

    const getUserById = async(id) =>{
        const dbRef = firebase.db.collection("users").doc(id)
        const doc = await dbRef.get()
        const user = doc.data()
        setUser({
            ...user,
            id:doc.id
        })
        setLoading(false)
    }

    const handleChangetext = (property,value)=>{
        setUser({...user,[property]: value})
    }

    const deleteUser = async()=>{
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId)
        await dbRef.delete()
        props.navigation.navigate("UserList")
    }

    const updateUser = async()=>{
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId)
        await dbRef.set({
            name :user.name,
            email :user.email,
            phone :user.phone
        })
        setUser({
            id:"",
            name :"",
            email :"",
            phone :""
        })
        props.navigation.navigate("UserList")
    }

    const openConfirmationAlert = ()=>{
        Alert.alert("eliminar el usuario","estas seguro",[
            {text:"yes",onPress:()=>deleteUser()},
            {text:"no",onPress:()=>console.log(22)}
        ])
    }
    useEffect(()=>{
        getUserById(props.route.params.userId)
    },[])

    if(loading){
        return(
            <View>
                <ActivityIndicator size='large' color='#9e9e9e'/>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='Name User' 
                value={user.name}
                onChangeText={(value)=>handleChangetext('name',value)}></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='Email User'
                value={user.email}
                onChangeText={(value)=>handleChangetext('email',value)}
                ></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder='Phone User'
                value={user.phone}
                onChangeText={(value)=>handleChangetext('phone',value)}
                ></TextInput>
            </View>
            <View>
                <Button 
                color="#f1c40f"
                title="Update user"
                onPress={()=>updateUser()}></Button>
            </View>
            <View>
                <Button 
                color="#c0392b" 
                title="Delete user"
                onPress={()=>openConfirmationAlert()}></Button>
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

export default UserDetailScreen
