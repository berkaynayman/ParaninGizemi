import React, { useState } from 'react';
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

import { color, menuItem } from '../../lib/lib';


const data = [
  { title: "Harcama 1", id: 1 }
]

function Section({children, title}) {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionTitle,
        ]}>
        100 TL
      </Text>
    </View>
  );
}

function Expenses({ navigation }) {
    const [openAdd, setOpenAdd] = useState(false);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const handlePress = () => {
        setOpenAdd(!openAdd);
        if (openAdd && title && price) {
            data.push({
                title: title,
                price: price,
                id: data.length + 1
            });
            setTitle("");
            setPrice("");
        }
    }
  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScreenTab navigation={navigation} title={menuItem[0].title}/>
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
                {data.map(item => (<Section key={item.id} title={item.title} />))}
            </ScrollView>
        </View>

        <View
          style={styles.bottomView}
        >
          <Text style={styles.text2}>Kalan Para</Text>
          <Text style={styles.leftMoneyText}>250 TL</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: color.main,
    flex: 1
  },
  tabViewParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
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
    paddingLeft: 0,
    width: "16%"
  },
  bottomView: {
    backgroundColor: color.white,
    borderRadius: 20,
    margin: 20,
    marginTop: 0,
    alignItems: "center",
    padding: 8
  },
  view: {
    backgroundColor: color.white,
    margin: 20,
    borderRadius: 20,
    padding: 16
  },
  view2: {
    marginTop: 0,
    height: "66%"
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
  },
  text2: {
    fontSize: 16,
    fontFamily: "Montserrat-ExtraBold",
    color: color.main
  },
  leftMoneyText: {
    fontSize: 28,
    fontFamily: "Montserrat-ExtraBold",
    color: color.main
  },
  sectionContainer: {
    marginTop: 12,
    padding: 12,
    borderWidth: 4,
    borderRadius: 12,
    borderColor: color.main,
    backgroundColor: color.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: color.main
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
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
    backgroundColor: "#E9E8EB",
  },
  input1: {
    marginBottom: 8
  }
});

export default Expenses;
