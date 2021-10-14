import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
export default function ListProduct() {
    return (
        <View style={{padding: 20}}>
            <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: 'black'}}>Your Wishlist</Text>
            <View style={styles.item1}>
                <View>
                    <Text style={styles.titleItem}>Frayed Distresses Denim Shorts</Text>
                </View>
                <View style={styles.listItem}>
                    <View style={styles.img}>
                        <Image
                            style={{width: 170, height: 220, marginRight: 15}}
                            source={{
                                
                                uri:
                                'https://s3.cloud.cmctelecom.vn/tinhte2/2019/05/4658510_50_-_GMrjMhu.jpg',
                            }}
                        />
                    </View>
                    <View style={styles.detail}>
                        <View>
                            <Text style={styles.detailItem}>SKU#: 2000431903</Text>
                        </View>
                        
                        <View>
                            <TouchableOpacity style={styles.btnRemove1}>
                                <Text style={styles.btnTxt}>Remove from Wishlist</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            </View>
            <View style={styles.item1}>
                <View>
                    <Text style={styles.titleItem}>Ribbed Notched Blazer</Text>
                </View>
                <View style={styles.listItem}>
                    <View style={styles.img}>
                        <Image
                                style={{width: 170, height: 220, marginRight: 15}}
                                source={{
                                    uri:
                                    'https://i.imgur.com/7yzzos2.jpg',
                                }}
                            />
                    </View>
                    <View style={styles.detail}> 
                        <View>
                            <Text style={styles.detailItem}>$31.99</Text>
                            <Text style={styles.detailItem}>SKU#: 2000443147031</Text>
                            <Text style={styles.detailItem}>Color: CAMEL</Text>
                            <Text style={styles.detailItem}>Size: XS</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btnRemove2}>
                                <Text style={styles.btnTxt}>Remove from Wishlist</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    listItem:{
        flexDirection: 'row'
    },
    item1:{
        marginBottom: 50
    },
    titleItem:{
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 15,
        color: 'black'
    },
    img:{
        flex: 1
    },
    detail:{
        flex: 1
    },
    detailItem:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    btnRemove1:{
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',
        marginTop: 75
    },
    btnRemove2:{
        width: '100%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ececec',
        marginTop: 15
    },
    btnTxt:{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    }
})