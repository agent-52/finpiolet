
function setAccessToken( token:string){
    localStorage.setItem("accessToken", token)
}

function getAccessToken(){
    const token = localStorage.getItem('accessToken')
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