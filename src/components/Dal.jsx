import React from 'react'
import { Button, Card, CardBody, CardText } from 'reactstrap'
import '../css/headings.css'
import '../css/card.css'


function Dal ({doc, deletePost}) {
    return(
        <Card className="shadow-sm mt-4">
            <CardBody>
                <h1 className="subheading">{doc.aid}</h1>
                <CardText className="text">
                    Patient Name : {doc.pemail}<br/>
                    Patient Email : {doc.speciality}<br/>
                    Doctor Name : {doc.doctorname}<br/>
                    Doctor Email : {doc.demail}<br/>
                    Specialization : {doc.patientname}<br/>
                    Date : {doc.date}<br/>
                    Timing : {doc.slot}<br/>
                </CardText>
                <div>
                    <Button color="success" onClick={()=>deletePost(doc)}>Done</Button>
                </div>
            </CardBody>
        </Card>
    )
}

export default Dal ;