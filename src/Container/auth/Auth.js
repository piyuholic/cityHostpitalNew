import React, { useRef, useState } from 'react';

function Auth(props) {
    const [userType, setuserType] = useState('Login');
    const [reset, setReset] = useState(false);

    const nameref = useRef();
    const emailref = useRef();
    const passref = useRef();


    function handeling () {
        passref.current.style.border='2px solid black'
        passref.current.focus()
        console.log(passref.current.value);
        console.log(emailref.current.value);
    }
    



    
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        reset === 'ture' ?
                            <h2>Reset Password</h2>
                            :
                            userType === 'Login' ?
                                <h2>Login</h2>
                                :
                                <h2>signup</h2>
                    }
                </div>
                <div action method="post" role="form" className="php-email-form">

                    <div className="col-md-4 form-group">
                        {
                            reset === 'ture' ?
                                null
                                :
                                userType === 'Login' ?
                                    null
                                    :
                                    <div className="row">
                                        <input ref={nameref} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validate" />
                                    </div>
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input ref={emailref} type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                    </div>
                    {
                        reset === 'ture' ?
                            null
                            :
                            <div className="row">
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input ref={passref} type="tel" className="form-control" name="password" id="password" placeholder="Your password" data-rule="minlen:4"  />
                                    <div className="validate" />
                                </div>
                            </div>
                    }

                    {
                        reset === 'ture' ?
                        <div className="text-center"><button type="submit">submit</button></div>
                        :     
                        userType === 'Login' ?
                            <div className="text-center"><button onClick={handeling} type="submit">Login</button></div>
                            :
                            <div className="text-center"><button type="submit">Signup</button></div>
                    }
                    {
                        userType === 'Login' ?
                            <div>Create a new Account <button onClick={() => { setReset(false); setuserType('Singup')}}>Signup</button></div>
                            :
                            <div>Already have Account <button onClick={() => { setReset(false);setuserType('Login')}}>Login</button></div>
                    }

                    <span>Forgot password? <button onClick={() => setReset('ture')}>Click Hear</button></span>

                </div>
            </div>
        </section>


    );
}

export default Auth;