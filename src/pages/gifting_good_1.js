import { Container, Row, Col, Button, Card } from "react-bootstrap"
import ContactFormNew from "../components/ContactFormNew"
import TopBarNew from "../components/Header/topBarNew"
import Logo from "../components/Logo"
import Banner from "../components/Banner"
import items from "../data/non-profit_banner_data.json"
import HolidayCardProcessBlock from "../components/HolidayCardProcessBlock"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        dark: true,
        classes:
          "bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light",
        color: "transparent",
      },
      headerAbsolute: true,
      title: "Gifting Good HomePage",
    },
  }
}

export default function Home1() {
    return (
      <>
       <TopBarNew/> 
       <Logo/>
       <Banner items={items}/> 
       <HolidayCardProcessBlock/>
       {/* <section className=" pb-5 bg-white-100" >
            <Container>
                <Row>
                    <Col lg = "12" >
                        <div >
                          <p className = "bg-orange text-white px-5" style={{height:"45px"}}>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                  <Col lg = "4">
                    <div className="p-5">
                      <img src = "/img/Logo_God's Love.png" className = "border border-top-0 start-0 end-0 border-black"></img>
                    </div>
                  </Col>
                  <Col lg = "4">
                    <div>
                      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <a className="nav-link px-5 " href="#">HOME</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link px-5" href="#">SHOP</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link px-5" href="#">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </Col>
                 <Col>
                  <div className="px-5">
                    <img src = "/img/Vector.png" className="mx-auto d-block p-3" ></img>
                  </div>
                 </Col>
                </Row>
                <Row>
                  
                  <Col lg= "6">
                  <div className = "px-1">
                      <p className =" px-5 h6 text-primary">Gifting Good </p>
                      <div>
                        <p className="h2 px-5">Holiday Cards That Give Back</p>
                        <p className="p-5">Your gift of holiday tribute cards makes a positive impact on [cause]. For a minimum of $15 per name, we will address, stamp and mail tribute cards to your friends and loved ones with your return address on the envelope. Just upload your mailing list and we’ll handle the rest!</p>
                      </div>
                      <div className="px-5">
                      <Button className="bg-orange">BUY A CARD</Button>
                      </div>
                    </div>
                  </Col>
                  <Col lg = "6">
                    <img src = "/img/Card Image.png"></img>
                  </Col>
                </Row>
            </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg = "12">
                <p className="h3 mx-auto text-center">We Make it Easy for You</p>
              </Col>
            </Row>
            <Row>
              <Col lg = "2">
                <div className="p-3">
                <img src = "/img/Vector 5.png" className="px-6  pb-4"></img>
                <p className=" px-3 pb-4 h6 text-center"> Select a Card Design</p>
                <img src = "/img/Icon1.png" className="px-5"></img>
                </div>
              </Col>
              <Col lg = "2">
                <div className="p-4">
                  <img src = "/img/Vector 5.png" className="px-6 pb-4"></img>
                  <p className=" px-3 pb-4 h6 text-center"> Write a Personal Message</p>
                  <img src = "/img/Icon_2.png" className="px-5"></img>
                  </div>
              </Col>
              <Col lg = "2">
                <div className="p-4">
                  <img src = "/img/Vector 6.png" className="px-6 pb-4"></img>
                  <p className=" px-4 pb-5 h6 text-center">Upload Your Recipients’ Info</p>
                  <img src = "/img/Icon _3.png" className="px-5"></img>
                  </div>
              </Col>
              <Col lg = "2">
                <div className="p-4">
                  <img src = "/img/Vector 7.png " className="px-6 pb-4"></img>
                  <p className=" px-3 pb-4 h6 text-center"> Choose Your Donation Amount</p>
                  <img src = "/img/Icon 4.png" className="px-5"></img>
                  </div>
              </Col>
              <Col lg = "2">
                <div className="p-4">
                  <img src = "/img/Ellipse 4.png" className="px-6 pb-4"></img>
                  <p className=" px-2 pb-4 h6 text-center">We’ll Print and Mail Your Cards for You</p>
                  <img src = "/img/Icon 5.png" className="px-5"></img>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              
            </Row>
          </Container>
        </section> */}
      </>
    )
}