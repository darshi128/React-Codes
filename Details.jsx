import React from 'react'
import { useState } from 'react'
import InputBox from './InputBox';
import ListItem from '../../../../vite-project/src/ShopingCart/ListItem';

function Details() {
    const [tasks, setTasks] = useState([]);
    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [address, setAddress] = useState("");

    
 
    const handleFname = (e) => {
        const firstN  = e.target.value;
        setFname(firstN);
    }
    const handleLname = (e) => {
        const lastN  = e.target.value;
        setLname(lastN);
    }
    const handleChange = (e) => {
      if (e.target.type === "radio") {
        setSelectedOption(e.target.value);
      } else {
        setAddress(e.target.value);
      }
       
    }
    const handleAddItem = () => {
      const newItem = {
        Fname: Fname,
        Lname: Lname,
        selectedOption: selectedOption,
        address: address
      };
      const newArr = [...tasks];  
      newArr.push(newItem);
      setTasks(newArr);
      setFname("");
      setLname("");
      setSelectedOption("");
      setAddress("");
    }
    
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Fname && Lname && selectedOption && address) {
            handleAddItem();
        } else {
            alert("Please fill all fields");
        }
    }
  return (
    <div className='det-list'>
         
      <InputBox
        Fname={Fname}
        Lname={Lname}
        selectedOption={selectedOption}
        address={address}
        handleSubmit={handleSubmit}
        handleFname={handleFname}
        handleLname={handleLname}
        handleChange={handleChange}
        handleAddItem={handleAddItem}
      />
     

      <h2>student's Detail</h2>
      <ListItem tasks={tasks}></ListItem>
    </div>
  )
}

export default Details;