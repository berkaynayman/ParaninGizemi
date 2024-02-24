import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { color, languageMenu, currencyMenu } from '../lib/lib';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LanguageItem({item}) {
  const { t, i18n } = useTranslation(); //i18n instance
  const currentLanguage = t('language');
  return (
    <TouchableOpacity onPress={() => i18n.changeLanguage(item.value)}>
        <Text style={
          currentLanguage === item.title ?
          styles.activeText :
          styles.text }
        >
          { item.title }
        </Text>
      </TouchableOpacity>
  )
}

function CurrencyItem({item}) {
  const { t } = useTranslation(); //i18n instance
  const [currentCurrency, setCurrentCurrency] = useState('');

  useEffect(() => {
    const getCurrentCurrency = async () => {
      try {
        const currencyValue = await AsyncStorage.getItem('currency');
        setCurrentCurrency(currencyValue);
      } catch(e) {
        // read error
        console.log("error", e)
      }
    }

    getCurrentCurrency();
  }, []);

  const handlePress = (item) => {
    setCurrentCurrency(item);
    AsyncStorage.setItem('currency', item);
  }

  return (
    <View style={styles.viewCurrency}>
      <TouchableOpacity onPress={() => handlePress(currencyMenu[0].value) }>
          <Text style={
            currentCurrency === currencyMenu[0].value ?
            styles.activeText :
            styles.text }
          >
            { currencyMenu[0].title }
          </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress(currencyMenu[1].value) }>
          <Text style={
            currentCurrency === currencyMenu[1].value ?
            styles.activeText :
            styles.text }
          >
            { currencyMenu[1].title }
          </Text>
      </TouchableOpacity>
    </View>
  )
}

function Setting() {
  return (
    <View style={styles.viewParent}>
      <View style={styles.viewLanguage}>
        {languageMenu.map((item, index) => <LanguageItem key={index} item={item} />)}
      </View>
      <CurrencyItem />
    </View>
  )
}

const styles = StyleSheet.create({
  viewParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginTop: 0,
  },
  viewLanguage: {
    backgroundColor: color.white,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: "48%"
  },
  viewCurrency: {
    backgroundColor: color.white,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 8,
    width: "48%"
  },
  text: {
    fontSize: 16,
    fontFamily: "Montserrat-ExtraBold",
    color: color.main,
    fontWeight: "600"
  },
  activeText: {
    fontSize: 16,
    fontFamily: "Montserrat-ExtraBold",
    color: color.main
  }
})

export default Setting;