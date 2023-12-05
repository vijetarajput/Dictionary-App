import React from "react";
import Meaning from "./Meaning";
import "./Styles.css";
import Phonetics from "./Phonetics";

export default function Results(props){
    console.log(props.result);
    if(props.result)
    {
        return(
            <div className="Results">
                <div className="Word"><h3>Word: </h3><h4>{props.result.word}</h4></div>
                    <h4>Phonetic:</h4>
                    {props.result.phonetics.map(function(phonetic,index)
                    {
                    return <div key={index}>
                        <Phonetics phonetic={phonetic}/>
                    </div>
                    })}
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