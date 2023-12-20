import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";



const styles = StyleSheet.create({
    container:{
        width: 182,
        height:240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
   
    },
    imageContainer:{
        flex: 1,
        width: 170,
        marginLeft:SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: 'hidden',
    },
    image:{
        height: 170,
        width: 170,
        resizeMode: 'cover',
    

    },
    details:
    {
        padding: SIZES.small,

    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
        marginBottom:2,


    }
,
price:{
    fontFamily:"bold",
    fontSize:SIZES.medium,
  
    

}
,
supplier:{
    fontFamily:"regular",
    fontSize:SIZES.small,
    color:COLORS.gray,    

}
,addBtn:{
    position:"absolute",
    bottom:SIZES.xSmall,
    right:SIZES.xSmall,
    width:50,
    height:50,
    backgroundColor:COLORS.primary,
    borderTopLeftRadius:SIZES.medium,
    borderBottomRightRadius:SIZES.medium,
    alignItems:"center",
    justifyContent:"center",
    shadowColor:COLORS.black,
    shadowOffset:{
        width:0,
        height:2,
    },
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5,

}
})



export default styles;