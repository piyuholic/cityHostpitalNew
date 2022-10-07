import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';




function Patientadmin(props) {


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (values) => {

        let localData = JSON.parse(localStorage.getItem("Patient"));

        let id = Math.floor(Math.random() * 100000)

        let data = { id: id, ...values };

        if (localData === null) {
            localStorage.setItem("Patient", JSON.stringify([data]));
        } else {
            localData.push(data)
            localStorage.setItem("Patient", JSON.stringify(localData));
        }

        setOpen(false);
        formikObj.resetForm()
    };




    let schema = yup.object().shape({
        name: yup.string().required("Please Enter patientname."),
        mobilenumber: yup.string().required("Please Enter mobilenumber."),
        email: yup.string().required("Please Enter email."),
    });

    const formikObj = useFormik({
        validationSchema: schema,
        initialValues: {
            name: '',
            mobilenumber: '',
            email: ''
        },
        onSubmit: values => {
            handleAdd(values)
        },
    });

    const { handleBlur, handleChange, errors, touched, handleSubmit } = formikObj;

    return (
        <div>
            <h1>Patients</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Add Patients
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <Formik values={formikObj}>
                        <from onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name='name'
                                    label="Patients name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="mobilenumber"
                                    name="mobilenumber"
                                    label="mobile number"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.mobilenumber && touched.mobilenumber ? errors.mobilenumber : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="email"
                                    name="email"
                                    label="Email "
                                    type="email"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                            </DialogContent>
                        </from>
                    </Formik>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleAdd} type='submit'>add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}


export default Patientadmin;