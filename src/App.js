import React, {useState,useEffect} from 'react';
import Add from './Add';
import InputBox from './InputBox';
import './App.css';

const App = () => {

  const [input, setInput] = useState('');
  const [database, setDatabase] = useState([]);

  // const changeState = (event) =>{
  //   setInput(event.target.value);    
  // }

  // function todos(){
  //   setDatabase(oldDatabase=>{
  //     return [...oldDatabase,input]
  //   });
  // }

  useEffect(()=>{
    //console.log(input);
  },[input]);

  function updateDatabase(){     
    let value = input;
    let xx = database.toString();
    let duplicate = xx.toLowerCase().includes(value.toLowerCase());
    if (database.length > 0 && duplicate === true){
        alert('No duplicate entry......');
        return;
    }
    else if(database.length > 0 && duplicate === false){
      setDatabase(oldDatabase=>{
        return [...oldDatabase,input]
      });  
    }
    else{
      setDatabase(oldDatabase=>{
        return [...oldDatabase,input]
      }); 
    }
  }

  function addListAfterClick(){    
    if (input.length > 0){
        updateDatabase();
        createListElement();
        setInput('');                 
    }       
    else {
        alert("Please Enter a Task");        
    }    
  }

  function createListElement(){    
    return(  
      <ul>
        {database.map((val,index) => {
          return(
            <li key={val}>
              <div className="task" >       
                <span id="taskname">
                  {val}
                </span>
                <button className="delete" id={index} onClick={removeElement}>Done</button>
              </div>                  
            </li> 
          )      
        })}
      </ul>
    )     
  }

  function addListAfterKeypress(event){    
    if (input.length > 0 && event.keyCode === 13){
        updateDatabase();
        createListElement();
        setInput('');             
    } 
  }

  function removeElement(event){    
    var id = event.target.getAttribute('id');
    //remove array content
    database.splice(id, 1);
    event.target.parentNode.remove();
  }

  return (
    <div className="container">
      <div id="newtask">
        <InputBox val={input} onchange={e=>{setInput(e.target.value)}} atKeyPress={addListAfterKeypress}/>
        <Add atClick={addListAfterClick} />        
        {createListElement()}                                                             
      </div>
    </div>
  )

}

export default App;