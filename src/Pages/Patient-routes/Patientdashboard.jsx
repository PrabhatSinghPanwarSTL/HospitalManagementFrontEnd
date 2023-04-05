import React from "react";
import { Container } from "reactstrap";
import AddApointment from "../../components/AddApointment";
import Base from "../../components/Base";


const Patientdashboard = () => {
    return(
        <Base>
            <Container>
                <AddApointment/>
            </Container>
        </Base>
    )
}


export default Patientdashboard ;