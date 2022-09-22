import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';

function Doctoradmin(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (values) => {
        console.log(values);
        setOpen(false);
        formikObj.resetForm()
    };

    let schema = yup.object().shape({
        name: yup.string().required("Please Enter Name."),
        age: yup.string().required("Please Enter Age."),
        experience: yup.string().required("Please Enter Experience.")
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            age: '',
            experience: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            handleAdd(values)
        },
    });

    const { handleBlur, handleChange, errors, touched, handleSubmit } = formikObj;


    return (
        <div>
            <h1>Doctors</h1>
            <div>
                <Button variant="outlined"  onClick={handleClickOpen}>
                    ADD DOCTOR DETAILS
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>ADD DOCTOR DETAILS</DialogTitle>
                    <Formik values={formikObj}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name='name'
                                    label="Doctor Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{ errors.name && touched.name ? errors.name : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="age"
                                    name='age'
                                    label="Age"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{ errors.age && touched.age ? errors.age : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="experience"
                                    name='experience'
                                    label="Experience"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{ errors.experience && touched.experience ? errors.experience : ''}</p>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>Add</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>
            </div>
        </div>
    );
};



export default Doctoradmin;