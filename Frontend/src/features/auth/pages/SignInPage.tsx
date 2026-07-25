import { Header } from "../../../components/Header"
import { Breaker } from "../components/Breaker"
import { Button } from "../components/Button"
import { InputWithLabel } from "../components/InputWithLabel"


export function SignInPage(){

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

          <InputWithLabel labelName="EMAIL ADDRESS" placeholder="you@example.com" name="email" type="email" />
          <InputWithLabel labelName="PASSWORD" placeholder=".........." name="password" type="password" />
          
          <Button name="Sign in to FinPiolet ->" frontImg="" />

          <div>Don't have an account? <span>Create one</span></div>

        </div>
      </div>
    </div>
  )
}