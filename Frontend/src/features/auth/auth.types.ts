interface SigninResponse{

}

interface SignupRespone{

}

interface User{
    id:string;
    fullName:string;
    email:string;
    provider: "LOCAL"  | "GOOGLE";
}