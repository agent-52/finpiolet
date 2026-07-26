import { useMutation } from "@tanstack/react-query";
import { signin } from "../api";
import { useAuthStore } from "../store/authStore";
import { setAccessToken } from "../../../lib/token";
import { useNavigate } from "react-router-dom";



export function useSignIn (){
    const navigate = useNavigate()
    const login = useAuthStore(
        (state) => state.login
    )
    return useMutation({
        mutationFn: signin,

        onSuccess: (data) =>{
            setAccessToken(data.accessToken)
            login(data.user)
            navigate("/dashboard")

        },

        onError:(error) => {
            //
            console.error(error)
        }
    })
}