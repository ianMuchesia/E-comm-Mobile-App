import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./productRow.style";
import useFetch from "../../hooks/useFetch";
const ProductRow = () => {
  const { data, isLoading, error } = useFetch();




  return (
    <View style={styles.container}>
      {
        isLoading?(
          <ActivityIndicator size={SIZES.xxLarge}
          color={COLORS.primary}/>
         
        ):error?(
          <Text>Failed to fetch, Please check your connection</Text>
        ):(
          <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          // showsHorizontalScrollIndicator={false}
          contentContainerStyle={{columnGap:SIZES.medium}}
          renderItem={({ item }) => <ProductCardView product={item} />}/>
        )
      }
    </View>
  );
};

export default ProductRow;
