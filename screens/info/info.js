
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import { color, infoMenu } from '../../lib/lib';
import { menuItem } from '../../lib/lib';
import ScreenTab from '../../components/screenTab';
import Setting from '../../components/Setting';


function Section({ item }) {
  const { t, i18n } = useTranslation();

  return (
    <View
        style={[styles.view, styles.view2]}
    >  
        <Text style={styles.title}>{ t('menuItem.' + item.title) }</Text>
        <Text style={styles.text}>{ t('infoMenu.' + item.description) }</Text>
    </View>
  );
}

function Info({ navigation }) {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScreenTab navigation={navigation} title={menuItem[4].title} />
        { infoMenu.map((item, index) => <Section key={index} item={item} /> )}

        <Setting />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: color.main,
    flex: 1
  },
  view: {
    backgroundColor: color.white,
    margin: 20,
    borderRadius: 20,
    padding: 12,
  },
  view2: {
    marginTop: 0
  },
  image: {
    resizeMode: 'center',
    height: 200,
    width: "auto",
  },
  title: {
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Montserrat-Bold",
    color: color.main,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Montserrat-Bold",
    color: color.main,
    borderRadius: 20,
    borderColor: color.main
  },
  text2: {
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
    color: color.main
  },
  sectionContainer: {
    marginTop: 12,
    padding: 12,
    borderWidth: 4,
    borderRadius: 12,
    borderColor: color.main,
    backgroundColor: color.main,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: color.white,
    textAlign: "center"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Info;

