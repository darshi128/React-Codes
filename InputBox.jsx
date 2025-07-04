import React from 'react'

function InputBox({Fname, Lname, selectedOption, address, handleFname, handleLname, handleChange ,  handleSubmit}) {
  return (

     <>
         <form onSubmit={handleSubmit}>
   <label>First Name : <input type="text" value={Fname} onChange={handleFname} /> </label>
        <label>Last Name : <input type="text" value={Lname} onChange={handleLname}/> </label>
        <br/>
        <label>
            Gender : 
        <input
          type="radio"
          value="Male"
          checked={selectedOption === 'Male'}
          onChange={handleChange}
        />
        Male
      </label>

       <label>
        <input
          type="radio"
          value="Female"
          checked={selectedOption === 'Female'}
          onChange={handleChange}
        />
        Female
      </label>
        <br/>
       <label>
        Enter your address:
        <br />
        <textarea
          value={address}
          onChange={handleChange}
          rows="4"
          cols="50"
          placeholder="Enter your full address"
        />
        <br/> 
      </label>
       <button type='submit' >Submit</button>
      </form>
     </>
  )
}

export default InputBox