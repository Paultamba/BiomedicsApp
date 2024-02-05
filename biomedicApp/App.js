import { StatusBar } from 'expo-status-bar';

import React from 'react'; 

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { RestaurantsContextProvider } from './src/services/restaurants/restaurantscontext';
import { LocationContextProvider } from './src/services/location/locationcontext';
import{ Navigation} from './src/infrastructure/navigation/index.navigator';


import { AuthenticationContextProvider } from './src/services/Authentication/Authentication.context';



// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCdS8OYwn_TRh4CKThiQTg659mVsyFE4s8",
  authDomain: "biomedicsapp.firebaseapp.com",
  projectId: "biomedicsapp",
  storageBucket: "biomedicsapp.appspot.com",
  messagingSenderId: "930372833537",
  appId: "1:930372833537:web:55031dc1bb1ab2b27b0b00",
  measurementId: "G-WD7Y8PEC23"
};



// if(!firebase.app.length){
// }

initializeApp(firebaseConfig);


export default function App() {

  return (
    <AuthenticationContextProvider>
    <LocationContextProvider>
    <RestaurantsContextProvider>
    <Navigation />
    </RestaurantsContextProvider>  
    </LocationContextProvider>
    </AuthenticationContextProvider>

  );
    
}






























