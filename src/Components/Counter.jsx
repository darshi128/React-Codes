import React from 'react';
function Counter(props){
  const[value,setValue]=React.useState(props.initialValue);
  const handleIncrement=()=>{
    if(value==10){
        return
    }
    setValue(value+1);
  }
  const handleDecerement=()=>{
    if(value==0){
        return
    }
    setValue(value-1);
  }
    return(
        <div>
            <div>{value}</div>
            <button onClick={handleIncrement}>+ plus</button>
            <button onClick={handleDecerement}>- minus</button>
        </div>
    )
  }

export default Counter;