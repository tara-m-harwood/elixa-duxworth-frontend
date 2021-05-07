// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    // pbGetReply takes in a message from the MessageParser and retrieves a reply from Pandorabots API

    pbGetReply(message) {

        const baseURL = "https://api.pandorabots.com/talk/unf6963c69/elixa?user_key=bc3d30376b455afd667908e211239116&input="
        const options = { method: 'POST'}

        fetch(`${baseURL}${message}`, options)
            .then(data => data.json())
            .then(data => {
                // console.log(data) 
                const responses = data.responses

                responses.forEach(response => {
                    
                    if(response.substr(0,7)==="<image>") {


                        const parser = new DOMParser()
                        const xmlImageDoc = parser.parseFromString(response, "application/xml")
                        const imageSource = xmlImageDoc.documentElement.textContent
                        console.log(imageSource)

                        this.setState((prevState) => ({
                            ...prevState,
                        imageSource: imageSource
                        }));

                        const pbImageReply = this.createChatBotMessage("pic", {widget: "imageReply"})
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