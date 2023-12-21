import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    }
    ,upperRow:{
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'absolute',
        top:SIZES.xxLarge,
        width:SIZES.width -44,
        zIndex:999

    },
    image:{
   
      height:350,
      width:'100%',
      resizeMode:'cover',
    },
    details:{
        marginTop:-SIZES.large,
        width:SIZES.width,
        backgroundColor:COLORS.lightWhite,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium,

    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:SIZES.width -44,
        top:20
    },
    title:{
        fontSize:SIZES.large,
        fontWeight:'bold',
     
    },
    price:{
        padding:10,
        fontSize:SIZES.large,
        fontWeight:'semibold',
     
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large,
    },
    ratingRow:{
      
        paddingBottom:SIZES.small,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:SIZES.width -10,
        top:5
    },
    rating:{
        top:SIZES.large,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal:SIZES.large,
    },
    ratingTxt:{
        fontFamily:'medium',
        color:COLORS.gray,
        paddingHorizontal:SIZES.xSmall,
    },
    descriptionWrapper:{
        marginTop:SIZES.large *2,
        marginHorizontal:SIZES.large,

    },
    description:{
        fontFamily:'medium',
        fontSize:SIZES.large-2,
    },
    descriptionTxt:{
        fontFamily:'regular',
        fontSize:SIZES.small,
        textAlign:'justify',
        marginBottom:SIZES.small,
    },
    location:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:COLORS.secondary,
        padding:5,
        borderRadius:SIZES.large,
        marginHorizontal:12,
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:SIZES.width,
        top:20
    },
    cartBtn:{
        width:SIZES.width *0.7,
        backgroundColor:COLORS.black,
        padding:SIZES.small/2,
        borderRadius:SIZES.large,
        marginLeft:12,
    },
    cartTxt:{
        fontFamily:'semibold',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:SIZES.small,
     
    },
    addCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:'center',
        justifyContent:'center',
    }
})
export default styles