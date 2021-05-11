const user_key = process.env.REACT_APP_PB_USER_KEY; 
const app_id = process.env.REACT_APP_PB_APP_ID;
const botname = process.env.REACT_APP_PB_BOTNAME;
const api_root = "https://api.pandorabots.com";
const extra = true;
var currentSession = "";
var currentClient = "";

export default function pbBuildURL(message){

    const api_type = (currentClient==="") ? "atalk" : "talk";

    const baseURL = `${api_root}/${api_type}/${app_id}/${botname}?user_key=${user_key}&input=${message}`

    const params = `&sessionid=${currentSession}&client_name=${currentClient}&extra=${extra}`

    return (api_type==="atalk") ? baseURL : `${baseURL}${params}`
}

export function pbSetSession(pbSession){
    if(currentSession===""){
        currentSession=pbSession
    }
}

export function pbSetClient(pbClient){
    if(currentClient===""){
        currentClient=pbClient
    }
}

export function pbContainsImage(response){
    return response.substr(0,7)==="<image>" ? true :false;
}

export function pbSetImageSource(response){
        const parser = new DOMParser()
        const xmlImageDoc = parser.parseFromString(response, "application/xml")
        const imageSource = xmlImageDoc.documentElement.textContent
        return imageSource
}

export function pbSaveClient(client){
    const baseURL = "http://localhost:3000/users"
    const fetchOptions = { "method": "POST",
                            "headers": {
                                "Content-Type": "application/json"
                            },
                            "body": JSON.stringify({
                                "name": "Basil",
                                "client_name": "dummy client"
                            })
                        }
    fetch(baseURL, fetchOptions)
        .then(response => response.json())
        .then(console.log)
}

export function testIt(username, phone){
        console.log(username, phone)
    }
