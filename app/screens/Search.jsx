import { View, Text, TouchableOpacity, TextInput, FlatList ,Image} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [search, setSearch ] = React.useState("");


  const [searchResults, setSearchResults] = React.useState([]);

  const url = `${baseUrl}/?search=${search}`

  const searchFilterFunction =async () => {
   try {
      const response = await axios.get(url);
      setSearchResults(response.data);
   } catch (error) {
    console.log("failed to get products: ", error)
    
   }
  }

 
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            placeholder="what are you looking for?"
            value={search}
            onChangeText={setSearch}
            // onPressIn={() => {}}
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={searchFilterFunction}>
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length > 0 ? (
        <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
        <SearchTile
        product={item}
        />
        
        )}
        style={{marginHorizontal:12}}
        />
      ) : (
        <View style={{flex:1}}>
          <Image
          source={require("../assets/images/Pose23.png")}
          style={styles.searchImage}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
