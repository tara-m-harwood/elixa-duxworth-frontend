import React, { Component } from 'react'
import './ElixaSidebar.css'
import { pbSaveClient, pbRetrieveClient } from '../../pandorabotsHelper'

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

    modalRetrieveOpen() {
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

    handleSaveSubmit(e) {
        this.setState({ name: this.state.modalSaveInputName });
        this.setState({ name: this.state.modalSaveInputPhone });
        pbSaveClient(this.state.modalSaveInputName, this.state.modalSaveInputPhone)
        this.modalSaveClose();
    }

    handleRetrieveSubmit(e) {
        this.setState({ name: this.state.modalRetrieveInputName });
        this.setState({ name: this.state.modalRetrieveInputPhone });
        pbRetrieveClient(this.state.modalRetrieveInputName, this.state.modalRetrieveInputPhone)
        this.modalRetrieveClose();
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

                {/* <div id="tagline">
                    <h1>Elixa Duxworth</h1>
                    <h4>a friendly troubleshooting partner </h4>
                    <h4>who is always available to listen</h4>
                </div> */}

                <div id="left-sidebar-button-container">

                    <button id="left-sidebar-button-save" onClick={e => this.modalSaveOpen()}>
                        save session
                    </button>
                    <button id="left-sidebar-button-retrieve" onClick={e => this.modalRetrieveOpen()}>
                        retrieve session
                    </button>
                </div>

                {/* SAVE MODAL */}
                <div id="#modal-save-container" className={this.getModalSaveClass()}>
                    <form className="modal-form">
                        <button className="closeModal" onClick={e => this.modalSaveClose()} type="button">X</button>
                        <label className="form-label">
                            Your first name:
                            <input
                                type="text"
                                name="modalSaveInputName"
                                value={this.state.modalSaveInputName}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <label className="form-label">
                            Your phone number
                            <input
                                type="text"
                                name="modalSaveInputPhone"
                                value={this.state.modalSaveInputPhone}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <div id="save-session-container">
                            <button id="save-session" className="form-control" 
                                    onClick={e => this.handleSaveSubmit(e)} type="button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>

                {/* RETRIEVE MODAL */}
                <div id="#modal-retrieve-container" className={this.getModalRetrieveClass()}>
                    <form className="modal-form">
                        <button className="closeModal" onClick={e => this.modalRetrieveClose(e)} type="button">X</button>
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
                                name="modalRetrieveInputPhone"
                                value={this.state.modalRetrieveInputPhone}
                                onChange={e => this.handleChange(e)}
                                className="form-control"
                            />
                        </label>
                        <div id="retrieve-session-container">
                            <button id="retrieve-session" className="form-control" 
                                    onClick={e => this.handleRetrieveSubmit(e)} type="button">
                                Retrieve
                            </button>
                        </div>
                    </form>
                </div>
            </section>    
        )
    }
}