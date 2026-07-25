import { Header } from "../../../components/Header";
import { Button } from "../components/Button";
import { InputWithLabel } from "../components/InputWithLabel";

export function SignUpPage(){

    return (
        <div className="min-h-screen">
        <Header />
        <div className="flex flex1  w-full ">
            <div className="img-box">
                <img src="/images/signupImage.png" alt="finpiolet signup page image" />
            </div>
            <div className="">
                <div>
                    <div>Free 30-day trial . No credit card</div>
                    <div>
                        <h1>Create your account</h1>
                        <p>Already have an account? <span>Sign in</span></p>
                    </div>
                    <Button name="Continue with Google" img=""/>
                </div>
                <div className="flex">
                    <div className="line"></div>
                    <div>or with email</div>
                    <div className="line"></div>
                </div>
                <div className="flex-col">
                    <InputWithLabel name="name" placeholder="Sophie Laurent" labelName="Full name" type="text"/>
                    <InputWithLabel name="email" placeholder="sophie@example.com" labelName="Email address" type="email"/>
                    <InputWithLabel name="password" placeholder="Create a strong password" labelName="Password" type="text"/>
                    <div className="flex gap-1">
                        <input type="checkbox" name="" id="" />

                    </div>
                    <Button name="Create account" img=""/>
                </div>
            </div>
        </div>
        </div>
    )
}