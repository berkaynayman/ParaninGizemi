import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import ScreenTab from '../../components/screenTab';
import Section from '../../components/section';
import LeftMoney from '../../components/leftMoney';

import { color } from '../../lib/lib';
import AddButton from '../../components/addButton';

function BaseScreen({
    screenName, navigation, openAdd,
    title, setTitle, price, setPrice,
    handlePress, data, removeItem, leftMoney
}) {
  const { t } = useTranslation();

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
                        placeholderTextColor={color.main}
                        placeholder={t('screens.base.title')}
                        onChangeText={setTitle}
                        value={title}
                    />
                    <TextInput
                        style={[styles.input, styles.input1]}
                        placeholderTextColor={color.main}
                        onChangeText={setPrice}
                        value={price}
                        placeholder={t('screens.base.price')}
                        keyboardType="numeric"
                    />
                </>
            )}
            <AddButton handlePress={handlePress} />
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
    textTransform: "uppercase"
  },
  input: {
    padding: 8,
    marginTop: 8,
    borderWidth: 4,
    borderRadius: 12,
    borderColor: color.main,
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: color.main

  },
  input1: {
    marginBottom: 8
  }
});

export default BaseScreen;
