import { Row, Col, Container, Button} from "react-bootstrap"
// import items from "../../data/textandimage_data.json"


export default function NumberIconBlock({ review }) {
  return (

<section className="numbericonblock">
        <div className="container">
          <h3>How it Works for Supporters</h3>              
         <Row>
              <Col xl="3" lg="3" md="4" xs="6">
                    <div><img src="/img/step#1.svg" alt ="one"></img>
                        <p>Supporters select a card design, write a personal message and choose a donation amount</p>
                    </div>
                 </Col>
              <Col xl="3" lg="3" md="4" xs="6">               
                          <div><img src="/img/#2.png"alt="two"></img></div>      
                        <p>They upload the names and addresses of the people they want to receive cards</p>         
                      </Col>
              <Col xl="3" lg="3" md="4" xs="6">           
                         <div><img src = "/img/#3.png" alt="three"></img></div>
                        <p>Cards are sent automatically. No addressing, stamping, or trips to the post office necessary.</p>
              </Col>
          </Row>
        </div>
      </section>
  )}