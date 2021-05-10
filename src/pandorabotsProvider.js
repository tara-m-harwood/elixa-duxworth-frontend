const user_key = process.env.REACT_APP_PB_USER_KEY; 
const baseURL = "https://api.pandorabots.com/talk/unf6963c69/elixa"
const extra = true;
var currentSession = ""

export function pbSetSession(pbSession){
    if(currentSession===""){
        currentSession=pbSession
    }
    console.log("currentSession", currentSession)
} 

export default function pbBuildURL(message){
    return `${baseURL}?user_key=${user_key}&input=${message}&sessionid=${currentSession}&extra=${extra}`
}