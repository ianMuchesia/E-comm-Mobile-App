import {  Text, View,FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
const ProductList = () => {

    const {data, isLoading,error} = useFetch();


   
  return (
    <View>
      <Text>ProductList</Text>
    </View>
  )
}

export default ProductList

