import React, { Component } from 'react';
import { Formik,} from 'formik';
import * as Yup from "yup";
import {BreadCrumb} from 'primereact/breadcrumb';
export class AssignUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const items = [
            {label:'Dashboard'},        
            {label:'Assign user'}
         
        ];

        const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'} 
        return (
            <div className="assignusercomponent">
                <div className="p-grid p-fluid">
                    <div className="p-col-12">
                        <div className="card card-w-title">
                            <div className="p-col-12 ">
                            <BreadCrumb model={items} home={home} /> 
                                <h1>Assign User</h1>
                                <Formik
                                    initialValues={{ email: "" }}
                                    onSubmit={async values => {
                                        await new Promise(resolve => setTimeout(resolve, 500));
                                        alert(JSON.stringify(values, null, 2));
                                    }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string()
                                            .email()
                                            .required("Required")
                                    })}
                                >
                                    {props => {
                                        const {
                                            values,
                                            touched,
                                            errors,
                                            dirty,
                                            isSubmitting,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            handleReset
                                        } = props;
                                        return (
                                            <form onSubmit={handleSubmit}>
                                                <label htmlFor="First Name" style={{ display: "block" }}>
                                                    First Name
                                                      </label>
                                                <input
                                                    id="email"
                                                    placeholder="First Name"
                                                    type="text"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.email && touched.email
                                                            ? "text-input error"
                                                            : "text-input"
                                                    }
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                                <label htmlFor="email" style={{ display: "block" }}>
                                                    Last Name
                                                      </label>
                                                <input
                                                    id="email"
                                                    placeholder="Last Name"
                                                    type="text"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.email && touched.email
                                                            ? "text-input error"
                                                            : "text-input"
                                                    }
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                                <label htmlFor="email" style={{ display: "block" }}>
                                                    Email ID
                                                      </label>
                                                <input
                                                    id="email"
                                                    placeholder="Email ID"
                                                    type="text"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.email && touched.email
                                                            ? "text-input error"
                                                            : "text-input"
                                                    }
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="input-feedback">{errors.email}</div>
                                                )}
                                                <button
                                                    type="button"
                                                    className="outline"
                                                    onClick={handleReset}
                                                    disabled={!dirty || isSubmitting}
                                                >
                                                    Reset
                                                    </button>
                                                <button type="submit" disabled={isSubmitting}>
                                                    Submit
                                                   </button>

                                                {/* <DisplayFormikState {...props} /> */}
                                            </form>
                                        );
                                    }}
                                </Formik>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
