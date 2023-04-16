import './App.css';
import React,{useState} from 'react';
import InputBox from './compenents/InputBox';
import TodoList from './compenents/TodoList';
function App() {
  const [list, setList] = useState([])
  const addList = (inputBox)=>{
    if(inputBox!=='')
      setList([...list,inputBox])
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...list];
    newListTodo.splice(key,1)
    setList([...newListTodo])   
  }
  return (
    <>
      <div className = "main-container">
        <div className = 'center-container'>
         <InputBox addList={addList} />
         <hr/>
         {list.map((listItem,i) =>{
           return(
            <TodoList key={i} index={i} item = {listItem} deleteItem = {deleteListItem}/>
           )
         })}
        </div>
      </div>
    </>
  );
}

export default App;
