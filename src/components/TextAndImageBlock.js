import { Row, Col, Container, Button } from "react-bootstrap"
import items from "../data/textandimage_data.json"

export default function TextAndImageBlock({ review }) {
  return (
    <section>
      <Container>
        <Row className="textandimage">
          <Col lg="6" md="6" xs="12">
            <div className="textandimage_content">
              <h2> Become a Preferred Nonprofit Partner</h2>
              <p>
                Simple per-transaction pricing means there’s no risk for you.
                <ul>
                  <li>No contracts required</li>
                  <li> No monthly fees</li>
                  <li>No setup fees</li>
                </ul>
              </p>
              <a className="primary_btn" href="#">
                Request a demo
              </a>
            </div>
          </Col>
          <Col lg="6" md="6" xs="12">
            <div>
              <img className="w-100" src="/img/Image Section 4.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
