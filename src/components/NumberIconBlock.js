import { Row, Col, Container, Button} from "react-bootstrap"
// import items from "../../data/textandimage_data.json"


export default function NumberIconBlock({ review }) {
  return (

<section className="numbericonblock">
        <div className="container">
          <h3>How it Works for Supporters</h3>              
         <Row className="space">
              <Col xl="3" lg="3" md="4" xs="6" >
                <img src="/img/step_1.svg" alt ="one"></img>
                 <p>Supporters select a card design, write a personal message and choose a donation amount</p>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6" className="space">               
                <img src="/img/step2.svg"alt="two"></img>      
                  <p>They upload the names and addresses of the people they want to receive cards</p>         
               </Col>
              <Col xl="3" lg="3" md="4" xs="6">           
                <img src = "/img/step_3.svg" alt="three"></img>
                <p>Cards are sent automatically. No addressing, stamping, or trips to the post office necessary.</p>
              </Col>
          </Row>
        </div>
      </section>
  )}