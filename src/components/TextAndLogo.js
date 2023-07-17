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
                God’s Love We Deliver cooks and home-delivers nutritious, medically tailored meals for people too sick to shop or
                cook for themselves. To support the health of our clients, we also provide ongoing nutrition assessment,
                education, and counseling. All of our services are provided free to clients and full of love.
              </p>
              <a className="primary_btn" href="#">
                our website
              </a>
            </div>
          </Col>
          <Col lg="6" md="6" xs="12">
            <div>
              <img className="w-100" src="/img/Logo_God's Love.png" />
              <h3>Donate to God's Love We Deliver</h3>
              <a href="#">donate now</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
