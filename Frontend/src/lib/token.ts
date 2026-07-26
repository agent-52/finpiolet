
function setAccessToken( token:string){
    localStorage.setItem("accessToken", token)
}

function getAccessToken(){
    const token = localStorage.getItem('accessToken')
    return token;
}

function clearAccessToken(){

}

export {
    getAccessToken,
    setAccessToken,
    clearAccessToken
}