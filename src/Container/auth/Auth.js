import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Auth(props) {

    const [userType, setUserType] = useState('Login');
    const [reset, setReset] = useState(false);

    let authSchema = {}, intVal = {};

    if (userType === 'Login' && reset === false) {
        authSchema = {
            email: yup.string().email("Please Eneter Valid Email.").required("Please Enetr Your Email."),
            password: yup.string().required("Please Enter Password.").min(8, "Password must be 8 characters long")
        }

        intVal = {
            email: '',
            password: ''
        }
    } else if (userType === 'Signup' && reset === false) {
        authSchema = {
            name: yup.string().required("Please Enter Your Name."),
            email: yup.string().email("Please Eneter Valid Email.").required("Please Enetr Your Email."),
            password: yup.string().required("Please Enter Password.").min(8, "Password must be 8 characters long")
        }

        intVal = {
            name: '',
            email: '',
            password: ''
        }

    } else if (reset === true) {
        authSchema = {
            email: yup.string().email("Please Eneter Valid Email.").required("Please Enetr Your Email.")
        }

        intVal = {
            email: ''
        }
    }

    let schema = yup.object().shape(authSchema);

    const formikObj = useFormik({
        initialValues: intVal,
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleChange, handleSubmit, errors } = formikObj


    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            reset === true ?
                                <h2>Reset Password</h2>
                                :
                                userType === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>
                        }

                    </div>
                    <Formik values={formikObj} onSubmit={handleSubmit}>
                        <Form className="php-email-form">

                            {
                                reset === true ?
                                    null
                                    :
                                    userType === 'Login'
                                        ? null
                                        : <div className="row">
                                            <div className="col-md-6 form-group mx-auto">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    onChange={handleChange}
                                                />
                                                <p>{errors.name}</p>
                                                <div className="validate" />
                                            </div>
                                        </div>
                            }


                            <div className="row">
                                <div className="col-md-6 form-group mt-3 mt-md-0 mx-auto">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={handleChange}
                                    />
                                    <p>{errors.email}</p>
                                    <div className="validate" />
                                </div>
                            </div>

                            {
                                reset === true ?
                                    null
                                    :
                                    <div className="row">
                                        <div className="col-md-6 form-group mt-3 mt-md-0 mx-auto">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Your Password"
                                                onChange={handleChange}
                                            />
                                            <p>{errors.password}</p>
                                            <div className="validate" />
                                        </div>
                                    </div>
                            }

                            {
                                reset === true ?
                                    <div className="text-center"><button type="submit">Submit</button></div>
                                    :
                                    userType === 'Login' ? <div className="text-center"><button type="submit">Login</button></div> : <div className="text-center"><button type="submit">Signup</button></div>
                            }



                        </Form>
                    </Formik>
                    {
                        userType === 'Login' ? <div className="text-center mt-2">Create a new account: <Link onClick={() => { setReset(false); setUserType('Signup') }}>Signup</Link> </div> : <div className='text-center mt-2' >Already have an Acoount? <Link onClick={() => { setReset(false); setUserType('Login') }}>Login</Link> </div>
                    }

                    <div className="text-center mt-2"><Link onClick={() => setReset(true)}>Forgot Password?</Link></div>
                </div>
            </section>
        </div>

    );
}

export default Auth;