import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export class AssignUser extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="">
            <div className="p-col-12">
                <div className="card card-w-title">
                    <div className="p-col-12 p-md-4">
                        <h1>Assing User </h1>
                        <div className="p-grid">
                            <div className="p-col-12 p-md-6">
                                <label htmlFor="input"> First Name </label>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText id="input" />
                            </div>
                            <div className="p-col-12 p-md-6">
                                <label htmlFor="input"> Last Name </label>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText id="input" />
                            </div>
                            <div className="p-col-12 p-md-6">
                                <label htmlFor="input"> Email ID </label>
                            </div>
                            <div className="p-col-12 p-md-4">
                                <InputText id="input" />
                            </div>
                            <Button label="Submit" className="p-button-success" onClick={() => this.setState({ navigate: true })}   >
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default AssignUser;
