import { Row, Col, Container, Button } from "react-bootstrap"

export default function HolidayCardProcessBlock({ items }) {
  return (
    <section className="HolidayCardProcessBlock">
      <Container>
        <h3 className="hcprocess"> We Make it Easy for You</h3>
        <Row>
          <Col lg="2">
            <div className="p-3">
              <img src="/img/Vector 5.png" className="px-6  pb-4"></img>
              <p className=" px-3 pb-4 h6 text-center"> Select a Card Design</p>
              <img src="/img/Icon1.png" className="px-5"></img>
            </div>
          </Col>
          <Col lg="2">
            <div className="p-4">
              <img src="/img/Vector 5.png" className="px-6 pb-4"></img>
              <p className=" px-3 pb-4 h6 text-center">
                 Write a Personal Message
              </p>
              <img src="/img/Icon_2.png" className="px-5"></img>
            </div>
          </Col>
          <Col lg="2">
            <div className="p-4">
              <img src="/img/Vector 6.png" className="px-6 pb-4"></img>
              <p className=" px-4 pb-5 h6 text-center">
                Upload Your Recipients’ Info
              </p>
              <img src="/img/Icon _3.png" className="px-5"></img>
            </div>
          </Col>
          <Col lg="2">
            <div className="p-4">
              <img src="/img/Vector 7.png " className="px-6 pb-4"></img>
              <p className=" px-3 pb-4 h6 text-center">
                 Choose Your Donation Amount
              </p>
              <img src="/img/Icon 4.png" className="px-5"></img>
            </div>
          </Col>
          <Col lg="2">
            <div className="p-4">
              <img src="/img/Ellipse 4.png" className="px-6 pb-4"></img>
              <p className=" px-2 pb-4 h6 text-center">
                We’ll Print and Mail Your Cards for You
              </p>
              <img src="/img/Icon 5.png" className="px-5"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
