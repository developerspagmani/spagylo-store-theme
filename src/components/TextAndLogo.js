import { Row, Col, Container, Button } from "react-bootstrap"
import items from "../data/textandimage_data.json"

export default function TextAndLogo({ review }) {
  return (
    <section>
      <Container>
        <Row className="textandlogo">
          <Col lg="6" md="6" xs="12">
            
            <div className="textandlogo_content">
              <h2>God's Love We Deliver</h2>
              <p>
                God’s Love We Deliver cooks and home-delivers nutritious,
                medically tailored meals for people too sick to shop or cook for
                themselves. To support the health of our clients, we also
                provide ongoing nutrition assessment, education, and counseling.
                All of our services are provided free to clients and full of
                love.
              </p>
              <div className="centerbutton" >
                <a className="link" href="#">our website</a>
                <img src="/img/Arrow Right.png"></img>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6" xs="12">
          <img src="/img/paper_top.png" class="paper_top" alt="paper-top" />
          {/* <img src = "/img/paper_left.svg"></img> */}
          {/* <img src = "/img/paper_right.svg"></img> */}
          <div className="textandlogo_bgimage">
            <div className="logoimage">
              <img src="/img/God's Love_logo.png" />
              <h3>Donate to God's Love We Deliver</h3>
              <a href="#">donate now</a>
            </div>
            </div>
            <img src="/img/paper_bottom.png" class="paper_bottom" alt="paper-bottom"></img>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
