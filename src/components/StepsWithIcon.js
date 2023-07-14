import { Row, Col, Container, Button} from "react-bootstrap"
import items from "../data/stepswithiconData.json"


export default function StepsWithIcon({ review }) {
  return (
    <section className="StepsWithIcon">
        <div className="container">
            <div className="heading">
                <h3>{items.heading}</h3>
            </div>
        <Row className="icons">
            <Col lg = "4" md="4" xs ="12">
                <div className="create_column">
                    <img src = "/img/Icon1.png" alt= "create_icon"></img>
                    <h5>{items.step_1}</h5>
                    <p>{items.description_1}</p>
                </div>
            </Col>
            <Col lg = "4" md="4" xs ="12">
                <div className="icons">
                    <img src = "/img/Icon2.png" alt= "create_icon" className="mx_auto text-center"></img>
                    <h5>{items.step_2}</h5>
                    <p>{items.description_2}</p>
                </div>
            </Col>
            <Col lg = "4" md="4" xs ="12">
                <div className="icons">
                    <img src = "/img/Icon3.png" alt= "create_icon"></img>
                    <h5>{items.step_3}</h5>
                    <p>{items.description_3}</p>
                </div>
            </Col>
        </Row>
        </div>
    </section>
  )}