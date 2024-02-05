import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../Features/Restaurants/screen/RestaurantScreen";
import { RestaurantDetailScreen } from "../../Features/Restaurants/screen/RestaurantDetailScreen";


const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = ()=>{
   return(
    <RestaurantStack.Navigator 
        
    >
        <RestaurantStack.Screen
        options={{headerShown: false}} 
        name="Restaurants"
        component={RestaurantsScreen}
        
        />
        <RestaurantStack.Screen 
        options={{headerShown: false}}
        name="RestaurantDetail"
        component={RestaurantDetailScreen}/>
    </RestaurantStack.Navigator>
   ) 
}