import { Row, Col, Container, Button} from "react-bootstrap"
// import items from "../../data/textandimage_data.json"


export default function NumberIconBlock({ review }) {
  return (
<section className="numbericonblock">
<img src="/img/paper_top.png" class="paper_top" alt="paper-top"/>
  <div className="numbericon_fluid">
    <Container>
      <h3>How it Works for Supporters</h3>       
      <Row className="numbericonblock_space">
        <Col xl="4" lg="4" md="4" xs="12" >
          <img src="/img/step_1.svg" alt ="one"></img>
          <p>Supporters select a card design, write a personal message and choose a donation amount</p>
        </Col>
        <Col xl="4" lg="4" md="4" xs="12" className="space">       
                  <img src="/img/step2.svg"alt="two"></img>   
          <p>They upload the names and addresses of the people they want to receive cards</p>     
        </Col>
        <Col xl="4" lg="4" md="4" xs="12">     
          <img src = "/img/step_3.svg" alt="three"></img>
          <p>Cards are sent automatically. No addressing, stamping, or trips to the post office necessary.</p>
        </Col>
      </Row>
    </Container>
  </div>
      <img src="/img/paper_bottom.png" class="paper_bottom" alt="paper-bottom"></img>
</section>
)}