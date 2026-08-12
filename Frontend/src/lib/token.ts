
function setAccessToken( token:string){
    localStorage.setItem("accessToken", token)
}

function getAccessToken(){
    const token = localStorage.getItem('accessToken')
    console.log("token:- ", token)
    return token;
}

function clearAccessToken(){
    localStorage.removeItem("accessToken")
}

export {
    getAccessToken,
    setAccessToken,
    clearAccessToken
}