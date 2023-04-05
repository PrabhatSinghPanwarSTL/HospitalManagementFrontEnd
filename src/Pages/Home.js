// import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
import { Card, Row,Col } from "reactstrap";
import Base from "../components/Base";
import "../css/Styling.css"

const Home = () => {
    return (
        <Base>

            <div>

                <h1 className="heading"><center>WELCOME</center></h1>

                {/* <p>Chose Your Options</p>
                <Button className="show" tag={Link} to={'/loginasd'}>Doctor</Button>
                <Button className="show" tag={Link} to={'/loginasp'} >Patient</Button> */}
        <Row>
            <Col md={{size:10,offset:1}}>
                {/* <Card className="my-2"> */}
                    
                <p>
                    As our country emerges from the pandemic, Apollo will focus its efforts on the NCD epidemic, including diabetes, CVD and cancer.<br/>
                    Sedentary lifestyles and unhealthy diets have made our youth susceptible to these chronic diseases. <br/>
                    Over 50% of premature mortality in India in the 30+ age group can be attributed to NCDs. <br/>
                    India will spend around $5 trillion by 2030 to combat NCDs.<br/>

 To become a developed nation, we must first ensure that we are a healthy nation,<br/> and Apollo is committed to battling the NCD epidemic to ensure the youth of our nation remains healthy and can accelerate our nation’s development.<br/>


 But there is much more to be done, and I believe we are just getting started. <br/>
 Over the next 4 decades, we will work towards making healthcare more proactive and preventive. <br/>
 In fact, our measure of success would be if you never need to visit a hospital at all.<br/>

 We’ve made significant investments in this area with ProHealth. It is a unique program that combines artificial intelligence, <br/>cutting-edge diagnostics and physician evaluation to provide you insights into your health risks as well as a personalised path to prevention.<br/>

 Our Prime Minister’s clarion call for ‘Heal in India’ is a great endorsement and a signal that the world needs a new vision for healthcare. <br/>
 A system that is holistic. <br/>
 A system that is proactive and a system that optimises quality of life. <br/>
 I believe India, with its heritage of holistic healthcare, can take the lead in providing this new system of care to the world. <br/>
 Patients from over 150 countries come to India for treatment that is at par with western countries at a fraction of the cost. <br/>
 With the ‘Heal in India’ initiative, I am sure we will have the opportunity to 
 serve many more people from around the world right here in India.</p>
 {/* </Card> */}
 </Col></Row>

            </div>

        </Base>
        )
}

export default Home;