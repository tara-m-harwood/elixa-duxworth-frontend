import React, { Component } from 'react'
import './ElixaSidebar.css'
import { pbSaveClient, testIt } from '../../pandorabotsHelper'

export default class ElixaSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModalSave: false,
            showModalRetrieve: false,            
            modalSaveInputName: "",
            modalSaveInputPhone: "",
            modalRetrieveInputName: "",
            modalRetrieveInputPhone: "",
        };
    }

    getModalSaveClass = () => {
        if(this.state.showModalSave){
            return "show-modal"
        } else {
            return "hide-modal"
        } 
    }

    getModalRetrieveClass = () => {
        if(this.state.showModalRetrieve){
            return "show-modal"
        } else {
            return "hide-modal"
        } 
    }

    modalSaveOpen() {
        console.log("open sesame save")
        this.setState({ showModalSave: true });
    }

    modalSaveRetrieve() {
        console.log("open sesame retrieve")
        this.setState({ showModalRetrieve: true });
    }

    modalSaveClose() {
        this.setState({ showModalSave: false });
    }

    modalRetrieveClose() {
        this.setState({ showModalRetrieve: false });
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
        this.setState({ name: this.state.modalSaveInputName });
        this.setState({ name: this.state.modalSaveInputPhone });
        console.log(this.state.modalSaveInputName)
        console.log(this.state.modalSaveInputPhone)
        testIt(this.state.modalSaveInputName, this.state.modalSaveInputPhone)
        pbSaveClient(this.state.modalSaveInputName, this.state.modalSaveInputPhone)
        this.modalSaveClose();
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
                    <button id="left-sidebar-button-save" onClick={e => this.modalSaveOpen()}>
                        save session
                    </button>
                    <button id="left-sidebar-button-retrieve">retrieve session</button>
                </div>

                {/* SAVE MODAL */}
                <div id="#modal-save-container" className={this.getModalSaveClass()}>
                    <form id="save-modal-form">
                        <button id="closeModalSave" onClick={e => this.modalSaveClose()} type="button">X</button>
                        <label className="form-label">
                            Your first name:
                            <input
                                type="text"
                                name="modalSaveInputName"
                                value={this.state.modalInputName}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <label className="form-label">
                            Your phone number
                            <input
                                type="text"
                                name="modalSaveInputPhone"
                                value={this.state.modalInputPhone}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <div id="save-session-container">
                            <button id="save-session" className="form-control" 
                                    onClick={e => this.handleSubmit(e)} type="button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>

                {/* RETRIEVE MODAL */}
                <div id="#modal-retrieve-container" className={this.getModalRetrieveClass()}>
                    <form id="retrieve-modal-form">
                        <button id="closeModalRetrieve" onClick={e => this.modalRetrieveClose(e)} type="button">X</button>
                        <label className="form-label">
                            Your first name:
                            <input
                                type="text"
                                name="modalRetrieveInputName"
                                value={this.state.modalRetrieveInputName}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <label className="form-label">
                            Your phone number
                            <input
                                type="text"
                                name="modalInputRetrievePhone"
                                value={this.state.modalRetrieveInputPhone}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <div id="retrieve-session-container">
                            <button id="retrieve-session" className="form-control" onClick={e => this.handleSubmit(e)} type="button">
                                Retrieve
                            </button>
                        </div>
                    </form>
                </div>
            </section>    
        )
    }
}