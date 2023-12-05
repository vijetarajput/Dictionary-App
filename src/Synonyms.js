import React from "react";

export default function Synonyms(props){
    if(props.synonyms.length)
    {
        return(
            <div className="Synonyms">
                <h6>Synonyms: </h6>
                {props.synonyms.map(function(synonym, index)
                {
                    return <li key={index}>{synonym}</li>
                })}
            </div>
        );
    }
    else
    {
        return null;
    }
}