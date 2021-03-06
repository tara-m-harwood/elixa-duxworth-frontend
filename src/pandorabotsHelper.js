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

export function pbSaveClient(username, phone){
    const baseURL = "http://localhost:9000/usersCollection"
    const fetchOptions = {  method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "user_name": username,
                                "phone_number": phone,
                                "client_name": currentClient,
                            })
                        }
    fetch(baseURL, fetchOptions)
        .then(response => response.json())
        .then(console.log)
}

export function pbRetrieveClient(username, phone){
    console.log("get it")
    const baseURL = "http://localhost:9000/usersCollection"
    const fetchOptions = { headers: {"Content-Type": "application/json"}, }
    fetch(baseURL, fetchOptions)
        .then(response => response.json())
        .then(users => users.forEach(user => {
            if(user.user_name===username){
                var foundClient=user.client_name
                currentClient=foundClient
            }
            console.log(currentClient)
        }))   
}



export function testIt(username, phone){
        console.log(username, phone)
    }
