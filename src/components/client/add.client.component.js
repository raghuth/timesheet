import React, { Component } from 'react';
import { Formik, } from 'formik';
import * as Yup from "yup";
//import { string, object } from 'yup'; 
import {BreadCrumb} from 'primereact/breadcrumb';
export class AddClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const items = [
            {label:'Dashboard'},          
            {label:'Client'},
          
        ];

        const home = {icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact'}
        return (
            <div className="addclientcomponent">
                <div className="p-grid p-fluid">
                    <div className="p-col-12">
                    <BreadCrumb model={items} home={home} />
                        <div className="card card-w-title">
                            <div className="p-col-12">
                                <h1> Add Projects </h1>
                                <Formik
                                    initialValues={{
                                        firstname: "",
                                        lastname: "",
                                        email: ""

                                    }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = 'Required';
                                        } if (!values.firstname) {
                                            errors.firstname = 'Required';
                                        } else if (
                                            /^[a-zA-Z]+ [a-zA-Z]+$/.test(values.firstname)
                                        ) {
                                            errors.firstname = 'Invalid firstname ';
                                        }  else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = 'Invalid email address';
                                        }
                                        return errors;
                                    }}
                                   
                                    // validateUsername ={value=> {
                                    //     let error;
                                    //     if (value === 'admin') {
                                    //       error = 'Nice try!';
                                    //     }
                                    //     return error;
                                    //   }}
                                    // onSubmit={(values, { setSubmitting }) => {
                                    //     setTimeout(() => {
                                    //         alert(JSON.stringify(values, null, 2));
                                    //         setSubmitting(false);
                                    //     }, 400);
                                    // }}
                                    onSubmit={async values => {
                                        await new Promise(resolve => setTimeout(resolve, 500));
                                        alert(JSON.stringify(values, null, 2));
                                        console.log(" formik value:", values)
                                    }}
                                    validationSchema={Yup.object().shape({
                                         firstname: Yup.string()
                                            .min(2, 'Too Short!')
                                            .max(50, 'Too Long!')
                                            .required('Required'),
                                            lastname: Yup.string()
                                            .min(2, 'Too Short!')
                                            .max(50, 'Too Long!')
                                            .required('Required'),
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
                                                    id="firstname"
                                                    placeholder="First Name"
                                                    type="text"
                                                    name="firstname"
                                                    value={values.firstname}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.firstname && touched.firstname
                                                            ? "text-input error"
                                                            : "text-input"
                                                    }
                                                />
                                                {errors.firstName && touched.firstName ? (
                                                    <div>{errors.firstName}</div>
                                                ) : null}
                                                <label htmlFor="lastname" style={{ display: "block" }}>
                                                    Last Name
                                                      </label>
                                                <input
                                                    id="lastname"
                                                    placeholder="Last Name"
                                                    type="text"
                                                    name="lastname"
                                                    value={values.lastname}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className={
                                                        errors.lastname && touched.lastname
                                                            ? "text-input error"
                                                            : "text-input"
                                                    }
                                                />
                                                {errors.lastName && touched.lastName ? (
                                                    <div>{errors.lastName}</div>
                                                ) : null}

                                                <label htmlFor="email" style={{ display: "block" }}>
                                                    Email ID
                                                      </label>
                                                <input
                                                    id="email"
                                                    placeholder="Email ID"
                                                    type="text"
                                                    name="email"
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
