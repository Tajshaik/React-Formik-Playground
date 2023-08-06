import React from 'react'

//New component to show the error message in red color.
const Errormessage = (props) => {
  return (
    <div className='error'>
        {props.children}</div>
  )
}

export default Errormessage