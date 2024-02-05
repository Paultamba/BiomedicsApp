import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthenticationContext } from "../../../services/Authentication/Authentication.context";

export const SettingsScreen = () =>{
    const{ onLogOut} = useContext(AuthenticationContext);
    return(
        <SafeAreaView>
            <View style={{
                alignSelf: 'center',
                paddingTop: 50,
            }}>
                <Button
                style={{
                    backgroundColor: 'blue',
                    width: 200,
                    color: 'white',
                }}
                title="LogOut" 
                onPress={()=> onLogOut()}>
                    LogOut
                    </Button>
                    


                
            </View>
        </SafeAreaView>
        
    )
}