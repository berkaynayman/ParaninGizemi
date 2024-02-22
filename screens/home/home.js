import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { color } from '../../lib/lib';
import { menuItem } from '../../lib/lib';
import moneyImg from '../../image/money.png';


function Section({navigation, title, route}) {
  return (
    <View style={styles.sectionContainer} onTouchEnd={() => navigation.navigate(route)}>
      <Text
        style={[
          styles.sectionTitle,
        ]}>
        {title}
      </Text>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={styles.view}
        >
          <Image source={moneyImg} style={styles.image} />
          <Text style={styles.text}>PARANIN</Text>
          <Text style={styles.text2}>GİZEMİ</Text>
        </View>
        <View
          style={[styles.view, styles.view2]}
        >
          {menuItem.map((item, index) => (<Section key={index} title={item.title} route={item.route} navigation={navigation} />))}

        </View>
      </ScrollView>
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
    padding: 16
  },
  view2: {
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 12,
  },
  image: {
    resizeMode: 'center',
    height: 200,
    width: "auto",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    color: color.main
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
    color: color.white
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

export default Home;
