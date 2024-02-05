import React, { useContext, useState } from "react";
import styled from 'styled-components/native';
import { Text, ActivityIndicator, Button} from "react-native";
// import { View } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { AuthenticationContext } from "../../../services/Authentication/Authentication.context";
import { AccountCover, BackgroundCover } from "../../../Components/account.cover";


const AuthContainer = styled.View`
top: 40%;
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

const RegisterButton = styled(Button)`
`;

export const RegisterScreen = () => {
  const [email, setEmail ] = useState(null);
  const [password, setPassword ] = useState(null);
  const [repeatedPassword, setRepeatedPassword ]= useState(null)
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  
    return(
      
        <>
        <SafeAreaView>
          <BackgroundCover>
            <AccountCover>
           <AuthContainer>
            <Spacer>
                <AuthInput
                  placeholder="Email"
                  textContentType="emailAddress"
                  onChangeText={email => setEmail(email)} 
                  value={email}
                  autoCapitalize="none"
                  inputMode="email"
                  keyboardType="email-address"
                  
                    />
                    </Spacer>
                  
                <Spacer>
                <AuthInput
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry        
                  autoCapitalize="none"
                  onChangeText={password=> setPassword(password)}
                  value={password}
                  />
                  </Spacer>

                  <Spacer>
                <AuthInput
                  placeholder="Repeat password" 
                  textContentType="password"
                  secureTextEntry       
                  autoCapitalize="none"
                  onChangeText={repeatedPassword=> setRepeatedPassword(repeatedPassword)}
                  value={repeatedPassword}
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
                    
                      <RegisterButton
                      title="Register"
                      onPress={() => onRegister(email, password, repeatedPassword)}/>
                    ): (<ActivityIndicator 
                      animating={true} 
                      color={"green"}
                      size={"small"}/>)
                  }
                  </Spacer>
                  
          </AuthContainer>
          </AccountCover>
          </BackgroundCover>
        </SafeAreaView>
        </>
    )
}
