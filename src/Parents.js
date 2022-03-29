import React from 'react'
import Child from './Child';

 function Parents() {
    function getData()
    {
        alert("Hello world")
    }
  return (
    <div>
       <Child data={getData} />
    </div>
  )
}
export default Parents;