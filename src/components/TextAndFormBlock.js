import { Row, Col, Container, Button} from "react-bootstrap"
// import items from "../../data/textandimage_data.json"
import ContactFormNew from "../components/ContactFormNew"

export default function TextAndFormBlock({ review }) {
  return (
    <section>
        <img src="/img/paper_top.png" class="paper_top" alt="paper-top"/>
        <div className="textandform_bgimage"> 
        <div className ="container">
          <Row className="textandform">
            <Col  lg = "6"  md="6" xs ="12">
              <h4>Request a Demo</h4>
              <h2>Get More Info</h2>
              <p>
              Inquire for more information about how your nonprofit can participate in the Gifting Good Holiday Card program.
              </p>
            </Col>
            <Col lg = "6"  md="6" xs ="12" >
              <ContactFormNew />
            </Col>
          </Row>
        </div>
        </div>
        <img src="/img/paper_bottom.png" class="paper_bottom" alt="paper-bottom"></img>
      </section>
  )}