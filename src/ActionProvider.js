// ActionProvider starter code

import pbBuildURL from "./pandorabotsHelper"
import { pbSetSession, pbContainsImage, pbSetImageSource, pbSetClient, pbSaveClient } from "./pandorabotsHelper"

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

    pbGetReply(message) {
        const fetchOptions = { method: "POST"}

        console.log(pbBuildURL(message))

        fetch(pbBuildURL(message),fetchOptions)
            .then(data => data.json())
            .then(data => {
                console.log(data)

                pbSetSession(data.sessionid)
                pbSetClient(data.client_name)

                data.responses.forEach(response => {
                    
                    if(pbContainsImage(response)) {

                        this.setState((prevState) => ({
                            ...prevState,
                            imageSource: pbSetImageSource(response)
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