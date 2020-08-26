import React from 'react'

const validationComponent = (props) =>{
  var message = null
  if(props.length > 15)
    message = "Too long"
  if(props.length < 5)
    message = "Too short"
  return(
    <p> {message} </p>
  )
}

export default validationComponent
