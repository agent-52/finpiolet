import { useEffect } from "react"
import { useCurrentUser } from "./features/auth/hooks/useCurrentUser"


const login = useAuthStore((state) => state.login)
const logout = useAuthStore((state) => state.logout)

function App() {
  
  const {data, isLoading, isError, isSuccess} = useCurrentUser()
  console.log(data)

  useEffect(() =>{
    if(isSuccess){
      login(data.user)
    }
  }, [isSuccess, data, login])

  useEffect(() =>{
    if(isError){
      logout();
    }
  }, [isError, logout])

  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900">
          FinPilot
        </h1>

        <p className="mt-2 text-gray-500">
          Tailwind is working successfully.
        </p>
      </div>
    </div>
    </>
  )
}

export default App
