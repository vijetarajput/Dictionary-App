import React from "react";

export default function Meaning(props){
return (
    <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function(definition,index)
        {
            return(
            <div key={index}>
                <p>Definition[{index+1}]: {definition.definition}</p>
            </div>);
        })}
        <p>{props.meaning.definitions[0].definition}</p>;
        <p>{props.meaning.definitions[0].example}</p>;
    </div>
);
}