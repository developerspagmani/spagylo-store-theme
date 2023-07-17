import { Row, Col, Container, Button } from "react-bootstrap"


export default function HelpBlock({ items }) {
  return (
    <>

    <section className="helpblock">
    <img src="/img/paper_top.png" class="paper_top" alt="paper-top"/>
      <div className="help_bgimage">
        <Container>
            <Row>
              <h3 className="help_heading">Need  Help with Your Order?</h3>
              <div className="centerbutton"><a  href = "#" className="primary_btn">CONTACT US NOW</a></div>
              </Row>
        </Container>
        </div>
        <img src="/img/paper_bottom.png" class="paper_bottom" alt="paper-bottom"/>
    </section>
    </>
  )}