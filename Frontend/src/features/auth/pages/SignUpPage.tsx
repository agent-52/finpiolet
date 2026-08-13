import { useState } from "react";
import { Header } from "../../../components/common/Header";
import { Breaker } from "../components/Breaker";
import { Button } from "../components/Button";
import { InputWithLabel } from "../components/InputWithLabel";
import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";
import { ArrowRight } from "lucide-react";

export function SignUpPage() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const signupMutation = useSignup();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signupMutation.mutate(inputData);
  };
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex1  w-full ">
        <div className="img-box">
          <img
            src="/images/signupImage.png"
            alt="finpiolet signup page image"
          />
        </div>
        <div className="">
          <div>
            <div>Free 30-day trial . No credit card</div>
            <div>
              <h1>Create your account</h1>
              <p>
                Already have an account? <span>Sign in</span>
              </p>
            </div>
            <Button
              name="Continue with Google"
              backImg={<FcGoogle />}
              className="btn-primary"
            />
          </div>
          <Breaker name="" />
          <div className="flex-col">
            <InputWithLabel
              name="name"
              placeholder="Sophie Laurent"
              labelName="Full name"
              type="text"
              onChangeFn={handleInputChange}
            />
            <InputWithLabel
              name="email"
              placeholder="sophie@example.com"
              labelName="Email address"
              type="email"
              onChangeFn={handleInputChange}
            />
            <InputWithLabel
              name="password"
              placeholder="Create a strong password"
              labelName="Password"
              type="text"
              onChangeFn={handleInputChange}
            />
            <div className="flex gap-1">
              <input type="checkbox" name="" id="" />
            </div>
            <Button
              name="Create account"
              frontImg={<ArrowRight size={14} />}
              className="btn-primary"
              onClickFn={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
