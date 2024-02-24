import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTranslation } from 'react-i18next';

import { color } from "../lib/lib";

function AddButton({handlePress}){
    const { t } = useTranslation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.buttonText}>{t('screens.base.add')}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: color.main,
        padding: 12,
        borderRadius: 12,
    },
    buttonText: {
        color: color.white,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "Montserrat-Bold",
        textTransform: "uppercase"
    }
})

export default AddButton;