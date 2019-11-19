import React, { Component } from 'react';
import {Panel} from 'primereact/panel';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {Chart} from 'primereact/chart';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import {Breadcrumb} from 'primereact/breadcrumb';
import { UserService} from '../../service/user.service';

export class UserComponent extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            items : [
                {label:'Categories'},
                {label:'Sports'},
                {label:'Football'},
                {label:'Countries'},
                {label:'Spain'},
                {label:'F.C. Barcelona'},
                {label:'Squad'},
                {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
            ],
            home : {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}
        }
        this.userservice = new UserService();
    }

    componentDidMount() {
        // load data from service
        this.userservice.getUsers().then(data => this.setState({users: data}));
    }

    render() {  
        const items = [
            {label:'Categories'},
            {label:'Sports'},
            {label:'Football'},
            {label:'Countries'},
            {label:'Spain'},
            {label:'F.C. Barcelona'},
            {label:'Squad'},
            {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];
        
        const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}
        return (
            <div>

                      <div className="card card-w-title">
                            <h1>Users</h1>
                            <DataTable value={this.state.users} paginator={true}   rows={10} rowsPerPageOptions={[5,10,20]}>
                        <Column field="username" header="Username" />
                        <Column field="email" header="Email" />
                        <Column field="mobile" header="Mobile" />                  
                    </DataTable>
                        </div>


            </div>
        );
    }
}