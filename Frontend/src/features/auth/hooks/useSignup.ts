import { useMutation } from "@tanstack/react-query"
import { signup } from "../api"
import { useAuthStore } from "../store/authStore"
import { useNavigate } from "react-router-dom"
import { setAccessToken } from "../../../lib/token"

export const useSignup = () => {
    const login = useAuthStore((state) => state.login)
    const navigate = useNavigate()
    return (useMutation({
        mutationFn:signup,
        onError:(error) => {
            console.error(error)
        },
        onSuccess:(data) => {
            setAccessToken(data.accessToken)
            login(data.user)
            navigate("/dashboard")
        }
    }))
}