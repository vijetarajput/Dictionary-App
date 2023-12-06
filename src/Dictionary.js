import React, { useState } from "react";
import "./Styles.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary()
{
    let [keyword, setKeyword]=useState("Hi");
    let [result,setResult]=useState("");
    let [loaded, setLoaded]=useState(false)

    function handelKeywordChange(event){
        setKeyword(event.target.value);
    }

    function handelResponse(response){
        console.log(response.data[0]);
        setResult(response.data[0]);
    }
    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handelResponse);
    }
    function onSubmitEvent(event)
    {
        event.preventDefault();
        search();
    }
    function load()
    {
        setLoaded(true);
        search();
    }

    if(loaded){      
    return(
    <div className="Dictionary">
        <h1>Dictionary</h1>
        
        <section >
            <form className="form" onSubmit={onSubmitEvent}>
                <div className="search">
                <input type="search" defaultValue={keyword} autoFocus={true} onChange={handelKeywordChange}/>
                <button type="submit" className="button">Submit</button>
                </div>
                </form>
            <div className="hint">Suggested words: sunset, wind, yoga, forest...</div>
        </section>
        <Results result={result}/>
            
    </div>);
    }
    else{
        load();
        return "Loading..."
    }
}