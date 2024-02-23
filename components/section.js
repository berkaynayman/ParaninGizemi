import { Image, StyleSheet, Text, View } from "react-native";
import removeIcon from "../image/removeIcon.png";
import { color } from "../lib/lib";

function Section({item, removeItem}) {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.viewItem}>
          <Text
            style={styles.sectionTitle}>
            { item.title }
          </Text>
          { item.price && (
            <Text
                style={styles.sectionTitle}>
                { item.price } TL
            </Text>
          )}
        </View>
        <View style={styles.removeButton} onTouchStart={() => removeItem(item)}>
          <Image source={removeIcon} style={styles.image} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 12,
        borderRadius: 12,
        backgroundColor: color.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewItem: {
        borderWidth: 4,
        borderColor: color.main,
        backgroundColor: color.white,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 0,
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
    },
    removeButton: {
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: "Montserrat-Bold",
        color: color.main
    },
    image: {
        resizeMode: 'contain',
        width: 40,
        height: 40
    }
})

export default Section;