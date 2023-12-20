import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import fn1 from "../../assets/images/fn1.jpg"
import fn2 from "../../assets/images/fn2.jpg"
import fn3 from "../../assets/images/fn3.jpg"
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {

    const slides = [
    fn3,
    fn2,
    fn1
    ]
  return (
    <View style={styles.carouselContainer}>
    <SliderBox images={slides}
    dotColor={COLORS.primary}
    inactiveDotColor={COLORS.secondary}
    ImageComponentStyle={{borderRadius:15, width:"93%",marginTop:15}}
    autoplay
    circleLoop
    autoplayInterval={10000}
 />
    </View>
  )
}

export default Carousel


const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center',
    }
})