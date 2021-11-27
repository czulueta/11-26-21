import React,{ useState, useContext } from "react" 
import AuthForm from "./AuthForm.js"
import { UserContext } from "./context/UserProvider.js"

const initInputs = { username: "", password: ""}

export default function Auth(){
  const [ inputs, setInputs ] = useState(initInputs)
  const [ toggle, setToggle ] = useState(false)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({ 
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSignup(e){
    e.preventDefault()
    // signup function from context
  }
  function handlLogin(e){
    e.preventDefault()
    //login function from context
  }
  function toggleForm(){
    setToggle(prev => !prev)
    //resetAuthErr from context
  }


  return(
    <div>
      {!toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Signup"
            errMsg={errMsg} />
          <p onClick={toggleForm}>Already a member?</p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg} />
          <p onClick={toggleForm}>Not a member?</p>
        </>
      }
    </div>
  )
}