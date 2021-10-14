import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Profile() {
    return (
        <View style={{paddingTop: 30, height: 2000}}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.listTitle}>
                <Text style={styles.content}><Ionicons name="cube-outline" size={27} color="black" /> Order Tracking </Text>
                <Ionicons style={styles.next} name="chevron-forward-outline" size={27} color="black"/>
            </View>
            <View style={styles.listTitle}>
                <Text style={styles.content}><Ionicons name="lock-closed-outline" size={27} color="black" /> Manage Password</Text>
                <Ionicons style={styles.next} name="chevron-forward-outline" size={27} color="black"/>
            </View>
            <View style={styles.listTitle}>
                <Text style={styles.content}><Ionicons name="book-outline" size={27} color="black" /> Address Book</Text>
                <Ionicons style={styles.next} name="chevron-forward-outline" size={27} color="black"/>
            </View>
            <View style={styles.listTitle}>
                <Text style={styles.content}><Ionicons name="mail-unread-outline" size={27} color="black" /> Notifications</Text>
                <Ionicons style={styles.next} name="chevron-forward-outline" size={27} color="black"/>
            </View>
            <Text style={styles.titleHelp}>NEED HELPS?</Text>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                <TouchableOpacity style={styles.btnContact}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Contact Us</Text>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                <TouchableOpacity style={styles.btnSignOut}>
                    <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        borderBottomWidth: 1, 
        paddingBottom: 30, 
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 30,
        textAlign: 'center'
    },
    listTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1, 
        paddingBottom: 30, 
        fontSize: 20,
        paddingTop: 30,
        
    },
    content:{
        marginLeft: 40,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
    },
    next:{
        marginRight: 10
    }
    ,
    titleHelp:{
        textAlign: 'center',
        marginTop: 40,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    btnContact:{
        height: 50,
        borderWidth: 1,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnSignOut:{
        width: '90%',
        borderWidth: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})
