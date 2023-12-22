import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
  
    }
    ,container:{
        alignItems:'center',
        paddingTop:SIZES.xxLarge,
        paddingLeft:SIZES.small/2,
    },
    separator: {
        height: 16,
      },
})


export default styles;