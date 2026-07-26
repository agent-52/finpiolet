
export type UserDetails = {
        name: string;
        email: string;
        password: string | null;
        provider: any
        providerId: string | null;
        avatarUrl: string | null;
        createdAt: Date;
        udatedAt: Date;
        id: number;
    };
interface SignupRespone{
    success:boolean;
    user:UserDetails
    accessToken:string;
}

interface SigninResponse{
    success:boolean;
    user:UserDetails;
    accessToken:string
}

interface User{
    id:string;
    name:string;
    email:string;
    
}
interface CurrentUserResponse{
    success:boolean;
    user:User
}

interface LogoutResponse{
    success:boolean;
    message:string;
}

interface RefreshResponse{
    accessToken:string
}

export type { SigninResponse, SignupRespone, User, CurrentUserResponse, LogoutResponse,RefreshResponse}