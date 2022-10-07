import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Appointment(props) {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Your Name.").matches(/^[A-Za-z ]*$/, 'Please enter valid name'),
        email: yup.string().email("Please Enter Valid Email.").required("Please Enter Your Email."),
        phone: yup.string().required("Please Enter Your Phone Number.").matches(phoneRegExp, 'Phone number is not valid').min(10, 'Enter min 10 digits').max(10, 'Enter max 10 digits'),
        date: yup.string().required("Please Enter Date.").matches(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/, "Enter Date in Format."),
        department: yup.string().required("Please Select Department."),
        message: yup.string().required("Please Enter Any Message.").min(50, "Enter Minimum 50 Characters"),
        gender: yup.string().required("Please Select Gender."),
        hobby: yup.array().min(1).of(yup.string().required("Please Select Hobby.")).required()
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: '',
            gender: '',
            hobby: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formikObj;


    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <Formik values={formikObj}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group ">
                                    <input onChange={handleChange} onBlur={handleBlur} type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                                    <p>{errors.name && touched.name ? errors.name : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input onChange={handleChange} onBlur={handleBlur} type="text" className="form-control" name="email" id="email" placeholder="Your Email" />
                                    <p>{errors.email && touched.email ? errors.email : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input 
                                      onChange={handleChange} 
                                      onBlur={handleBlur} 
                                      type="text" 
                                      className="form-control" name="phone" id="phone" placeholder="Your Phone" />
                                    <p>{errors.phone && touched.phone ? errors.phone : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input onChange={handleChange} onBlur={handleBlur} type="text" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" />
                                    <p>{errors.date && touched.date ? errors.date : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select onChange={handleChange} onBlur={handleBlur} name="department" id="department" className="form-select">
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    <p>{errors.department && touched.department ? errors.department : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea onChange={handleChange} onBlur={handleBlur} className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                                <p>{errors.message && touched.message ? errors.message : ''}</p>
                                <div className="validate" />
                            </div>
                            <div className="form-group mt-3">
                                    <label>
                                        Gender:
                                    </label>  <br />
                                    <input type="radio" value="Male" name="gender" onChange={handleChange} onBlur={handleBlur}/> Male
                                    <input type="radio" value="Female" name="gender" onChange={handleChange} onBlur={handleBlur}/> Female
                                <p>{errors.gender && touched.gender ? errors.gender : ''}</p>
                                <div className="validate" />
                            </div>

                            <div className="form-group mt-3">
                                    <label>
                                        Hobby:
                                    </label>  <br />
                                    <input type="checkbox" value="Gameing" name="hobby" onChange={handleChange} onBlur={handleBlur}/> Gameing
                                    <input type="checkbox" value="Reading" name="hobby" onChange={handleChange} onBlur={handleBlur}/> Reading
                                    <input type="checkbox" value="Playing" name="hobby" onChange={handleChange} onBlur={handleBlur}/> Playing
                                <p>{errors.hobby && touched.hobby ? errors.hobby : ''}</p>
                                <div className="validate" />
                            </div>

                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </div>

    );
}

export default Appointment;