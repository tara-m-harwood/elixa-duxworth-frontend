import React, { Component } from 'react'
import './SaveModal.css'

export default class SaveModal extends Component {
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

    modalOpen() {
        this.setState({ showModal: true });
    }

    modalClose() {
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

    

    render() {
        return (
            <div id="#modal-content-container" className={this.getModalClass()}>
                <form id="save-modal-form">
                    <label>Your first name</label>
                    <input
                        type="text"
                        name="modalInputName"
                        value={this.state.modalInputName}
                        onChange={e => this.handleChange(e)}
                        className="form-control"
                    />
                    <label>Phone number</label>
                    <input
                        type="text"
                        name="modalInputPhone"
                        value={this.state.modalInputPhone}
                        onChange={e => this.handleChange(e)}
                        className="form-control"
                    />
                </form>
                <div className="form-group">
                    <button onClick={e => this.handleSubmit(e)} type="button">
                        Save
                    </button>
                </div>
            </div>
        )
    }
}