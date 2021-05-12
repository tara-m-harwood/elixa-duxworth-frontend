import React, { Component } from 'react'
import { pbSaveClient, testIt } from '../../pandorabotsHelper'
import './ModalForm.css'


export default class ModalForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalInputName: "",
            modalInputPhone: "",
        };
    }

    getModalClass = () => {
        if(this.props.showModal){
            return "show-modal"
        } else {
            return "hide-modal"
        } 
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
        testIt(this.state.modalInputName, this.state.modalInputPhone)
        pbSaveClient(this.state.modalInputName, this.state.modalInputPhone)
        this.modalClose();
    }

    testFunc(e){
        console.log("testing 1 2 3")
    }

    

    render() {
        return (
                <div id="#modal-content-container" className={this.getModalClass()}>
                    <form id="save-modal-form">
                        <button id="closeModalSave" onClick={this.props.modalClose()} type="button">X</button>
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
        )
    }
}