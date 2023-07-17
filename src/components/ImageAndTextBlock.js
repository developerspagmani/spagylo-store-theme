import { Row, Col, Container, Button } from "react-bootstrap"
import items from "../data/textandimage_data.json"

export default function ImageAndTextBlock({ review }) {
  return (
    <section className="ImageAndTextBlock">
      <Container>
        <Row className="imgandtext">
          <Col lg="6" md="6" xs="12">
            <div className="imgandtext_image">
              <img className="w-100" src="/img/Image Section _01.png" />
            </div>
          </Col>
          <Col lg="6" md="6" xs="12">
            <div className="imgandtext_content">
              <h2>{items.heading}</h2>
              <p> {items.description}</p>
              <a href="#">Request a demo</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
