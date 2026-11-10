
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CartProvider } from './context/CartContext';

import ShopScreen from './screens/ShopScreen';

import CartScreen from './screens/CartScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    // Share global state with all screens
    <CartProvider>

      <NavigationContainer>

        <Tab.Navigator
          screenOptions={{
            headerShown: false,

            tabBarActiveTintColor: '#2196F3',

            tabBarInactiveTintColor: '#999',

            tabBarStyle: {
              height: 65,
              paddingBottom: 10,
              paddingTop: 8
            },

            tabBarLabelStyle: {
              fontWeight: 'bold'
            }
          }}
        >

          <Tab.Screen
            name="Shop"
            component={ShopScreen}
            options={{
              tabBarLabel: 'Shop'
            }}
          />

          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarLabel: 'Cart'
            }}
          />

        </Tab.Navigator>

      </NavigationContainer>

    </CartProvider>

  );

}
