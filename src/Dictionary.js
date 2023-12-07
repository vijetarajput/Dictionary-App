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

    function handelDictionaryResponse(response){
        console.log(response.data[0]);
        setResult(response.data[0]);
    }
    function handelPexelsResponse(response){
        console.log(response);
    }
    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handelDictionaryResponse);

        let pexelsApiKey = "GDYIxCacYzLBQ3YFU7illkNHQa5ufZkcrU1jOopX3BQTCga6ALOJTLP9";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}`;
        axios.get(pexelsApiUrl,{headers:{"Authorisation":`Bearer ${pexelsApiKey}`}}).then(handelPexelsResponse);
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
                <h4>What word do ypu want to look up?</h4>
                <input type="search" defaultValue={keyword} autoFocus={true} onChange={handelKeywordChange}/>
                <button type="submit" className="button">Submit</button>
                <div className="hint">Suggested words: sunset, wind, yoga, forest...</div>
                
                </form>
            
        </section>
        <Results result={result}/>
            
    </div>);
    }
    else{
        load();
        return "Loading..."
    }
}