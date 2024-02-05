import React, {useState, useContext,useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/locationcontext";
import styled from "styled-components/native";

const SearchContainer = styled.View`
position: absolute;
z-index: 999;
alignItems: center;
top: 20px;

width: 100%;`;



export const Search = ()=>{
    const {keyword, search} =  useContext(LocationContext);
    const [ searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(()=>{
        setSearchKeyword(keyword);
    }, [keyword]);

    return(
        <SearchContainer>
        <Searchbar
            style={{
            maxHeight: 50, 
            width: '86%', 
            marginBottom: 0,
            borderRadius: 10,
            backgroundColor: "#fff",
            borderBottomColor: 'transparent',
            position: 'absolute',
            alignItems: 'center',
            zIndex: 999,
            }}
            mode="View"
            icon= "map"
            placeholder="Search for Location"
            value={searchKeyword}
            onSubmitEditing={()=>{
                
                search(searchKeyword);
            }}
            onChangeText={(text)=>{
                setSearchKeyword(text);
            }}
            />
        </SearchContainer>
    )
}
