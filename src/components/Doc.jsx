import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardBody, CardText } from 'reactstrap';
import { getCurrentUserDetail } from '../auth/indexD';
import '../css/headings.css'
import '../css/card.css'


function Doc({doc={dname:"This is Default Doctor", did:"0", email:"not present", dspeciality:"none", dmobileno:"null"}}) {
    
    
    let navigate = useNavigate() ;
    

    const booking = () => {

        let T = getCurrentUserDetail()
        console.log(T)

        if(T.id) {
            navigate("/patient/pdashboard")
        }else {
            alert("Have To Login As Patient First !!!")
        }
     }
    
    return(
        
        <Card className="shadow-sm mt-4">
            <CardBody>
                <h1 className="subheading">Dr. {doc.dname}</h1>
                <CardText className="text">
                    {doc.did}<br/>
                    {doc.email}<br/>
                    {doc.dspeciality}<br/>
                    {doc.dmobileno}<br/>
                </CardText>
                <Button color="primary" onClick={booking}>Book Appointment</Button>
            </CardBody>
        </Card>

    )
}

export default Doc ;