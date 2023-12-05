import React from "react";
import Meaning from "./Meaning";
import "./Styles.css";

export default function Results(props){
    console.log(props.result);
    if(props.result)
    {
        return(
            <div className="Results">
            <h2>Word: </h2><h3>{props.result.word}</h3>
            {props.result.meanings.map(function(meaning,index)
            {
                return <div key={index}>
                    <Meaning meaning={meaning}/>
                </div>;
            })}
            </div>
        );
    }
    else{
        return null;
    }
}