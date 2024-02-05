import React, {useState, useContext, useEffect, } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/locationcontext";

export const Search = ()=>{
    const {keyword, search} =  useContext(LocationContext);
    const [ searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(()=>{
        setSearchKeyword(keyword);
    }, [keyword]);

    return(
        <Searchbar
            style={{
            maxHeight: 50, 
            width: '86%', 
            marginBottom: 0,
            borderRadius: 10,
            backgroundColor: "#fff",
            borderBottomColor: 'transparent',
            }}
            mode="View"
            placeholder="Search for Location"
            value={searchKeyword}
            onSubmitEditing={()=>{
                
                search(searchKeyword);
            }}
            onChangeText={(text)=>{
                setSearchKeyword(text);
            }}
            />

    )
}
