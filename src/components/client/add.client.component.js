import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export class AddClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        return ( 
            <div className="addclientcomponent">      
                  <div className="p-grid p-fluid">              
                <div className="p-col-12">               
                    <div className="card card-w-title">
                        <div className="p-col-12 ">
                            <h1> Add Client</h1>
                            <div className="p-grid">
                                <div className="p-col-12">
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
                                <div className="p-col-12">
                                    <InputText id="input" />
                                </div>
                                <div className="submit-button" >
                                <Button label="Submit" className="p-button-success " onClick={() => this.setState({ navigate: true })} ></Button>      
                                <Button label="Cancel" className="p-button-danger" />                                                       
                                </div>                                                             
                            </div>                              
                        </div>
                    </div>
                </div>
            </div>
         </div>       
            
         );
    }
}
