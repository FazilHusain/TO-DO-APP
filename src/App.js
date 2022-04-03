import { useState } from "react";
import "./index.css";



function App() {

  const [inputList,setInputList] = useState("");
  const [items,setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  
  const listOfItems = () => {
    if(!inputList){

    }else{
    setItems([...items,inputList]);
    setInputList("");
  }
  };

  const deleteItems = (id) =>{
     const updateddata = items.filter((elem,index)=>{
      return index !== id;
     }); 
     setItems(updateddata);
  }

  return (
    <>
    <div className="main_div">
      <div className="center_div">
       <br/>
       <h1>ToDo List</h1>
       <br/>
       <input type="text" placeholder="Add Items.."
        onChange={itemEvent} 
        value = {inputList}
        />
       <button onClick={listOfItems}>+</button>
            
       <ol>
          {items.map((elem,index)=>{
            return (
              <div className='todo_style' key={index}>
              <button className='btn' onClick={() => deleteItems(index) }>X</button>
             <li>{elem}</li>
             </div>
            )
          })}
       </ol>
      </div>
      </div>
    </>
  );
}

export default App;
