// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {

        if(message==="I want my code to work"){
            message += ". what is your name"
        }
        console.log("message:", message)
        this.actionProvider.pbGetReply(message)
    }


}

export default MessageParser;