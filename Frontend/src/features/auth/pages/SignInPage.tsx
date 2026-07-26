import { useState } from "react"
import { Header } from "../../../components/Header"
import { Breaker } from "../components/Breaker"
import { Button } from "../components/Button"
import { InputWithLabel } from "../components/InputWithLabel"
import { useSignIn } from "../hooks/useSignIn"



export function SignInPage(){
  
  const [inputData, setInputData] = useState({
    email:"",
    password:""
  })
  

  const signInMutation = useSignIn()

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setInputData((prevData) => ({
      ...prevData,
      [name]:value
    }))
    
  }
  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()

    signInMutation.mutate(inputData)
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="img-box">
          <img src="/images/signinImage.png" alt="" />
        </div>
        <div className="">
          <h1>Welcome back</h1>
          <p>Sign in to your FinPiolet dashboard</p>
          <Button backImg="" name="Try demo sign-in" />
          <Breaker name="Sign in with email"/>
          <Button backImg="" name="Continue with Google" />
          <Breaker name="Sign in with email" />

          <InputWithLabel labelName="EMAIL ADDRESS" placeholder="you@example.com" name="email" type="email" onChangeFn={handleInputChange}/>
          <InputWithLabel labelName="PASSWORD" placeholder=".........." name="password" type="password" onChangeFn={handleInputChange}/>
          
          <Button name={signInMutation.isPending?"Signing In...":"Sign in to FinPiolet ->" } frontImg="" onClickFn={handleSubmit} disable={signInMutation.isPending}/>

          <div>Don't have an account? <span>Create one</span></div>

        </div>
      </div>
    </div>
  )
}