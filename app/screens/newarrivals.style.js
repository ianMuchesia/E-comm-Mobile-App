import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    wrapper:{
        flex:1,
        backgroundColor:COLORS.lightWhite
    },
    upperRow:{
        marginHorizontal:SIZES.large,
        flexDirection:'row',
        justifyContent:'flex-start',
        position:'absolute',
        alignItems:'center',
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.large,
        top:SIZES.large+20,
        width:SIZES.width-50,
        zIndex:999
        

    },heading:{
        fontFamily:'semibold',
        fontSize:SIZES.medium,
        color:COLORS.lightWhite,
        marginLeft:SIZES.large

    }
})



export default styles;