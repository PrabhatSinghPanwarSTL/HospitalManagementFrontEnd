import jsPDF from 'jspdf';
import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardText } from 'reactstrap'


function Pal ({pal, deletePost}) {

    function generateRecp(e, paal) {
        e.preventDefault() 
        const doc = new jsPDF('p', 'pt') ;

        console.log(paal)

        doc.text(200, 40, "Your Reciept, Have A Nice Day !!!!")
        doc.text(200, 60, "-----------------------------------------------")

        doc.text(40, 100, "Appointment ID : " + paal.aid)
        doc.text(40, 140, "Doctor's Name : Dr. " + paal.doctorname)
        doc.text(40, 180, "Doctor's Email : " + paal.demail)
        doc.text(40, 220, "Doctor's Speciality : " + paal.patientname)
        doc.text(40, 260, "Patient's Name : " + paal.pemail)
        doc.text(40, 300, "Patient's Email : " + paal.speciality)
        doc.text(40, 340, "Appointment Date : " + paal.date)
        doc.text(40, 380, "Appointment Timing : " + paal.slot)


        doc.text(60, 740, "Your slot has been booked successfully, you can connect with your  ")
        doc.text(150, 760, "doctor with the help of above given information.")

        doc.text(10, 780, "-------------------------------------------------------------------------------------------------------------")
        doc.text(200, 800, "Thanks For the Payment : 800 rs.")
        doc.save('MY RECIEPT.pdf')

    }


    return(
        <Card className="shadow-sm mt-4">
            <CardBody>
                <h1>{pal.aid}</h1>
                <CardText>
                    Doctor Name : {pal.doctorname}<br/>
                    Doctor Email : {pal.demail}<br/>
                    Specialization : {pal.patientname}<br/>
                    Patient Name : {pal.pemail}<br/>
                    Patient Email : {pal.speciality}<br/>
                    Date : {pal.date}<br/>
                    Timing : {pal.slot}<br/>
                </CardText>
                <div>
                    <Button color="danger" onClick={()=>deletePost(pal)}>Delete Appointment</Button>
                    <Button tag={Link} to={`/patient/update-apointment/${pal.aid}`} className="ms-4" color="warning">Update Appointment</Button>
                    &nbsp; &nbsp; &nbsp; &nbsp;<Button color="info" onClick={(e)=>generateRecp(e,pal)}>Download PDF</Button> 
                </div>
            </CardBody>
        </Card>
    )
}

export default Pal ;