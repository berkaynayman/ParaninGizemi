import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home/home';
import Expenses from './screens/expenses/expenses';
import Revenue from './screens/revenue/revenue';
import Goal from './screens/goal/goal';
import Donation from './screens/donation/donation';
import DailyInspirations from './screens/daily-inspirations/daily-inspirations';
import Affirmations from './screens/affirmations/affirmations';

const Stack = createNativeStackNavigator();

function App() {

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
