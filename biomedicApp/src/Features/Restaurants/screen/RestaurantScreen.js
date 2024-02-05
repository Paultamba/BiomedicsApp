import React, {useContext} from "react";

import { StyleSheet, SafeAreaView, View, FlatList,  } from "react-native";
import { ActivityIndicator } from 'react-native-paper';


import { RestaurantsContext } from "../../../services/restaurants/restaurantscontext";
import { Search } from "../Components/searchcomponent";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RestaurantInfo } from "../Components/RestaurantInfo";




export const RestaurantsScreen = ({navigation}) =>{

  const {restaurants, isLoading, } = useContext(RestaurantsContext);

   return (
  <SafeAreaView style={styles.container}>
    {isLoading &&
      (
      <View style={styles.loadingContainer}>
      <ActivityIndicator 
      animating={true} 
      color={"green"}
      size={"large"}
      style= {styles.indicator} />
      </View>)}
    <View style={styles.search}>
     <Search />
    </View>
    <View style={styles.list}>
    <FlatList
        data={restaurants}
        renderItem={({item}) => {
         return(
          <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetail", {restaurant: item,})}>
          <RestaurantInfo  restaurant={item} />
          </TouchableOpacity>
         );
         }}
        keyExtractor={(item) => item.name}
       
      />
      
    </View>
  </SafeAreaView>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAE1DF'
  },
  search: {
    paddingTop: 5,
    paddingBottom: 1,
    alignItems: 'center'
    
  },      
  list: {
    flex: 1,
    padding: 16,
    
  },
  loadingContainer: {
    position:'absolute',
    top: "50%",
    left: "50%"

  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -25
  }
});