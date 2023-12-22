import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './seachtile.style'
import { useNavigation } from '@react-navigation/native'


const SearchTile = ({product}) => {


    const navigation = useNavigation()

  return (
    <View>
        <TouchableOpacity style={styles.container} onPress={()=>{
            navigation.navigate("ProductDetails", {product: product})
        }}>
        <View style={styles.image}>
            <Image
            source={{uri: product.image}}
            style={styles.productImage}

            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.supplier}>${product.supplier}</Text>

            <Text style={styles.supplier}>${product.price}</Text>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default SearchTile