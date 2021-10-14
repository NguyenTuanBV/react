import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
export default function Product() {
    return (
        <View>
            <View>
                <Image
                    style={{width: '100%', height: 400}}
                    source={{               
                    uri:'https://s3.cloud.cmctelecom.vn/tinhte2/2019/05/4658510_50_-_GMrjMhu.jpg',
                    }}
                />
            </View>
            <View style={styles.listDots}>
                <View style={styles.dots}></View>
                <View style={styles.dot1}></View>
                <View style={styles.dot1}></View>
                <View style={styles.dot1}></View>
            </View>
            <View style={styles.buyItem}>
                <Text style={styles.nameItem}>Twill Double-Breasted Trench Coat</Text>
                <View>
                    <View style={styles.sales}>
                        <Text style={{fontSize: 25, color: 'red'}}>$39.99 <Text style={{textDecorationLine: 'line-through', fontSize: 25, color: 'black'}}>$49.99</Text></Text>
                        {/* <Text style={{color: 'black', fontSize: 20}}>5 sao =)))</Text> */}
                        <Rating
                        onFinishRating={() => { }}
                        imageSize={20}
                        style={{ paddingVertical: 10, justifyContent: 'flex-start', alignItems: 'flex-start',}}
                        />
                    </View>
                    <Text style={styles.flashSales}>Up to 60% Off Almost Everything!</Text>
                </View>
                <TouchableOpacity style={styles.addBag}>
                    <Text style={styles.txtAddBag}>ADDED TO BAG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    listDots:{
        flexDirection: 'row',
        marginTop: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    dots:{
        width: 10, 
        height: 10, 
        backgroundColor: 'black', 
        borderRadius: 5
    },
    dot1:{
        width: 10, 
        height: 10, 
        backgroundColor: 'gray', 
        borderRadius: 5,
        marginLeft: 10
    },
    buyItem:{
        padding: 20
    },
    nameItem:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    sales:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: 'black',
        marginBottom: 20
    },
    flashSales:{
        color: 'red',
        fontWeight: '500'
    },
    addBag:{
        width: '100%',
        height: 50,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 55
    },
    txtAddBag:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
})