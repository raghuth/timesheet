import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export class AdduserComponent extends Component {
    constructor() {
        super();
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        // load data from service
    }

    render() {
        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12">
                    <div className="card card-w-title">
                        <div className="p-col-12 ">
                            <h1>Add User</h1>
                            <div className="p-grid">
                                <div className="p-col-12 ">
                                    <label htmlFor="input"> First Name </label>
                                </div>
                                <div className="p-col-12 ">
                                    <InputText id="input" />
                                </div>
                                <div className="p-col-12 ">
                                    <label htmlFor="input"> Last Name </label>
                                </div>
                                <div className="p-col-12">
                                    <InputText id="input" />
                                </div>
                                <div className="p-col-12">
                                    <label htmlFor="input"> Email ID </label>
                                </div>
                                <div className="p-col-12 ">
                                    <InputText id="input" />
                                </div>
                                <Button label="Submit" className="p-button-success " onClick={() => this.setState({ navigate: true })}   >
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}