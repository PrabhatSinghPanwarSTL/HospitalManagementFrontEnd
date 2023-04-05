import React from 'react' 
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { getCurrentUserDetail } from '../auth/indexD';
import Base from '../components/Base';
import { getSingleApo, UpdateApoint } from '../services/apointment-service';
import { loadAllDocs } from '../services/d-user-service';


function UpdateApo() {


    //Date minimum
    function getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
    }



    let T = getCurrentUserDetail() ;

    let navigate = useNavigate()

    const {Aid} = useParams();

    const [apo, setApo] = useState() ;


    const [docts, setDocts] = useState([])

    useEffect(

        ()=>{
            loadAllDocs().then((data)=>{
                console.log(data)
                setDocts(data)
            }).catch(error=>{
                console.log(error)
            })
        },[]

    )


    useEffect(()=>{

        //Load the appointment from database
        getSingleApo(Aid).then(data=>{
            setApo({...data})
             console.log(data)
        })
        .catch(error=>{
            console.log(error)
            toast.error("Error in loading the apo !!!")
        })
    },[])
    // console.log(apo.patientid)

    // useEffect(()=>{
    //     console.log(T.id)
    //     console.log(apo.patientid)

    //     if(!apo) {
    //         if(T.id!=apo.patientid) {
    //             toast.error("This appointment is not Yours !!!")
    //             navigate("/")
    //         }
    //     }

    // }, [apo])

    // console.log(T.id)
    // console.log(apo.patientid)


    // useEffect(()=>{
    //     console.log(apo)
    // },[apo])

    
    const handleChange=(event, fieldName)=>{

        setApo({...apo,[fieldName]:event.target.value})

    }

    const updateApointment=(event)=>{

        event.preventDefault() 
        // console.log(apo)

        UpdateApoint({...apo}, Aid)
        .then(res=>{
            if(!res){
                // console.log(res)
                alert("Cannot book this slot, Its already occupied")
            } else{
                toast.success("Appointment Updated")
            }
        })
        .catch(error=>{
            console.log(error)
            toast.error("Error in updating")
        })

    }


    const updateHtml=()=>{
        return (
            <div className="wrapper">

            <Card>

                <CardBody>
                    <h3>Update the Details of Your Appointment</h3>

                    <Form onSubmit = {updateApointment}>

                    <div className="my-3">
                            <Label for="doctorid">Select Doctor</Label>
                            <Input 
                            type="select" 
                            id="dn"
                            name="doctorid"
                            onChange={(event)=>handleChange(event, 'doctorid')}
                            >
                                <option>
                                    -- select below --
                                </option>
                                {
                                    docts.map((names)=>(
                                        <option value={names.did} key={names.did}>
                                            {names.dname}
                                        </option>
                                    ))
                                }

                            </Input>

                        </div>

                        <div className="my-3">
                            <Label for="date">Enter Apointment Date</Label>
                            <Input 
                            type="date" 
                            id="date"
                            min={getCurrentDate()}
                            placeholder="yyyy-mm-dd"
                            name="date"
                            onChange={(event)=>handleChange(event, 'date')}
                            />
                        </div>

                        <div className="my-3">
                        <FormGroup>
                                <Label for="slot">
                                    Choose Slot
                                </Label>
                                <Input
                                    id="slot"
                                    name="slot"
                                    type="select"  onChange={(event)=>handleChange(event, 'slot')}
                                >
                        
                
                                <option  value={0} >
                                    -- select below --
                                </option>

                                <option >
                                    10:00am - 10:30am
                                </option>
                                <option  >
                                    11:00am - 11:30am
                                </option>
                                <option >
                                    12:00pm - 12:30pm
                                </option>
                                <option>
                                    1:00pm - 1:30pm
                                </option>
                                <option  >
                                    2:00pm - 2:30pm
                                </option>
                            </Input>
                            </FormGroup>
                        </div>

                        <Container className="text-center">
                            <Button type="submit" color="primary">Update Appointment</Button>
                            <Button className="ms-2" color="danger">Reset Content</Button>
                        </Container>

                    </Form>
                
                </CardBody>

            </Card>

        </div>
        )
    }


    return(
        <Base>
            <Container>
                {/* {Aid} */}
                {updateHtml()}
            </Container>
        </Base>
    )
}


export default UpdateApo ;