// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    elixa(message) {
    
        const baseURL = "https://api.pandorabots.com/talk/unf6963c69/elixa?user_key=bc3d30376b455afd667908e211239116&input="

        fetch(`${baseURL}${message}`, {
                    method: 'POST'
                }
            )
            .then(data => data.json())
            .then(data => {
                const responses = data.responses
                responses.forEach(response => {
                    const elixaReply =this.createChatBotMessage(response);
                    this.updateChatbotState(elixaReply)
                })

            })  
    }

    updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    }

}
export default ActionProvider;