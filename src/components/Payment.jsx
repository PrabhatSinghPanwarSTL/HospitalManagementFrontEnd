import React from 'react' 
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Input, Label, Button } from 'reactstrap';
import Base from "../components/Base";
import '../css/headings.css'


const Payment = () => {


    let navigate = useNavigate() ;


    const click = (event) => {
        
        navigate('/patient/apointments')
        toast.success("Payment is done of Rs. 800")

    }

    return (

        <Base>
        <Container>

            <h1 className="heading"><center>Payment Page</center></h1>


            <div className="my-3">
                <Label for="Card Number">Card Number</Label>
                <Input 
                    type="number" 
                    id="cn"
                    placeholder="Enter Card Number"
                    name="cardno"
                    />
            </div>

            <div className="my-3">
                <Label for="date">Expiration Date</Label>
                <Input 
                    type="text" 
                    id="date"
                    placeholder="yy-mm-dd"
                    name="date"
                    />
            </div>
            <div className="my-3">
                <Label for="cvv">Enter CVV</Label>
                <Input 
                    type="password" 
                    id="cvv"
                    name="cvv"
                    />
            </div>
            <Container className="text-center">
                <Button onClick={click} className="ms-2" color="primary">Pay</Button>
            </Container>


        </Container>
        </Base>

        )
}


export default Payment;