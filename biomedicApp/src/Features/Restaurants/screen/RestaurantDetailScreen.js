import React from "react";

//Dependency Components
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { List } from 'react-native-paper';


// User Local Components


import { ScrollView } from "react-native-gesture-handler";
import { RestaurantInfo } from "../Components/RestaurantInfo";

//Component Initialization
export const RestaurantDetailScreen = ({route}) =>{

    //Passing the parameters to the component
    const {restaurant} = route.params;
    return(
        <SafeAreaView style={styles.container}>
         <ScrollView>
        <RestaurantInfo restaurant={restaurant}/>

        <List.Accordion
        title="Breakfast"
        left={props => <List.Icon {...props} icon="egg" />}>
        <List.Item title="Fried Eggs & Bread" />
        <List.Item title="Soup & Chapati" />
      </List.Accordion>

      <List.Accordion
        title="Lunch"
        left={props => <List.Icon {...props} icon="clock" />}>    
        <List.Item title="Ugali & Babarque" />
        <List.Item title="Githeri" />
      </List.Accordion>
      
      <List.Accordion
        title="Dinner"
        left={props => <List.Icon {...props} icon="knife" />}>            
        <List.Item title="Kiepe Yai" />
        <List.Item title="Rice & Beans" />
        <List.Item title="Fruits & Veggies" />
      </List.Accordion>

      <List.Accordion
        title="Drinks"
        left={props => <List.Icon {...props} icon="beer" />}>            
        <List.Item title="Soft drinks" />
        <List.Item title="Bear & Local Wine" />
      </List.Accordion>
      </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAE1DF'
    }})