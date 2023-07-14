import { Row, Col, Container, Button} from "react-bootstrap"
// import items from "../../data/textandimage_data.json"


export default function ThreeImageBlock({ review }) {
  return (
    <section className="threeimageblock">
     <div className="container">
             <h3>Client Holiday Cards</h3>              
          <Row >
              <Col lg="3" md="3" xs="12">
                <div>
                    <img src="/img/Card1.jpg" alt="card" className="w-100"/>        
                     <h5><a  href="/detail-1">Harmony</a></h5>
                     <p>God’s Love We Deliver</p>  
                </div>
              </Col>
              <Col lg="3" md="3" xs="12">
                <div >
                   <img src="/img/Rectangle 8.jpg" alt="card" className="w-100"/>
                    <h5><a  href="/detail-1">Colors of Fall</a></h5>
                    <p >God’s Love We Deliver</p>
                  </div>
              </Col>
              <Col lg="3" md="3" xs="12">
                <div>
                  <img src="/img/Card3.jpg" alt="card" className="w-100"/>                  
                  <h5><a href="/detail-1">Ho Ho Ho</a></h5>
                  <p >God’s Love We Deliver</p>
                 </div>
              </Col>
          </Row>
       </div>
     </section>
  )}