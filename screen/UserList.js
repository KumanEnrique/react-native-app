import React,{useEffect,useState} from 'react'
import {View,Text,ScrollView,Button} from 'react-native'
import firebase from '../database/firebase'
import {ListItem,Avatar} from 'react-native-elements'

// import reas from 'react-native-gesture-handler'

const UserList = (props) => {

    const [users,setUsers] = useState([])
    useEffect(()=>{
        firebase.db.collection('users').onSnapshot(querySnapshot =>{
            const users = []
            querySnapshot.docs.forEach(doc =>{
                const {name,email,phone} = doc.data()
                users.push({
                    id:doc.id,
                    name,
                    email,
                    phone
                })
            })
            setUsers(users)
        })
    },[])

    return (
        <ScrollView>
            <Button title="create user" 
            onPress={()=> props.navigation.navigate('CreateUserScreen')}></Button>

        {
            users.map((user)=>{
                return(
                    <ListItem bottomDivider key={user.id} onPress={()=>{
                        props.navigation.navigate('UserDetailScreen',{
                            userId:user.id
                        })
                    }}>
                        <ListItem.Chevron/>
                        <Avatar rounded source={{uri:'https://reqres.in/img/faces/12-image.jpg'}}/>
                        <ListItem.Content>
                            <ListItem.Title>{user.name}</ListItem.Title>
                            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            <ListItem.Subtitle>{user.id}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                )
            })
        }
        </ScrollView>
    )
}

export default UserList
