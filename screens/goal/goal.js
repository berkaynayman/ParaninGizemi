import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import ScreenTab from '../../components/screenTab';

import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { color, menuItem } from '../../lib/lib';
import Section from '../../components/section';

function Goal({ navigation }) {
    const [openAdd, setOpenAdd] = useState(false);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");


    useEffect(() => {
      const getMyObject = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('goal');
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
      if (openAdd && title) {
        const item = {
          title: title,
          id: uuid.v4()
        };
      
        AsyncStorage.setItem('goal', JSON.stringify([...data, item]));
        data.push(item);
        
        setTitle("");
      }
    }

    const removeItem = useCallback((id) => {
      let filtered = data.filter(item => item.id !== id);
      setData(filtered);

      AsyncStorage.setItem('goal', JSON.stringify(filtered));
    });
  return (
    <SafeAreaView style={styles.backgroundStyle}>
        <ScreenTab navigation={navigation} title={menuItem[4].title} />
        <View
          style={[styles.view, styles.view2]}
        >   
            {openAdd && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Hedef"
                        onChangeText={setTitle}
                        value={title}
                    />
                </>
            )}
            <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
                <Text style={styles.buttonText}>EKLE</Text>
            </TouchableOpacity>
            <ScrollView 
                contentInsetAdjustmentBehavior="automatic">
                {data.map(item => (<Section key={item.id} item={item} removeItem={removeItem} />))}
            </ScrollView>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: color.main,
    flex: 1
  },
  tabView: {
    backgroundColor: color.white,
    borderRadius: 20,
    margin: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8
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
    resizeMode: 'cover',
    height: 72,
    width: 72,
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
    marginBottom: 8,
    borderWidth: 4,
    borderRadius: 12,
    borderColor: color.main,
    fontSize: 20,
    fontFamily: "Montserrat-Bold",
    color: color.main,
    backgroundColor: "#E9E8EB",
  }
});

export default Goal;
