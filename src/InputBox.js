import React from 'react';
import './App.css';

const InputBox = ({val,onchange,atKeyPress}) =>{
    return (
        <input id="userinput" 
        type="text" 
        value={val} 
        onChange={onchange} 
        onKeyDown={atKeyPress} 
        placeholder="Task to be done.."/>
    )
}

export default InputBox;