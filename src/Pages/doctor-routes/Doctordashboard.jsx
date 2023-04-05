import React from "react";
import { Container } from "reactstrap";
import Base from "../../components/Base";
import Doctorsapo from "../../components/DoctorsApointments";


const Doctordashboard = () => {
    return(
        <Base>
            <Container>
                <Doctorsapo/>
            </Container>
        </Base>
    )
}


export default Doctordashboard ;