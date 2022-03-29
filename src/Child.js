import React from 'react'

 function Child(props) {
  return (
    <div>
        <h1>Hi Doodleblue</h1>
        <button onClick={props.data}> click me</button>
    </div>
  )
}
export default Child;