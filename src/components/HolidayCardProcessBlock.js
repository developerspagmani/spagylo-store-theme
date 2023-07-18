import { Row, Col, Container, Button } from "react-bootstrap"

export default function HolidayCardProcessBlock({ items }) {
  return (

    // <section>
    //       <Container>
    //         <Row>
    //           <Col lg = "12">
    //             <p className="h3 mx-auto text-center">We Make it Easy for You</p>
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col lg = "2">
    //             <div className="p-3">
    //             <div className="processflow"><img src = "/img/Vector 5.png" className="px-6  pb-4 vectorimage"></img></div>
    //             <p className=" px-3 pb-4 h6 text-center"> Select a Card Design</p>
    //             <img src = "/img/Icon1.png" className="px-5 "></img>
    //             </div>
    //           </Col>
    //           <Col lg = "2">
    //             <div className="p-4">
    //               <img src = "/img/Vector 5.png" className="px-6 pb-4"></img>
    //               <p className=" px-3 pb-4 h6 text-center"> Write a Personal Message</p>
    //               <img src = "/img/Icon_2.png" className="px-5"></img>
    //               </div>
    //           </Col>
    //           <Col lg = "2">
    //             <div className="p-4">
    //               <img src = "/img/Vector 6.png" className="px-6 pb-4"></img>
    //               <p className=" px-4 pb-5 h6 text-center">Upload Your Recipients’ Info</p>
    //               <img src = "/img/Icon _3.png" className="px-5"></img>
    //               </div>
    //           </Col>
    //           <Col lg = "2">
    //             <div className="p-4">
    //               <img src = "/img/Vector 7.png " className="px-6 pb-4"></img>
    //               <p className=" px-3 pb-4 h6 text-center"> Choose Your Donation Amount</p>
    //               <img src = "/img/Icon 4.png" className="px-5"></img>
    //               </div>
    //           </Col>
    //           <Col lg = "2">
    //             <div className="p-4">
    //               <img src = "/img/Ellipse 4.png" className="px-6 pb-4"></img>
    //               <p className=" px-2 pb-4 h6 text-center">We’ll Print and Mail Your Cards for You</p>
    //               <img src = "/img/Icon 5.png" className="px-5"></img>
    //               </div>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </section>



    <section className="HolidayCardprocess">
      <Container>
        <div className="holidaycardprocess">
          <h3>We Make it Easy for You</h3>
        </div>
        <Row className="colspace">
          <Col lg="2" md="6" xs="12">
            <div className="process_content ">
              <div className="processflow"><img src="/img/Vector 5.png" className=" vectorimage"></img></div>
              <p>Select a Card Design</p>
             <div> <img src="/img/Icon1.png"></img></div>
            </div>
          </Col>
          <Col lg="2" md="6" xs="12">
            <div className="process_content">
            <div className="processflow"> <img src="/img/Vector 5.png" className=" vectorimage"></img></div>
              <p> Write a Personal Message</p>
              <img src="/img/Icon_2.png"></img>
            </div>
          </Col>
          <Col lg="2" md="6" xs="12" >
            <div className="process_content">
            <div className="processflow"><img src="/img/Vector 6.png" className=" vectorimage"></img></div>
              <p>Upload Your Recipients’ Info</p>
              <img src="/img/Icon _3.png"></img>
            </div>
          </Col>
          <Col lg="3" md="6" xs="12">
            <div className="process_content">
            <div className="processflow"> <img src="/img/Vector 7.png" className=" vectorimage"></img></div>
              <p> Choose Your Donation Amount</p>
              <img src="/img/Icon 4.png"></img>
            </div>
          </Col>
          <Col lg="3" md="6" xs="12" >
            <div className="process_content">
            <div className="processflow">  <img src="/img/Ellipse 4.png" className=" vectorimage"></img></div>
              <p>We’ll Print and Mail Your Cards for You</p>
              <img src="/img/Icon 5.png"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
