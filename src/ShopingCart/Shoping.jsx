import React, { useState } from 'react';
import InputBox from './InputBox';
import ListItem from './ListItem';
function Shopping() {
  const [content, setContent] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInput = (e) => {
    setContent(e.target.value);
  }
  const handleAddItem = () => {
    const newItem = content;
    const newArr = [...tasks];
    newArr.push(newItem);
    setTasks(newArr);
    setContent("");
  }
  const handleDelete = (index) => {
    const filteredArr = tasks.filter((_, i) => i !== index);
    setTasks(filteredArr);
  }
  return (
    <div className='Shopping-list'>
      <InputBox
        handleInput={handleInput}
        handleAddItem={handleAddItem}
        content={content}
      />
      <h2>Shopping Cart</h2>
      <ListItem
        tasks={tasks}
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default Shopping;