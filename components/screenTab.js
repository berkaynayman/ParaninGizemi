import { View, StyleSheet, Image, Text } from "react-native";

import LeftMenuIcon from "../image/leftMenuIcon.png";
import { color } from "../lib/lib";

const ScreenTab = ({ navigation, title }) => {
    return (
        <View style={styles.tabViewParent}>
          <View
            style={styles.tabViewImage}
            onTouchEnd={() => navigation.navigate("Home")}
          >
            <Image source={LeftMenuIcon} style={styles.image} />
          </View>
          <View
            style={styles.tabView}
          >
            <Text style={styles.text}>{ title }</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tabViewParent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        height: 52
    },
    tabView: {
        backgroundColor: color.white,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 8,
        width: "80%"
    },
    tabViewImage: {
        backgroundColor: color.white,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 0,
        width: "16%"
    },
    image: {
        resizeMode: 'center',
        height: 28,
        width: 28,
        margin: 12
    },
    text: {
        fontSize: 20,
        fontFamily: "Montserrat-ExtraBold",
        color: color.main,
        paddingLeft: 4,
    }
});

export default ScreenTab;