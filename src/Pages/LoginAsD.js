import Base from "../components/Base";
import { Container, CardHeader, Card, CardBody, Label, Input, Form, FormGroup, Button } from "reactstrap"; 
import { useState } from "react";
import {toast} from 'react-toastify' ;
import { loginD } from "../services/d-user-service";
import { doLogin } from "../auth/indexD";
import { useNavigate } from "react-router-dom";

const LoginAsD = () => {

    const navigate = useNavigate()


    const [loginDetail, setLoginDetail] = useState({
        username : '',
        password : ''
    })


    const handleChange = (event, field) => {

        let actualValue = event.target.value
        setLoginDetail({
            ...loginDetail,
            [field] : actualValue
        })

    }


    const handleReset=()=>{
        setLoginDetail({
            username:'',
            password:''
        })
    }


    const handleFormSubmit=(event)=>{
        event.preventDefault() ;
        console.log(loginDetail)

        //validation
        if(loginDetail.username.trim()=='' || loginDetail.password.trim()=='') {
            toast.error("User Credentials cann't be empty !!")
            return
        }

        //submit the data to server to generate the token for user
        loginD(loginDetail).then((data) => {
            console.log("doctor login : ") ;
            console.log(data) ;

            //save the data to localStorage
            doLogin(data, ()=>{
                console.log("Login Details are saved in LocalStorage")

                //redirect to user dashboard page
                navigate("/doctor/dashboard")

            })

            toast.success("Doctor Login Success") ;
        }).catch(error=>{
            console.log(error)
            if(error.response.status==400 || error.response.status==404){
                toast.error(error.response.data.message)
            }else {
                toast.error("Something went wrong on server !!")
            }
        })

    }


    return (
        <Base>
            <Container>
                <Card>
                    <CardHeader>
                        <h3>Login For Doctor</h3>
                    </CardHeader>

                    <CardBody>

                        <Form onSubmit={handleFormSubmit}>

                            <FormGroup>
                                <Label for="email">Enter Your Email</Label>
                                <Input
                                    type="text"
                                    placeholder="abcd@gmail.com"
                                    value={loginDetail.username}
                                    onChange={(e) => handleChange(e, 'username')}
                                />

                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Enter Your Password</Label>
                                <Input
                                    type="password"
                                    placeholder="Enter Here"
                                    value={loginDetail.password}
                                    onChange={(e) => handleChange(e, 'password')}
                                />

                            </FormGroup>


                            <Container className="text-center">
                                <Button color="dark">LogIn</Button>
                                <Button onClick={handleReset} className="ms-2" type="reset">Reset</Button>
                            </Container>

                        </Form>

                    </CardBody>

                </Card>
            </Container>
            
        </Base>
    )
}

export default LoginAsD;