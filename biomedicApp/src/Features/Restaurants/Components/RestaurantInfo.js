import React from 'react';
import {Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star';
import { Card } from 'react-native-paper';
import open from "../../../../assets/open.js";


export const RestaurantInfo = ({restaurant = {}}) => {
 
const{
  name = "Engineer Nuhu Vergies",
  icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos = [
    // "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
  isOpenNow = true,
   rating = 4.2,
  address = "100 Some Random Street",
  isClosedTemporarily = false,
  placeid,
} = restaurant;

const ratingArray = Array.from(new Array(Math.floor(rating)));

return(
  <SafeAreaView>
    <Card  style={{marginBottom: 16,}}>   
      <Card.Cover
        source={{ uri: photos[0] }}
        style={{margin: 10,}}
      />
      <View style={{padding: 5}}>
      <Text>{name}</Text>

      <View style={styles.section} >
            {ratingArray.map((_, i) => (
              <SvgXml 
              key={`star-${placeid}-${i}`}
              xml={star} 
              width={20} 
              height={20} />
            ))}
      </View>
      <View style={styles.sectionEnd}>
            {isClosedTemporarily && (
              <Text>CLOSED TEMPORARILY</Text>
            )}
            <View>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </View>
              <View source={{ uri: icon }} />
          
        </View>

      <Text>{address}</Text>  
      </View>
    </Card>

  </SafeAreaView>

)
}

 const styles = StyleSheet.create ({
  sectionEnd: {
    flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})