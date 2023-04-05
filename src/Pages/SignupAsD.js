import Base from "../components/Base"; 
import { Container, CardHeader, Card, CardBody, Label, Input, Form, FormGroup, Button } from "reactstrap"; 
import { useEffect, useState } from "react";
import { signUpD } from "../services/d-user-service";
import {toast} from 'react-toastify' ;


const SignupAsD = () => {


    const [data, setData] = useState({

        dname : '' ,
        email : '' ,
        dpassword : '',
        dmobileno : '',
        dspeciality : ''

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
            dname : '' ,
            email : '' ,
            dpassword : '',
            dmobileno : '',
            dspeciality : ''
        })
    }

    //submiting the form
    const submitForm=(event)=> {
        event.preventDefault()

        console.log(data)
        //data validation

        //call server api for sending the data
        signUpD(data).then((resp) =>{
            console.log(resp)
            console.log("success log")
            toast.success("User Is Registered Successfully !! Doctor ID " + resp.did)
            setData({
                dname : '' ,
                email : '' ,
                dpassword : '',
                dmobileno : '',
                dspeciality : ''
            })
        }).catch((error) => {
            console.log(error)
            console.log("Error log")
        });

    };

    return (
        <Base>
            <Container>

                {/* {JSON.stringify(data)} */}

                <Card>
                    <CardHeader>
                        <h3>Fill InFormation as A Doctor To Register</h3>
                    </CardHeader>

                    <CardBody>

                        <Form onSubmit={submitForm}>
                            {/* name field */}
                            <FormGroup>
                                <Label for="dname">Enter Full Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter Here"
                                    id="name"
                                    onChange={(e) => handleChange(e, 'dname')}
                                    value={data.name}
                                />
                             
                            </FormGroup>

                            {/* password field */}
                            <FormGroup>
                                <Label for="dpassword">Enter Password</Label>
                                <Input
                                    type="password"
                                    placeholder="Enter Here"
                                    onChange={(e) => handleChange(e, 'dpassword')}
                                    value={data.password}
                                />

                            </FormGroup>

                            {/* email field */}
                            <FormGroup>
                                <Label for="email">Enter Email</Label>
                                <Input
                                    type="email"
                                    placeholder="abcd@gmail.com"
                                    onChange={(e) => handleChange(e, 'email')}
                                    value={data.email}
                                />

                            </FormGroup>

                            {/* mobileno field */}
                            <FormGroup>
                                <Label for="dmobileno">Enter Mobile Number</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter Here"
                                    onChange={(e) => handleChange(e, 'dmobileno')}
                                    value={data.mobileno}
                                />

                            </FormGroup>

                            {/* speciality field */}
                            <FormGroup>
                                <Label for="dspeciality">Enter Speciality</Label>
                                <Input
                                    type="text"
                                    placeholder="cardiac, skin, etc"
                                    onChange={(e) => handleChange(e, 'dspeciality')}
                                    value={data.speciality}
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

export default SignupAsD;