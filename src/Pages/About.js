import Base from "../components/Base";
import '../css/headings.css'

const About = () => {
    return (

        <Base>

            <h1 className="heading"><center>About Page</center></h1>
            <p><center>This website is built as per the usecase given to the GET from Sterlite Digitals.<br/>
                This is an appointment booking system through which you can book an appointment<br/>
                as a patient, for that first you must sign up as a patient and register yourself<br/>
                Then you can choose the date, time-slot.<br/>
                For Doctor register As a doctor from signup page of doctor and after login you<br/>
                can see all the appointments that patients have book on your slot.
            </center></p>

        </Base>

        )
}


export default About;