import { Text, View, StyleSheet } from "react-native"
import { useTranslation } from 'react-i18next';
import { color } from "../lib/lib";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LeftMoney = ({ total }) => {
    const { t } = useTranslation();
    const [currency, setCurrency] = useState("");

    useEffect(() => {
        const getCurrency = async () => {
            try {
                const currency = await AsyncStorage.getItem('currency');
                setCurrency(currency);
            } catch (error) {
                console.log("error", error)
            }
        }
        getCurrency();
    }, []);

    return (
        <View
          style={styles.bottomView}
        >
          <Text style={styles.text2}>{ t('components.leftMoney') }</Text>
          <Text style={styles.leftMoneyText}>{total} {currency}</Text>
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