import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "./productdetails.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);
  const route = useRoute();

  const {product } = route.params;
 
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: product.image}}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>
            {product.title.slice(0,15)}...
          </Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>Ksh. {product.price}</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((el) => (
              <Ionicons name="star" size={24} color={"gold"} key={el} />
            ))}
            <Text style={styles.ratingTxt}>(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                setCount((prev) => prev + 1);
              }}
            >
              <SimpleLineIcons name="plus" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.ratingTxt}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                if (count > 1) setCount((prev) => prev - 1);
              }}
            >
              <SimpleLineIcons name="minus" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descriptionTxt}>
            {product.description}
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} color="black" />
              <Text style={styles.locationTxt}>
                {" "}
                {product.location}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={20}
                color="black"
              />
              <Text style={styles.locationTxt}> Free delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTxt}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={20} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
