import React, { useState } from "react" 

const initInputs = { title: "", description: "", imgUrl: ""}

export default function TodoForm(){
  const [ inputs, setInputs ] = useState(initInputs)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]:value
    }))
  }
  return(
    <form>
      <input
        type="text"
        name=""
        value={}
        onChange={handleChange}
        placeholder="" />
      <input
        type="text"
        name=""
        value={}
        onChange={handleChange}
        placeholder="" />
      <input
        type="text"
        name=""
        value={}
        onChange={handleChange}
        placeholder="" />
      <button>Add Todo</button>
    </form>
  )
}