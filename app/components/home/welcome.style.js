import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";


const styles = StyleSheet.create({
    container:{
        width: "100%"
    },
    welcomeTxt:(color,top)=>({
        fontFamily:"bold",
        fontSize:SIZES.xxLarge -8,
        marginTop:top,
        color:color,
        marginHorizontal:12
        
    }),
    searchContainer:{
        flexDirection:'row',
        height:50,
        justifyContent:"center",
        alignContent:"center",
        marginHorizontal:SIZES.small,
        marginVertical:SIZES.medium,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary,
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
        marginTop:SIZES.small,
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small,
    },
    searchInput:{
        fontFamily:"regular",
    
        width:"100%",
       
        paddingHorizontal:SIZES.small,
        height:"100%"
    },
    searchBtn:{
        width:50,
        height:"100%",

        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.medium,
    },
})



export default styles