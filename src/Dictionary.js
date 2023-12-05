import React, { useState } from "react";
import "./Styles.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary()
{
    let [keyword, setKeyword]=useState("");
    let [result,setResult]=useState("");
    function handelKeywordChange(event){
        setKeyword(event.target.value);
    }

    function handelResponse(response){
        setResult(response.data[0]);
    }

    function onSearchEvent(event)
    {
        event.preventDefault();
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handelResponse);
    }
return(
    <div className="Dictionary">
        <h1>Dictionary</h1>
        <form className="form" onSubmit={onSearchEvent}>
            <div className="search">
            <input type="search" autoFocus={true} onChange={handelKeywordChange}/>
            <button type="submit" className="button">Submit</button>
            </div>
            <Results result={result}/>
        </form>
        
    </div>);
}