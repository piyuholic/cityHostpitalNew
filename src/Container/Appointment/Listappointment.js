import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import Button from '@mui/material/Button';

function Listappointment(props) {
    const [deta, setData] = useState([]);



    const getDeta = () => {
        let localData = JSON.parse(localStorage.getItem('apt'));

        setData(localData)
    }
    useEffect(
        () => {
            getDeta();
        }, []
    )

    const handleDelete = (Did) => {
        let localData = JSON.parse(localStorage.getItem("apt"));

        let data = localData.filter( (l) => l.id !== Did)
        
        localStorage.setItem("apt", JSON.stringify(data))
        getDeta()
    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>List Of Appointment</h2>
                    </div>
                    <>
                    <div className='row'>
                        {
                            deta.map((d, i) => (
                                <div className='col-4 mb-3' key={i}>
                                    <Card
                                        style={{
                                            width: '18rem'
                                        }}
                                    >
                                        <CardBody>
                                             <CardTitle tag="h5" style={{ color: '#FF6337' }}>
                                                {d.name}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                Gender: {d.gender}
                                            </CardSubtitle>
                                            <Button variant="contained" size="small" className='me-2' color="info">Edit</Button>
                                            <Button variant="contained" size="small" color="error" onClick={() => handleDelete(d.id)}>Delete</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))
                        }
                    </div>
                    </>
                </div>
            </section>
        </div>
    );
}


export default Listappointment;