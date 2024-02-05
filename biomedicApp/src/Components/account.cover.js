
// import { Image } from "react-native";
import styled from 'styled-components';

export const BackgroundCover = styled.ImageBackground.attrs({
    source: require("../../assets/Restaurant/meal.jpg")
})`
height: 100%;
width: 100%;
align-items: center;
justify-content: center;
`;

export const AccountCover = styled.View`
position: absolute;
background-color: rgba( 255, 255, 255, 0.3);
height: 100%;
width: 100%;
`;
