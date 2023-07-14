import { Container, Row, Col, Button, Card } from "react-bootstrap"

import Image from "../components/CustomImage"
import Link from "next/link"

import Product from "../components/Product"
import SwiperProducts from "../components/SwiperProducts"

import products from "../data/products.json"

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
      title: "Homepage - v.2",
    },
  }
}

export default function Home2() {
  return (
    <>
      <Container fluid>
      <Row>
            <Col xl="8" className="mx-auto text-center mb-15">
            <Image className = "mx-auto "
                src="/img/GG Logo.png"
                // layout = "fill"
                width={170}
                height={150}
                alt="Gentlemen"
                priority
            />
            </Col>
          </Row>
       
      
        <Row>
          <Col
            lg="6"
            className=" split-screen-column"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div className=" text-start text-black ">
            
            <h4 className= "text-primary text-start ">
              Gifting Good 
              </h4>
              <h1 >
              Bring in More Donations with Holiday Cards
              </h1>
              <p className="lead mb-4 fs-4 fw-400 text-black">
              Nonprofits: Offer your supporters a convenient and meaningful way to give.
              </p>
              <p class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                <Link href="/category-full" passHref >
                  <Button className="bg-orange">
                  Request a demo
                  </Button>
                </Link>
              </p>
            </div>
          </Col>
          <Col
            lg="6"
            className="position-relative split-screen-column align-items-center align-items-lg-end"
            style={{
               backgroundColor: "#ffffff",
            }}
          >
            { <Image
              src="/img/Cards.png"
             
              width={550}
              height={550}
              alt="Ladies"
              className="bg-image"
              priority
            /> }
            
          </Col>
        </Row>
      </Container>

      <section className="pt-6 pb-5">
      <Container fluid>
        <Row>
          
          <Col
            lg="6"
            className="position-relative split-screen-column align-items-center align-items-lg-end"
            style={{
               backgroundColor: "#ffffff",
            }}
          >
            { <Image
              src="/img/Image Section 1.png"
             width = {550}
             height = {414}
              alt="Ladies"
              className="bg-image"
              priority
            /> }
            
          </Col>
          <Col
            lg="6"
            className=" split-screen-column"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div className=" text-start text-black ">
              <h1 >
              How Your Nonprofit Can Benefit
              </h1>
              <p className="lead mb-4 fs-4 fw-600 text-black">
              Your supporters simply choose a beautiful card design, write a personal message, upload the recipients' address, and let us take care of the rest.
               Every card purchased includes a donation to your nonprofit, making it a win-win for everyone.
              </p>
              <p class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                <Link href="/category-full" passHref >
                  <Button className="bg-orange">
                  Request a demo
                  </Button>
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      </section>

      <section className="py-6 bg-gray-100">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>Client Holiday Cards</h3>
            </Col>
          </Row>
          <Row>
            <Col md="4" className="d-flex align-items-md-stretch mb-4 mb-md-0">
              <div className="d-flex align-items-center text-white dark-overlay w-100 text-center py-6 py-md-0">
                <Image
                  src="/img/Card #1.svg"
                  layout = "fill"
                //   width = {330}
                //   height = {330}
                  alt="Men"
                  className="bg-image"
                />
                {/* <div className="card-img-overlay w-100 overlay-content">
                  <h2 className="display-2 fw-bold text-uppercase mb-0">Men</h2>
                </div> */}
              </div>
            </Col>
            {/* <Col md="4">
             
                <Image
                  className="card-img"
                  src="/img/Card2.png"
                  alt="Ladies"
                  width={600}
                  height={400}
                />
                <Link href="/category">
                  <a className="tile-link" />
                </Link>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="text-center w-100 overlay-content">
                    <h2 className="display-4 fw-bold text-uppercase text-center mb-0">
                      Ladies
                    </h2>
                  </div>  
                </div>
             </Col> */}
             {/* <Col md="4">
             <Image
                  className="card-img"
                  src="/img/Card #3.png"
                  alt="Accessories"
                  width={600}
                  height={413}
                />
                <Link href="/category">
                  <a className="tile-link" />
                </Link>
                <div className="card-img-overlay d-flex align-items-center">
                  <div className="text-center w-100 overlay-content">
                    <h2 className="display-4 fw-bold text-uppercase text-center mb-0">
                      Accessories
                    </h2>
                  </div>
                </div>
            </Col> */}
          </Row>
        </Container>
      </section>
                
      <section className="pt-6 pb-5">
        <Row>
          <Col
            lg="6"
            className=" split-screen-column"
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <div className=" text-start text-black ">
              <h1 >
              Become a Preferred Nonprofit Partner
              </h1>
              <p className="lead mb-4 fs-4 fw-400 text-black">
                Simple per-transaction pricing means there’s no risk for you.
                <ul>
                    <li>No contracts required</li>
                    <li> No monthly fees</li>
                    <li>No setup fees</li>
                   
                </ul>
                
              </p>
              <p class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                <Link href="/category-full" passHref >
                  <Button className="bg-orange">
                  Request a demo
                  </Button>
                </Link>
              </p>
            </div>
          </Col>
          <Col
            lg="6"
            className="position-relative split-screen-column align-items-center align-items-lg-end"
            style={{
               backgroundColor: "#ffffff",
            }}
          >
            { <Image
              src="/img/Image Section 4.png"
             
              width={550}
              height={550}
              alt="Ladies"
              className="bg-image"
              priority
            /> }
            
          </Col>
        </Row>
      </section>
      </>
  )
}
