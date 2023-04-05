import React from "react" ;
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container, Col, Row, Toast } from "reactstrap";
import { getCurrentUserDetail } from "../auth/indexD";
import { deleteApo, getAllApo } from '../services/apointment-service'
import Base from "./Base";
import Pal from "./Pal";
import '../css/headings.css'


function PatientApointments() {

    let navigate = useNavigate() ;


    const [data, setData] = useState() ;

    useEffect(() => {
        console.log(getCurrentUserDetail())

        let T = getCurrentUserDetail()

        if(!T.dspeciality){
        getAllApo(getCurrentUserDetail().id).then(data => {
            console.log(data)
            setData([...data])
        })
        .catch(error => {
            console.log(error)
            toast.error("Error In Loading User")
        })
        }else {

            //Need to put my component for the doctordashboard

            console.log("NOPE NOT NOW")
            navigate("/doctor/dashboard")
        }
    }, [])


    //fuction to delete patient's appointment
    function deletePost(post) {
        //going to deletepost
        deleteApo(post.aid).then(res=>{
            console.log(res)
            toast.success("Apointment Deleted Successfully")
        })
        .catch(error=>{
            console.log(error)
            toast.error("error in deleting the appointment")
        })
    }




    return(
        <Base>
        <Container>
            
        <div className="container-fluid">
                <Row>
                    <Col md={
                        {
                            size:10,
                            offset:1
                        }
                    }>

                        <h1 className="heading"><center>Your Total Number of Appointments are : {data?.length} </center></h1>



                        {
                            data?.map((pal) => (
                                <Pal pal={pal} key={pal.aid} deletePost={deletePost}/>
                            ))
                        }

                    </Col>
                </Row>
            </div>

        </Container>
        </Base>
    )

}

export default PatientApointments