import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ScreenTab from '../../components/screenTab';
import Section from '../../components/section';
import LeftMoney from '../../components/leftMoney';

import { color } from '../../lib/lib';

function BaseScreen({
    screenName, navigation, openAdd,
    title, setTitle, price, setPrice,
    handlePress, data, removeItem, leftMoney
}) {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScreenTab navigation={navigation} title={screenName}/>
        <View
          style={[styles.view, styles.view2]}
        >   
            {openAdd && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Başlık"
                        onChangeText={setTitle}
                        value={title}
                    />
                    <TextInput
                        style={[styles.input, styles.input1]}
                        onChangeText={setPrice}
                        value={price}
                        placeholder="Fiyat"
                        keyboardType="numeric"
                    />
                </>
            )}
            <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
                <Text style={styles.buttonText}>EKLE</Text>
            </TouchableOpacity>
            <ScrollView 
                contentInsetAdjustmentBehavior="automatic">
                {data &&
                  data.map(item => 
                    <Section key={item.id} item={item} removeItem={removeItem} />
                  )
                }
            </ScrollView>
        </View>

        <LeftMoney total={leftMoney} />
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
    height: "72%"
  },
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
  },
  input: {
    padding: 8,
    marginTop: 8,
    borderWidth: 4,
    borderRadius: 12,
    borderColor: color.main,
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: color.main,
    backgroundColor: color.greey,
  },
  input1: {
    marginBottom: 8
  }
});

export default BaseScreen;
