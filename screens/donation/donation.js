import React, { useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import BaseScreen from '../components/base-screen';

import { menuItem } from '../../lib/lib';

function Donation({ navigation }) {
    const [openAdd, setOpenAdd] = useState(false);
    const [data, setData] = useState([]);
    const [leftMoney, setLeftMoney] = useState(0);
    const [currency, setCurrency] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");


    useEffect(() => {
      const getMyObject = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('donation');
          let a = jsonValue != null ? JSON.parse(jsonValue) : [];
          setData(a);

          const leftMoney = await AsyncStorage.getItem('leftMoney');
          setLeftMoney(Number(leftMoney));
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
        
          AsyncStorage.setItem('donation', JSON.stringify([item, ...data]));
          setData([item, ...data]);
          
          const _leftMoney = leftMoney - Number(price);
          setLeftMoney(_leftMoney);
          AsyncStorage.setItem('leftMoney', _leftMoney.toString());

          setTitle("");
          setPrice("");
        }
    };

    const removeItem = useCallback((_item) => {
      let filtered = data.filter(item => item.id !== _item.id);
      setData(filtered);
      AsyncStorage.setItem('donation', JSON.stringify(filtered));

      const _leftMoney = leftMoney + Number(_item.price);
      setLeftMoney(_leftMoney);
      AsyncStorage.setItem('leftMoney', _leftMoney.toString());
    });

  return (
    <BaseScreen
      screenName={menuItem[3].title}
      navigation={navigation}
      openAdd={openAdd}
      title={title}
      setTitle={setTitle}
      price={price}
      setPrice={setPrice}
      handlePress={handlePress}
      data={data}
      removeItem={removeItem}
      leftMoney={leftMoney}
    />
  );
}

export default Donation;
