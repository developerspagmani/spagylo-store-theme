import { Row, Col, Container, Button } from "react-bootstrap"

export default function HolidayCardProcessBlock({ items }) {
  return (
    <section className="HolidayCardprocess">
      <Container>
        <div className="holidaycardprocess">
          <h3>We Make it Easy for You</h3>
        </div>
        <Row>
          <Col lg="2">
            <div className="process_content">
              <img src="/img/Vector 5.png"></img>
              <p> Select a Card Design</p>
              <img src="/img/Icon1.png"></img>
            </div>
          </Col>
          <Col lg="2">
            <div>
              <img src="/img/Vector 5.png"></img>
              <p> Write a Personal Message</p>
              <img src="/img/Icon_2.png"></img>
            </div>
          </Col>
          <Col lg="2">
            <div>
              <img src="/img/Vector 6.png"></img>
              <p>Upload Your Recipients’ Info</p>
              <img src="/img/Icon _3.png"></img>
            </div>
          </Col>
          <Col lg="2">
            <div>
              <img src="/img/Vector 7.png "></img>
              <p> Choose Your Donation Amount</p>
              <img src="/img/Icon 4.png"></img>
            </div>
          </Col>
          <Col lg="2">
            <div>
              <img src="/img/Ellipse 4.png"></img>
              <p>We’ll Print and Mail Your Cards for You</p>
              <img src="/img/Icon 5.png"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
