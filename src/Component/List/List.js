import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function List({ data }) {
    console.log(data);
    return (
        <>
            {
                data.map((d, i) => (
                    <div className='col-3'>
                        <Card>
                            <CardBody>
                                <CardTitle>{d.name}</CardTitle>
                                <CardSubtitle>price:-{d.price}</CardSubtitle>
                            </CardBody>
                        </Card>
                    </div>
                ))
            }

        </>
    );
}

export default List;