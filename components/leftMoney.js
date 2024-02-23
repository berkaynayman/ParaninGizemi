import { Text, View, StyleSheet } from "react-native"
import { color } from "../lib/lib";

const LeftMoney = ({ total }) => {
    return (
        <View
          style={styles.bottomView}
        >
          <Text style={styles.text2}>Kalan Para</Text>
          <Text style={styles.leftMoneyText}>{total} TL</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomView: {
        backgroundColor: color.white,
        borderRadius: 20,
        margin: 20,
        marginTop: 0,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        height: '9%'
    },
    text2: {
        fontSize: 20,
        fontFamily: "Montserrat-ExtraBold",
        color: color.main   
    },
    leftMoneyText: {
        fontSize: 28,
        fontFamily: "Montserrat-ExtraBold",
        color: color.main
    }
});

export default LeftMoney;