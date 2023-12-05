import React, { useState } from "react";
import "./Dictionary.css";
export default function Dictionary()
{
    let [keyword, setKeyword]=useState("");
    function handelKeywordChange(event){
        setKeyword(event.target.value);
    }
    function onSearchEvent(event)
    {
        alert(`Searching for ${keyword}`);
    }
return(
    <div className="Dictionary">
        <form onSubmit={onSearchEvent}>
            <input type="search" autoFocus={true} onChange={handelKeywordChange}/>
        </form>
    </div>);
}