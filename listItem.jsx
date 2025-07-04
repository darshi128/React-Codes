import React from 'react'

function listItem(tasks) {
  return (
   <ul className='list'>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item.Fname} {item.Lname} - {item.selectedOption} - {item.address}</span>
            
          </li>
        ))}
      </ul>
  )
}

export default listItem