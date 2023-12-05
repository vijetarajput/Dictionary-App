import React from "react";
import "./Styles.css";

export default function Phonetics(props)
{
    if(props.phonetic)
    {
        return(<div>
            <li><a href={props.phonetic.audio} target="_blank">🔊</a>
            {props.phonetic.text}</li>
        </div>);
    }
    else
    {
        return null;
    }
}