import React, { useState } from "react";
import "./Styles.css";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary()
{
    let [keyword, setKeyword]=useState("Hi");
    let [result,setResult]=useState("");
    let [loaded, setLoaded]=useState(false);
    let [photos, setPhotos]=useState(null);

    function handelKeywordChange(event){
        setKeyword(event.target.value);
    }

    function handelDictionaryResponse(response){
        if(response){
        console.log("Keyword Response:"+response.data[0]);
        setResult(response.data[0]);
        }
        else{
            alert("Enter meaningful keyword");
        }
    }
    function handelPexelsResponse(response){
        if(response){
        console.log("Photos Response:"+response.data.photos);
        setPhotos(response.data.photos);
        }
     
    }
    function search(){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handelDictionaryResponse);

        let pexelsApiKey = "GDYIxCacYzLBQ3YFU7illkNHQa5ufZkcrU1jOopX3BQTCga6ALOJTLP9";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
        axios.get(pexelsApiUrl,{headers:{Authorization:`${pexelsApiKey}`}}).then(handelPexelsResponse);
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
        <Photos photos={photos}/>
    </div>);
    }
    else{
        load();
        return "Loading..."
    }
}