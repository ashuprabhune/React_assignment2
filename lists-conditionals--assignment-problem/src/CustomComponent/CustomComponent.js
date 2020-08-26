import React from "react"

const CustomComponent = (props) => {
  return(
    <div>
      <input type='text' value={props.text}  onChange = {props.displayLength}/>
      <p> {props.length}</p>
    </div>
  )
}

export default CustomComponent
