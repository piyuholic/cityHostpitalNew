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


function Medicineadmin(props) {

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
        quantity: yup.string().required("Please Enter Quantity."),
        price: yup.string().required("Please Enter Price."),
        expiry: yup.string().required("Please Enter Expiry.")
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            quantity: '',
            price: '',
            expiry: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            handleAdd(values)
        },
    });

    const { handleBlur, handleChange, errors, touched, handleSubmit } = formikObj;

    return (
        <div>
            <h1>Add Medicines</h1>
            <div>
                <Button variant="outlined" onClick={handleClickOpen} startIcon={<AddIcon />}>
                    ADD MEDICINES
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>ADD MEDICINES</DialogTitle>
                    <Formik values={formikObj}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    name='name'
                                    label="Medicines Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{ errors.name && touched.name ? errors.name : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="quantity"
                                    name='quantity'
                                    label="Quantity"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{ errors.quantity && touched.quantity ? errors.quantity : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="price"
                                    name='price'
                                    label="Price"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{ errors.price && touched.price ? errors.price : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="expiry"
                                    name='expiry'
                                    label="Expiry"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{ errors.expiry && touched.expiry ? errors.expiry : ''}</p>
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
}

export default Medicineadmin;