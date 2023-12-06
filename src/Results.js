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
                <section>
                <div className="Word"><h2>{props.result.word}</h2></div>
                    <h4>Phonetic:</h4>
                    {props.result.phonetics.map(function(phonetic,index)
                    {
                    return <div key={index}>
                        <Phonetics phonetic={phonetic}/>
                    </div>
                    })}
                </section>
                <section>
                    {props.result.meanings.map(function(meaning,index)
                    {
                        return <div key={index}>
                        <Meaning meaning={meaning}/>
                    </div>;
                    })}
                </section>
            </div>
        );
    }
    else{
        return null;
    }
}