import { Row, Col, Container } from "react-bootstrap"
import items from "../../data/topbar.json"

export default function TopBarNew({ review }) {
  return (
    <section className="topbar-bg" >
      <div className="container">
          <Row className = "topbar" >
            <Col lg = "6" md="6" xs ="12" >
              <div> 
                <p className="info">{items.content}</p>
              </div>
            </Col>
            <Col lg = "6" md = "6" xs = "12">
              <div >
              <ul> 
                  <li><a href = "#" >{items.sign_link}</a></li>
                  <li> |</li>
                  <li ><a className = "active" href = "#" >{items.register_link}</a></li>
                </ul>
            </div>
            </Col>
          </Row>
         </div>
      </section>

  )
}