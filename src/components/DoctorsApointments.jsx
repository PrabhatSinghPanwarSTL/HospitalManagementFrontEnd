import React, { useEffect, useState } from 'react' ;
import { toast } from 'react-toastify';
import { Col, Row } from 'reactstrap';
import { getCurrentUserDetail } from '../auth/indexD';
import { deleteApo, getAllApoDoc } from '../services/apointment-service';
import Dal from './Dal';
import "../css/headings.css"


function Doctorsapo() {


    const [data, setData] = useState() ;

    useEffect(() => {
        console.log(getCurrentUserDetail())

        getAllApoDoc(getCurrentUserDetail().did).then(data => {
            console.log(data)
            setData([...data])
        })
        .catch(error => {
            console.log(error)
            toast.error("Error In Loading User")
        })
    }, [])


    //fuction to delete doctor's appointment
    function deletePost(post) {
        //going to deletepost
        deleteApo(post.aid).then(res=>{
            console.log(res)
            toast.success("Apointment Is Done")
        })
        .catch(error=>{
            console.log(error)
            toast.error("error in successing the appointment")
        })
    }


    return(
        <div className="container-fluid">
                <Row>
                    <Col md={
                        {
                            size:10,
                            offset:1
                        }
                    }>

                        <h1 className="heading"><center>Your Total Number of Appointments are : {data?.length}</center></h1>



                        {
                            data?.map((doc) => (
                                <Dal doc={doc} key={doc.aid} deletePost={deletePost}/>
                            ))
                        }

                    </Col>
                </Row>
            </div>
    )
} 


export default Doctorsapo ;