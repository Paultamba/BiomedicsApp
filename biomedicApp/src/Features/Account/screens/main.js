import React from "react";
import styled from 'styled-components/native';
import { Button, Title } from 'react-native-paper';
import { AccountCover, BackgroundCover } from "../../../Components/account.cover";

const Spacer = styled.View`
top: 2px;
padding: 20px;

`;
const AuthButton = styled(Button)`
width: 300px;
align-self: center;
border-radius: 5px;
padding: 5px;

`;

export const MainNavigator = ({navigation}) => {
    return (
        <>
        <BackgroundCover>
        <AccountCover>
        <Title style={{
            color: 'white',
            marginTop: 300,
            alignSelf: 'center'}}>BiomedicsApp</Title>
        
        <Spacer>
            <AuthButton
            icon="lock-open" 
            title="Login"
            mode="contained"
            bottonColor= "purple"
            onPress={()=>navigation.navigate("Login")}
            >
                Login
            </AuthButton>
        </Spacer>
        
        <AuthButton
            icon="account"
            title="Login"
            mode="contained"
            bottonColor= "purple"
            onPress={()=>navigation.navigate("Register")}
            >
                Register
        </AuthButton>

        <Spacer>
         <AuthButton
            icon="google"
            title="googleLogin"
            mode="contained"
            bottonColor= "purple"
            onPress={()=>navigation.navigate("Google")}
            >
                Continue with Google
          </AuthButton>
        </Spacer>
                
    
    </AccountCover>
    </BackgroundCover>
    </>
    )
}