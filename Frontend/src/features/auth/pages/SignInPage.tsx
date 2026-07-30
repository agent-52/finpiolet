import { useState } from "react"
import { Header } from "../../../components/common/Header"
import { Breaker } from "../components/Breaker"
import { Button } from "../components/Button"
import { InputWithLabel } from "../components/InputWithLabel"
import { useSignIn } from "../hooks/useSignIn"

import "../../../index.css"
import "../../../styles/auth.css"
import { LucideMoveRight, Zap } from "lucide-react"
import {FcGoogle} from "react-icons/fc"


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
        <div className="img-box w-full">
          <img src="/images/signinImage.png" alt="" />
        </div>
        <div className="flex-col items-center justify-center px-4 gap-6 w-full bgW1">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-gray-500 ">Sign in to your FinPiolet dashboard</p>
          <Button backImg={<Zap size={14} color="#16a34a" strokeWidth={2.5}/>} name="Try demo sign-in" className="bgLg1 font-semibold  cLg2 borderT2 btn-primary"/>
          <Breaker name="OR"/>
          <Button backImg={<FcGoogle size={24}/>} name="Continue with Google"  className="btn-primary bgW borderT1"/>
          <Breaker name="Sign in with email" />

          <InputWithLabel labelName="EMAIL ADDRESS" placeholder="you@example.com" name="email" type="email" onChangeFn={handleInputChange}/>
          <InputWithLabel labelName="PASSWORD" placeholder=".........." name="password" type="password" onChangeFn={handleInputChange}/>
          
          <Button name={signInMutation.isPending?"Signing In...":"Sign in to FinPiolet   " } frontImg={<LucideMoveRight size={16}strokeWidth={2.5}/>} onClickFn={handleSubmit} disable={signInMutation.isPending} className="btn-primary bgG1 cW1" />

          <div>Don't have an account? <span className="cLg2 font-semibold">Create one</span></div>

        </div>
      </div>
    </div>
  )
}