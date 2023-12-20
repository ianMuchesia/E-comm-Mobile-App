import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import {Ionicons, Fontisto} from "@expo/vector-icons"
import Welcome from '../components/home/Welcome'
import Carousel from '../components/home/Carousel'
import Heading from '../components/home/Heading'
import ProductRow from '../components/products/ProductRow'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1,marginBottom:70}}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" sizes={24}/>
          <Text style={styles.location}>Nairobi Kenya</Text>
          <View style={{alignItems:"flex-end"}}>
            <View
            style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
            <Fontisto name="shopping-bag" size={24}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome/>
        <Carousel/>
        <Heading/>
        <ProductRow/>
        <View><Text>hey</Text></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home