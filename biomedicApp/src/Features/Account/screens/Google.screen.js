import React, { useContext, useState } from "react";
import styled from 'styled-components/native';
import { Text, ActivityIndicator, Button} from "react-native";
// import { View } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { AuthenticationContext } from "../../../services/Authentication/Authentication.context";


const AuthContainer = styled.View`
top: 50%;
align-self: center;
height: 60%;

`;

const AuthInput = styled.TextInput`
background-color: white;
width: 300px;
top: 10PX;
padding: 10px;
`;
const Spacer = styled.View`
padding-top: 10px;
padding-bottom: 5px;
padding-left: 20px;
padding-right: 20px;
align-self: center;
`;

const LoginButton = styled(Button)`
`;

export const GoogleScreen = () => {
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const { onGoogleRegister, error, isLoading } = useContext(AuthenticationContext);
  
    return(
      
        <>
        <SafeAreaView>
           <AuthContainer>
            <Spacer>
                <AuthInput
                  placeholder="Email"
                  onChangeText={email => setEmail(email)} 
                  value={email}
                  autoCapitalize="none"
                    />
                    </Spacer>
                  
                <Spacer>
                <AuthInput
                  placeholder="Password"        
                  autoCapitalize="none"
                  onChangeText={password=> setPassword(password)}
                  value={password}
                  />
                  </Spacer>

                <Spacer>
                {error && (
                <Spacer><Text style={{
                  color: "red",
                }}>
                  Incorrect Password or Email
                  </Text>
                  </Spacer>
                  )}
                </Spacer>
                <Spacer>
                  {!isLoading ? (
                    
                      <LoginButton
                      title="Sign in"
                      onPress={() => onGoogleRegister(email, password)}/>
                    ): (<ActivityIndicator 
                      animating={true} 
                      color={"green"}
                      size={"large"}/>)
                  }
                  </Spacer>
                  
          </AuthContainer>
        </SafeAreaView>
        </>
    )
}
