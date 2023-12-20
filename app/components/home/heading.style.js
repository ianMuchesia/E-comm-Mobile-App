import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"





const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginBottom: -SIZES.xSmall,
        marginHorizontal: 12,
    }
    ,
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.small,

    },
    headerTitle:{
        fontSize: SIZES.xLarge -2,
        fontWeight: "semibold",
        color: COLORS.black,

    }
})


export default styles