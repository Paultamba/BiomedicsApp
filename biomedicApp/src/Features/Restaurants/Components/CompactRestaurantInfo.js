import React from "react";
import { Text, Platform} from 'react-native';
import { WebView } from 'react-native-webview';
import styled from "styled-components/native";



const CompactImage = styled.Image`
width: 100%;
height: 100%;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Android = Platform.OS === "android";

export const CompactRestInfo = ({restaurant}) =>{
    const Image = Android ? CompactWebview : CompactImage;
    return(
    <>
       
       <Item>
            <Image source={ {uri:restaurant.photos[0]}} />
             <Text> {restaurant.name} </Text>   
       </Item>
            
     
        
        </>
        
    )
}