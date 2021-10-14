import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function yourBag() {
    return (
        <View>
            <View style={styles.titleCart}>
                <Text style={{fontWeight:'bold',fontSize: 18,color:'white'}}>You're Earned Free Shipping!</Text>
            </View>
            <View style={styles.mainCart}>
                <View style={{paddingTop: 20, paddingLeft: 35}}>
                    <Text style={{color: 'red', fontSize: 18}}>Remove 1 unavaliable items </Text>
                    <Text style={{color: 'red', fontSize: 18}}>to continue.</Text>
                    <TouchableOpacity style={styles.btnRemoveAll}>
                        <Text style={styles.txtRemoveAll}>Remove All</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.titleRemoveAll}>
                    <View>
                        <View>
                            <Text style={{color: 'red', fontSize: 18}}>Remove unavaliable item to continue.</Text>
                        </View>
                        <TouchableOpacity style={styles.btnRemoveItem}>
                            <Text style={styles.txtRemoveItem}>Remove Item</Text>
                        </TouchableOpacity>
                        <Text style={{width: '95%', borderTopWidth: 0.8, borderColor: 'black', fontSize: 20, fontWeight: 'bold', color: 'black'}}>WESC Let's Get Weird Graphic Tee</Text>
                        <View style={styles.detailBag}>
                            <View style={{flex: 1, paddingBottom: 60}}>
                                <Image
                                    style={{width: '77%', height:230}}
                                    source={{               
                                    uri:'https://s3.cloud.cmctelecom.vn/tinhte2/2019/05/4658510_50_-_GMrjMhu.jpg',
                                    }}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: 21, color: 'red'}}>$32.00 <Text style={{textDecorationLine: 'line-through', fontSize: 21, color: 'black'}}>$70.98</Text></Text>
                                <Text style={styles.txtDetailBag}>SKU#: <Text style={{fontWeight: 'bold'}}>2000424935033</Text></Text>
                                <Text style={styles.txtDetailBag}>Color: <Text style={{fontWeight: 'bold'}}>WHITE/MULTI</Text></Text>
                                <Text style={styles.txtDetailBag}>Size: <Text style={{fontWeight: 'bold'}}>M</Text></Text>
                                <Text style={styles.txtStock}>Out of Stock</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnCheckout}>
                    <Text style={styles.txtCheckout}>PROCEED TO CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    titleCart:{
        width: '100%',
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainCart:{
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        borderWidth: 1,
        borderColor: 'red',
    },
    btnRemoveAll:{
        height: 45,
        width: '30%',
        backgroundColor: 'red',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtRemoveAll:{
        color: 'white', 
        fontSize: 16, 
        fontWeight: 'bold'
    },
    btnRemoveItem:{
        height: 45,
        width: '39%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 15,
        
    },
    txtRemoveItem:{
        color: 'white', 
        fontSize: 16, 
        fontWeight: 'bold'
    },
    titleRemoveAll:{
        width: '96%',
        paddingTop: 40,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 15,
        marginLeft: 8,
        marginRight: 10,
        marginTop: 30,
        borderBottomWidth: 0,
        marginBottom: 40
    },
    detailBag:{
        flexDirection: 'row',
        padding: 15,
    },
    txtDetailBag:{
        color: 'black',
        fontSize: 15,
        marginTop: 8
        
    },
    txtStock:{
        color: 'red',
        fontSize: 17,
        marginTop: 9
    },
    btnCheckout:{
        position: 'absolute',
        width: '101.5%',
        backgroundColor: 'yellow',
        height: 50,
        top: '86%',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftColor: 'white',
        left: -3
    },
    txtCheckout:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

