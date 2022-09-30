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
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Doctoradmin(props) {

    const [open, setOpen] = React.useState(false);
    const [dopen, setDOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [did, setDid] = React.useState(0);
    const [update, setUpdate] = React.useState(false)

    React.useEffect(
        () => {
            getData()
        }, []
    );

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem("Doctoradmin"))

        if(localData !== null){
            setData(localData)
        }
        
    }

    const handleClickOpen = () => {
        setOpen(true);
        setUpdate(false);
        formikObj.resetForm();
    };

    const handleClose = () => {
        setOpen(false);
        setDOpen(false);
        setUpdate(false);
        formikObj.resetForm();
    };

    const handleUpdate = (values) => {
        
        let localData = JSON.parse(localStorage.getItem("Doctoradmin"));

        let uData = localData.map((l) => {
            if(l.id === values.id){
                return values;
            }else{
                return l;
            }
        })

        setData(uData)
        localStorage.setItem("Doctoradmin", JSON.stringify(uData))
        handleClose();
    }

    const handleAdd = (values) => {

        let localData = JSON.parse(localStorage.getItem("Doctoradmin"));

        let id = Math.floor(Math.random() * 100000);

        let data = { id: id, ...values };

        if (localData === null) {
            localStorage.setItem("Doctoradmin", JSON.stringify([data]));
        } else {
            localData.push(data)
            localStorage.setItem("Doctoradmin", JSON.stringify(localData));
        }

        getData()

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
            if( update ){
                handleUpdate(values);
            }else{
                handleAdd(values);
            }
        },
    });

    const { handleBlur, handleChange, errors,values, touched, handleSubmit } = formikObj;

    const handleDelete = (data) => {
        setDOpen(true)
        setDid(data.id)
    }

    const handleEdit = (data) => {
        setOpen(true)
        formikObj.setValues(data)
        setUpdate(true)
    }

    const handleDeleteData = () => {

        let localData = JSON.parse(localStorage.getItem("Doctoradmin"));

        let Ddata = localData.filter((l) => l.id !== did)

        localStorage.setItem("Doctoradmin", JSON.stringify(Ddata))

        setData(Ddata)
        setDOpen(false)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'age', headerName: 'Age', width: 130 },
        { field: 'experience', headerName: 'Experience', width: 130 },
        {
            field: '',
            headerName: 'Actions',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => handleEdit(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            )
        }

    ];

    return (
        <div>
            <h1>Doctors</h1>
            <div>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClickOpen}>
                    ADD DOCTOR DETAILS
                </Button>

                <br /><br />

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>

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
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="age"
                                    name='age'
                                    label="Age"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.age}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.age && touched.age ? errors.age : ''}</p>
                                <TextField
                                    margin="dense"
                                    id="experience"
                                    name='experience'
                                    label="Experience"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={values.experience}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.experience && touched.experience ? errors.experience : ''}</p>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type='submit'>{update ? "Update" : "Add"}</Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </Dialog>

                <Dialog open={dopen} onClose={handleClose}>
                    <DialogTitle>ADD DOCTOR DETAILS</DialogTitle>
                    <DialogContent>
                        Are You Sure To Delete?
                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={() => handleDeleteData()} >Yes</Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
export default Doctoradmin;