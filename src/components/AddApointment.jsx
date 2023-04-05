import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Container, Form, FormGroup, Input, Label } from "reactstrap"
// import { getCurrentUserDetail } from "../auth/indexD";
import { createPost as doCreatePost } from "../services/apointment-service";
import { loadAllDocs } from "../services/d-user-service";

const AddApointment = () => {


    // const [pat, setPat] = useState([])

    let navigate = useNavigate() ;


    const [docts, setDocts] = useState([])

    useEffect(

        ()=>{
            // setPat(getCurrentUserDetail())
            // console.log(pat)
            // console.log(getCurrentUserDetail())

            
            loadAllDocs().then((data)=>{
                console.log(data)
                setDocts(data)
            }).catch(error=>{
                console.log(error)
            })
        },[]

    )


    const [post, setPost] = useState({
        doctorid:'',
        patientid:'',
        date:'',
        slot:''
    })


    //Date minimum
    function getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date<10?`0${date}`:`${date}`}`
    }

    //for payment
    // const payment=()=>{
    //     alert("Payment is Done")
    // }


    //field Changed  function
    const fieldChanged=(event)=>{
        
        setPost({...post, [event.target.name]:event.target.value})

    }


    //reseting data
    const resetData = () => {

        setPost({
            doctorid:'',
            doctorname:'',
            patientid:'',
            patientname:'',
            date:'',
            slot:''
        })

    }


    //booking appointment fuction
    const createPost=(event)=>{

        event.preventDefault() ;
        // console.log(post)

        if(post.doctorid.trim()==='') {
            alert("Doctor ID is Required !!!")
            return
        }

        if(post.patientid.trim()==='') {
            alert("Patient ID is Required !!!")
            return
        }

        if(post.date.trim()==='') {
            alert("Please Enter The Date !!!")
            return
        }

        if(post.slot.trim()==='') {
            alert("Enter the Timing !!!")
            return
        }

        //submitting appointment details on server
        doCreatePost(post).then((data)=>{

            if(!data){
                alert("There is already a slot is present, Please select some other slot")
            }
            else{
                toast.success("Navigating to payment page")
                navigate('/patient/payment')
                // console.log(post)
            }

        }).catch((error) => {
            alert("Error!!!")
            console.log(error)
        })
    }


    return(
        <div className="wrapper">

            <Card>

                <CardBody>
{/* {JSON.stringify(post)} */}
                    <h3>Fill All the Details for booking an Appointment</h3>

                    <Form onSubmit={createPost}>

                        <div className="my-3">
                            <Label for="doctorid">Select Doctor</Label>
                            <Input 
                            type="select" 
                            id="dn"
                            name="doctorid"
                            onChange={fieldChanged}
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
                            <Label for="patientid">Enter Patient ID</Label>
                            <Input 
                            type="number" 
                            id="pid"
                            min='0'
                            placeholder="Enter Patient's ID"
                            name="patientid"
                            onChange={fieldChanged}
                            />
                        </div>

                        <div className="my-3">
                            <Label for="date">Enter Apointment Date</Label>
                            <Input 
                            type="date" 
                            id="date"
                            min={getCurrentDate()}
                            placeholder="yyyy-mm-dd"
                            name="date"
                            onChange={fieldChanged}
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
                                    type="select"  onChange={fieldChanged}
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
                            {/* <Button onClick={payment} color="warning">Pay</Button> */}
                            <Button className="ms-2" type="submit" color="primary">Book Appointment</Button>
                            <Button onClick={resetData} className="ms-2" color="danger">Reset Content</Button>
                        </Container>

                    </Form>
                
                </CardBody>

            </Card>

        </div>
    )
} 

export default AddApointment ;