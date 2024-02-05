import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {RestaurantsNavigator} from './restaurants.navigator'
import { MapScreen } from "../../Features/Map/screens/Map.Screen.js";
import { SettingsScreen } from "../../Features/Settings/screens/Setting.screen";
        
    const Tab = createBottomTabNavigator();
    
export const AppNavigation =() =>{
    return(
        
        <SafeAreaView style = {styles.container}>
        <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ( { size, color }) => {
            let IconName;
  
            if (route.name === 'Restaurant') {
              IconName = "md-restaurant-outline";
            
            } else if (route.name === 'Settings') {
              IconName = "md-settings";
            } else if (route.name === "Map") {
              IconName = "md-map";
            }
  
            // You can return any component that you like here!
            return <Ionicons name={IconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
        >
        <Tab.Screen name="Restaurant" options={{headerShown: false}} component={RestaurantsNavigator} />
        <Tab.Screen name="Map" options={{headerShown: false}} component={MapScreen} />
        <Tab.Screen name="Settings" options={{headerShown: false}} component={SettingsScreen} />
      </Tab.Navigator>
        </SafeAreaView>
    
    )
}
   
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',  
      marginTop: StatusBar.currentHeight
    }
  })