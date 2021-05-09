// ActionProvider starter code

import { helpTest } from "./pbHelper"


class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleStartTroubleshooter = () => {
        const clientMessage = this.createClientMessage("I need help with my code")
        this.updateChatbotState(clientMessage)
        this.pbGetReply(clientMessage.message)
    }

    handleEndTroubleshooter = () => {
        const clientMessage = this.createClientMessage("Yes, that helped!")
        this.updateChatbotState(clientMessage)
        this.pbGetReply(clientMessage.message)
    }

    handleStartChatting = () => {
        const clientMessage = this.createClientMessage("I just want to chat")
        this.updateChatbotState(clientMessage)
        this.pbGetReply(clientMessage.message)
    }

    // pbGetReply takes in a message from the MessageParser and retrieves a reply from Pandorabots API

    pbGetReply(message) {

        console.log("pb test", helpTest())

        const baseURL = "https://api.pandorabots.com/talk/unf6963c69/elixa"
        const user_key = "bc3d30376b455afd667908e211239116"
        const session = 6796820
        const options = { method: "POST"}

        const pbURL = `${baseURL}?user_key=${user_key}&input=${message}&sessionid=${session}`

        fetch(pbURL, options)
            .then(data => data.json())
            .then(data => {
                const responses = data.responses

                console.log("pb", data.sessionid)

                responses.forEach(response => {
                    
                    if(response.substr(0,7)==="<image>") {

                        const parser = new DOMParser()
                        const xmlImageDoc = parser.parseFromString(response, "application/xml")
                        const imageSource = xmlImageDoc.documentElement.textContent

                        this.setState((prevState) => ({
                            ...prevState,
                            imageSource: imageSource
                        }));

                        const pbImageReply = this.createChatBotMessage("LOL!", {widget: "imageReply"})
                        this.updateChatbotState(pbImageReply);

                    } else {
                        const pbTextReply =this.createChatBotMessage(response);
                        this.updateChatbotState(pbTextReply);
                    }    
                    
                })

            })  
    }

    updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));

    }

}
export default ActionProvider;