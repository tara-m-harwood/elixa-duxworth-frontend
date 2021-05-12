import React, { Component } from 'react'
import './ElixaSidebar.css'

export default class ElixaSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: true,
            modalInputName: "",
            modalInputPhone: "",
        };
    }

    getModalClass = () => {
        if(this.state.showModal){
            return "show-modal"
        } else {
            return "hide-modal"
        } 
    }

    modalOpen(e) {
        console.log("open sesame")
        this.setState({ showModal: true });
    }

    modalClose(e) {
        this.setState({ showModal: false });
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        this.setState({ name: this.state.modalInputName });
        this.setState({ name: this.state.modalInputPhone });
        console.log(this.state.modalInputName)
        console.log(this.state.modalInputPhone)
        this.modalClose();
    }

    testFunc(e){
        console.log("testing 1 2 3")
    }

    

    render() {
        return (
            <section id="left-sidebar">

                <div id="left-sidebar-elixa-container">
                    <img id="left-sidebar-elixa-icon" src="elixa_avatar.png" alt="friendly woman" />
                </div>

                <div id="left-sidebar-button-container">
                    <button id="left-sidebar-button-save" onClick={e => this.modalOpen(e)}>
                        save session
                    </button>
                    <button id="left-sidebar-button-retrieve">retrieve session</button>
                </div>

                <div id="#modal-content-container" className={this.getModalClass()}>
                    <form id="save-modal-form">
                        <button id="closeModalSave" onClick={e => this.modalClose(e)} type="button">X</button>
                        <label className="form-label">
                            Your first name:
                            <input
                                type="text"
                                name="modalInputName"
                                value={this.state.modalInputName}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <label className="form-label">
                            Your phone number
                            <input
                                type="text"
                                name="modalInputPhone"
                                value={this.state.modalInputPhone}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <div id="save-session-container">
                            <button id="save-session" className="form-control" onClick={e => this.handleSubmit(e)} type="button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </section>    
        )
    }
}