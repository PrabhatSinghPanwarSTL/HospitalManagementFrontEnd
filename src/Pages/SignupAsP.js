import Base from "../components/Base";
import { Container, CardHeader, Card, CardBody, Label, Input, Form, FormGroup, Button } from "reactstrap"; 
import { useEffect, useState } from "react";
import { signUpP } from "../services/p-user-service";
import {toast} from 'react-toastify' ;



const SignupAsP = () => {

    const [data, setData] = useState({

        name : '' ,
        email : '' ,
        password : '',
        mobileno : ''

    })

    const [error, setError] = useState({
        errors : {},
        isError : false
    })


    // useEffect(()=>{
    //     console.log(data)
    // }, [data])

    //handle change 
    const handleChange = (event, property) => {
        
        //dynamically setting the values
        setData({...data, [property]:event.target.value})

    }

    //reset data
    const resetData = () => {
        setData({
            name : '' ,
            email : '' ,
            password : '',
            mobileno : ''
        })
    }

    //submiting the form
    const submitForm=(event)=> {
        event.preventDefault()

        console.log(data)
        //data validation

        //call server api for sending the data
        signUpP(data).then((resp) =>{
            console.log(resp)
            console.log("success log")
            toast.success("User Is Registered Successfully !! Patient ID" + resp.id)
            setData({
                name : '' ,
                email : '' ,
                password : '',
                mobileno : ''
            })
        }).catch((error) => {
            console.log(error)
            console.log("Error log")
        });

    }

    return (
        <Base>
            <Container>

                {/* {JSON.stringify(data)} */}

                <Card>
                    <CardHeader>
                        <h3>Fill InFormation as A Patient To Register</h3>
                    </CardHeader>

                    <CardBody>

                        <Form onSubmit={submitForm}>

                            <FormGroup>
                                <Label for="name">Enter Full Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter Here"
                                    id="name"
                                    onChange={(e) => handleChange(e, 'name')}
                                    value={data.name}
                                />

                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Enter Password</Label>
                                <Input
                                    type="password"
                                    placeholder="Enter Here"
                                    onChange={(e) => handleChange(e, 'password')}
                                    value={data.password}
                                />

                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Enter Email</Label>
                                <Input
                                    type="email"
                                    placeholder="abcd@gmail.com"
                                    onChange={(e) => handleChange(e, 'email')}
                                    value={data.email}
                                />

                            </FormGroup>

                            <FormGroup>
                                <Label for="mobileno">Enter Mobile Number</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter Here"
                                    onChange={(e) => handleChange(e, 'mobileno')}
                                    value={data.mobileno}
                                />

                            </FormGroup>


                            <Container className="text-center">
                                <Button color="dark">Register</Button>
                                <Button onClick={resetData} className="ms-2" type="reset">Reset</Button>
                            </Container>

                        </Form>

                    </CardBody>

                </Card>
            </Container>
        </Base>
    )
}

export default SignupAsP;