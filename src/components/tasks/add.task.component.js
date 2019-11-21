import React, { Component } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
export class AddTaskComponent extends Component {
    state = {}
    render() {
        const items = [
            { label: 'Categories' },
            { label: 'Sports' },
            { label: 'Football' },
            { label: 'Countries' },
            { label: 'Spain' },
            { label: 'F.C. Barcelona' },
            { label: 'Squad' },
            { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
        ];

        const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }
        return (
            <div className="AddTaskComponent">
                <BreadCrumb model={items} home={home} />
                <h1>CreateTask</h1>
            </div>
        );
    }
}

