import React, { useEffect, useState } from 'react'
import Base from "../components/Base"
import { loadAllDocs } from '../services/d-user-service'
import {Row, Col, Container} from 'reactstrap' 
import Doc from './Doc'
import '../css/headings.css'


function DoctorList() {


    const [doctor, setdoctor] = useState()




    useEffect(() => {

        //load all the post from server
        loadAllDocs().then((data) => {
            console.log(data)
            setdoctor(data)
        }).catch(error=>{
            console.log(error)
        })

    }, [])



    return(
        
        <Base>
        <Container className="mt-3">
            <div className="container-fluid">
                <Row>
                    <Col md={
                        {
                            size:10,
                            offset:1
                        }
                    }>

                        <h1 className="heading"><center>The Number of Total Doctors : {doctor?.length}</center></h1>

                        {/* <Doc/> */}

                        {
                            doctor?.map((doc) => (
                                <Doc doc={doc} key={doc.did}/>
                            ))
                        }

                    </Col>
                </Row>
            </div>

        </Container>
        </Base>

    )
}


export default DoctorList ;