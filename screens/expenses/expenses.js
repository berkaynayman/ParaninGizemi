import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import ScreenTab from '../../components/screenTab';
import Section from '../../components/section';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { color, menuItem } from '../../lib/lib';
import LeftMoney from '../../components/leftMoney';


function Expenses({ navigation }) {
    const [openAdd, setOpenAdd] = useState(false);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
      const getMyObject = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('expenses');
          let a = jsonValue != null ? JSON.parse(jsonValue) : [];
          setData(a);
        } catch(e) {
          // read error
          console.log("error", e)
        }
      }

      getMyObject();
    }, []);

    const handlePress = () => {
        setOpenAdd(!openAdd);
        if (openAdd && title && price) {
          const item = {
            title: title,
            price: price,
            id: uuid.v4()
          };
        
          AsyncStorage.setItem('expenses', JSON.stringify([...data, item]));
          data.push(item);
          
          setTitle("");
          setPrice("");
        }
    };

    const removeItem = useCallback((id) => {
      let filtered = data.filter(item => item.id !== id);
      setData(filtered);

      AsyncStorage.setItem('expenses', JSON.stringify(filtered));
    })
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
                {data &&
                  data.map(item => 
                    <Section key={item.id} item={item} removeItem={removeItem} />
                  )
                }
            </ScrollView>
        </View>

        <LeftMoney />
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
  text: {
    fontSize: 20,
    fontFamily: "Montserrat-ExtraBold",
    color: color.main
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
