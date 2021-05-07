// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        this.actionProvider.pbGetReply(message)
    }


}

export default MessageParser;