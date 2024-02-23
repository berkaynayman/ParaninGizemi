
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { color } from '../../lib/lib';
import { menuItem } from '../../lib/lib';
import ScreenTab from '../../components/screenTab';


function Section({title}) {
  return (
    <View style={styles.sectionContainer} onTouchEnd={() => console.log(title)}>
      <Text
        style={[
          styles.sectionTitle,
        ]}>
        {title}
      </Text>
    </View>
  );
}

function DailyInspirations({ navigation }) {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScreenTab navigation={navigation} title={menuItem[2].title} />
        <View
          style={[styles.view, styles.view2]}
        >
            <Text style={styles.text}>
                Parayla mutluluğu satın alamazsınız,ama doğru şekilde
                harcadığınızda, hayatınızı iyileştirebilirsiniz.
            </Text>
            <Section title="Paylaş" />
        </View>
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
    marginTop: 0
  },
  image: {
    resizeMode: 'center',
    height: 200,
    width: "auto",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Montserrat-Bold",
    color: color.main,
    borderWidth: 4,
    borderRadius: 20,
    padding: 12,
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

export default DailyInspirations;

