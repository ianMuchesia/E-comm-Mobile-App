import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../constants';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.small,
        flexDirection: 'row',
        padding:SIZES.medium,
        borderRadius:SIZES.small,
        backgroundColor:'#fff',
        ...SHADOWS.medium,
        shadowColor:COLORS.lightWhite

    },
    image: {
        width: 70,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems: 'center',

    },
    productImage:{
     width:"100%",
     height:65,
     borderRadius:SIZES.small,
     resizeMode:'cover',  
    },
    textContainer: {
        flex: 1,
        marginHorizontal:SIZES.medium,
    },
    productTitle: {
        fontFamily: 'bold',
        fontSize: SIZES.medium,
        color: COLORS.primary,
      
    },
    supplier:{
        fontFamily: 'regular',
        fontSize: SIZES.small+ 2,
        color: COLORS.gray,
        marginTop:3,
    }
}
    )



export default styles