import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UserService } from '../../service/user.service';
import { Button } from 'primereact/button';
import { AdduserComponent } from '../../components/adduser/adduser';
import {Route} from 'react-router-dom';

export class UserComponent extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            items: [
                { label: 'Categories' },
                { label: 'Sports' },
                { label: 'Football' },
                { label: 'Countries' },
                { label: 'Spain' },
                { label: 'F.C. Barcelona' },
                { label: 'Squad' },
                { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
            ],
            home: { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' },
            navigate: false

        }
        this.userservice = new UserService();
    }

    componentDidMount() {
        // load data from service
        this.userservice.getUsers().then(data => this.setState({ users: data }));
    }

    render() {
        const { navigate } = this.state    
        if (navigate) {
          return  <Route path="/users" exact component={AdduserComponent} />
        }        

        return (
            <div>
                <div className="card card-w-title">
                  <h1>Users <Button label="Add" id="add_User_button" className="p-button-success"  onClick={() => this.setState({ navigate: true })}   >
                </Button>
                </h1> 
                                                
                    <DataTable value={this.state.users} paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]}>
                        <Column field="username" header="Username" />
                        <Column field="email" header="Email" />
                        <Column field="mobile" header="Mobile" />
                    </DataTable>
                </div>
            </div>
        );
    }
}