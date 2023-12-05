import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary()
{
    let [keyword, setKeyword]=useState("");

    function handelKeywordChange(event){
        setKeyword(event.target.value);
    }

    function handelResponse(response){
        console.log(response.data[0].meanings[0].definitions[0]);
        let value = response.data[0].meanings[0].definitions[0];
        alert(`Searching for ${value}`);
    }

    function onSearchEvent(event)
    {
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handelResponse);
    }
return(
    <div className="Dictionary">
        <form onSubmit={onSearchEvent}>
            <input type="search" autoFocus={true} onChange={handelKeywordChange}/>
        </form>
    </div>);
}