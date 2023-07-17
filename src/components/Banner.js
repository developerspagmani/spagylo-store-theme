import { Row, Col, Container, Button } from "react-bootstrap"
import items from "../data/banner_data.json"

export default function Banner({ review }) {
  return (
    <section className="Banner">
      <div className="bg_paper">
        <Container>
          <Row>
            <Col lg="6" md="6" xs="12">
              <div className="banner">
                <h4>{items.subtitle}</h4>
                <h1>{items.heading}</h1>
                <p>{items.description}</p>
                <a href="/">Request a demo</a>
              </div>
            </Col>
            <Col lg="6" md="6" xs="12">
              <div className="banner">
                <img className="w-100" src="/img/Cards.png" alt="image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <img
        src="./img/paper_bottom.png"
        class="paper_bottom"
        alt="paper-bottom"
      />
    </section>
  )
}
