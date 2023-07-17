import { Row, Col, Container, Button} from "react-bootstrap"

export default function Logo({ review }) {
  return (
    
    <section className="logo_bg">
            <Container>
            <Row>
                  <Col lg = "12"  >
                    <div className="logo">
                        <img src ="/img/GG Logo.png" alt= "logo"/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}