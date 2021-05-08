// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {

        message = message.toLowerCase()

        if(message==="i want my code to work"){
            message += ". i need help with my code."
        } else if(message==="i need help with my code") {
            message = "start helping. i need help with my code"
        }
        console.log("message:", message)
        this.actionProvider.pbGetReply(message)
    }


}

export default MessageParser;