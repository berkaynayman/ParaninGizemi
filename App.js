import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './screens/home/home';
import Expenses from './screens/expenses/expenses';
import Revenue from './screens/revenue/revenue';
import Goal from './screens/goal/goal';
import Donation from './screens/donation/donation';
import DailyInspirations from './screens/daily-inspirations/daily-inspirations';
import Affirmations from './screens/affirmations/affirmations';

const Stack = createNativeStackNavigator();

const expenses = [
  { title: "Kahvaltı", price: 80 },
  { title: "Market", price: 350 }
];

const DATA = {
  "expenses": [
    { title: "Kahvaltı", price: 80 },
    { title: "Market", price: 350 }
  ],
  "revenue": [
    { title: "Maaş", price: 30000 }
  ],
  "donation": [
    { title: "Kahve ısmarladım", price: 150 }
  ],
  "goal": [
    { title: "Maaş" }
  ]
}

//AsyncStorage.removeItem('leftMoney');

function App() {

  useEffect(() => {
    const getMyObject = async () => {
      try {
        const expensesJsonValue = await AsyncStorage.getItem('expenses');
        const expensesData = expensesJsonValue != null ? JSON.parse(expensesJsonValue) : null;
        console.log("expensesData", expensesData)
        if (expensesData) {
          AsyncStorage.setItem('expenses', JSON.stringify(expensesData));
        }
        
        const revenueJsonValue = await AsyncStorage.getItem('revenue');
        const revenueData = revenueJsonValue != null ? JSON.parse(revenueJsonValue) : null;
        console.log("revenueData", revenueData)
        if (revenueData) {
          AsyncStorage.setItem('revenue', JSON.stringify(revenueData));
        }

        const goalJsonValue = await AsyncStorage.getItem('goal');
        const goalData = goalJsonValue != null ? JSON.parse(goalJsonValue) : null;
        console.log("goalData", goalData)
        if (goalData) {
          AsyncStorage.setItem('goal', JSON.stringify(goalData));
        }

        const donationJsonValue = await AsyncStorage.getItem('donation');
        const donationData = donationJsonValue != null ? JSON.parse(donationJsonValue) : null;
        console.log("donationData", donationData)
        if (donationData) {
          AsyncStorage.setItem('donation', JSON.stringify(donationData));
        }

        const leftMoney = await AsyncStorage.getItem('leftMoney');
        console.log("leftMoney", leftMoney)
        if (leftMoney !== null) {
          AsyncStorage.setItem('leftMoney', leftMoney);
        } else {
          AsyncStorage.setItem('leftMoney', "0");
        }

      } catch(e) {
        // read error
        console.log("error", e)
      }
    }

    getMyObject();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Expenses" component={Expenses} />
        <Stack.Screen name="DailyInspirations" component={DailyInspirations} />
        <Stack.Screen name="Affirmations" component={Affirmations} />
        <Stack.Screen name="Revenue" component={Revenue} />
        <Stack.Screen name="Goal" component={Goal} />
        <Stack.Screen name="Donation" component={Donation} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
