import { Row, Col, Container } from "react-bootstrap"
import items from "../../data/topbar.json"

export default function TopBarNew({  }) {
  return (
    <section className="topbar-bg">
      <Container>
        <Row className="topbar">
          <Col lg="6" md="6" xs="12">
            <p className="info">{items.content}</p>
          </Col>
          <Col lg="6" md="6" xs="12">
            <ul>
              <li>
                <a href="#">{items.sign_link}</a>
              </li>
              <li> |</li>
              <li>
                <a className="active" href="#">
                  {items.register_link}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
