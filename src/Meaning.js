import React from "react";
import "./Styles.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){
return (
    <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function(obj,index)
        {
            return(
            <div key={index}>
               <strong>Definition: </strong> <p>{obj.definition}</p>
                <br/><em>Example: {obj.example}</em>
                <br/><Synonyms synonyms={obj.synonyms}/>
            </div>
            );
        })}
    </div>
);
}