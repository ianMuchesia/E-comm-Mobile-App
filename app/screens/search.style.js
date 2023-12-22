import { StyleSheet } from 'react-native'
import { SIZES,COLORS } from '../constants'


const styles = StyleSheet.create({
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
    searchImage:{
        resizeMode:'contain',
        width:SIZES.width-80,
        height:SIZES.height-300, 
        opacity:0.6,
    }
})

export default styles