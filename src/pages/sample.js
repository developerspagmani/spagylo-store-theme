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
export default function Home3() {
    return (
      <>
<section className="pt6 pb-5 bg-gray-100" style={{ paddingTop: "200px" }}>
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>How it Works for Nonprofits</h3>              
            </Col>
          </Row>
          <Row className="justify-content-center">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/createIcon.png"alt="create Icon"/>
                    </div>
                    <div class="py-2">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="/detail-1">Create</a></h3>
                        <p class="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/createIcon.png"alt="create Icon"/>
                    </div>
                    <div class="py-2">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="/detail-1">Create</a></h3>
                        <p class="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/createIcon.png"alt="create Icon"/>
                    </div>
                    <div class="py-2">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="/detail-1">Create</a></h3>
                        <p class="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
<section className="pt-6 pb-5" style={{ paddingTop: "200px" }}>
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>Client Holiday Cards</h3>              
            </Col>
          </Row>
          <Row className="justify-content-around">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Card1.jpg" alt="card" className="w-100"/>
                    </div>
                    <div class="py-3">
                        <h3 class="h6 text-capitilize mb-1"><a class="text-dark" href="/detail-1">Harmony</a></h3>
                        <p class="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Rectangle 8.jpg" alt="card" className="w-100"/>
                    </div>
                    <div class="py-3">
                        <h3 class="h6 text-capitilize mb-1"><a class="text-dark" href="/detail-1">Colors of Fall</a></h3>
                        <p class="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Card3.jpg" alt="card" className="w-100"/>
                    </div>
                    <div class="py-3">
                        <h3 class="h6 text-capitilize mb-1"><a class="text-dark" href="/detail-1">Ho Ho Ho</a></h3>
                        <p class="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
<section className="pt-6 pb-5 bg-gray-100">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>How it Works for Supporters</h3>              
            </Col>
          </Row>
          <Row className="justify-content-center">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark">1.</a></h3>
                    </div>
                    <div class="py-2">                        
                        <p class="text-muted text-sm mb-1">Supporters select a card design, write a personal message and choose a donation amount</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                <div className="productImage">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark">2.</a></h3>
                    </div>
                    <div class="py-2">                        
                        <p class="text-muted text-sm mb-1">They upload the names and addresses of the people they want to receive cards</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                <div className="productImage">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark">3.</a></h3>
                    </div>
                    <div class="py-2">                        
                        <p class="text-muted text-sm mb-1">Cards are sent automatically. No addressing, stamping, or trips to the post office necessary.</p>
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
<section className="pt6 pb-5 bg-gray-100" style={{ paddingTop: "200px" }}>
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>How it Works for Nonprofits</h3>              
            </Col>
          </Row>
          <Row className="justify-content-center">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/createIcon.png"alt="create Icon"/>
                    </div>
                    <div class="py-2">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="/detail-1">Create</a></h3>
                        <p class="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/createIcon.png"alt="create Icon"/>
                    </div>
                    <div class="py-2">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="/detail-1">Create</a></h3>
                        <p class="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/createIcon.png"alt="create Icon"/>
                    </div>
                    <div class="py-2">
                        <h3 class="h6 text-uppercase mb-1"><a class="text-dark" href="/detail-1">Create</a></h3>
                        <p class="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
<section className="pt-6 pb-5" style={{ paddingTop: "200px" }}>
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>Client Holiday Cards</h3>              
            </Col>
          </Row>
          <Row className="justify-content-around">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/card.jpg" alt="card" className="w-100"/>
                    </div>
                    <div class="py-3">
                        <h3 class="h6 text-capitilize mb-1"><a class="text-dark" href="/detail-1">Harmony</a></h3>
                        <p class="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/card.jpg" alt="card" className="w-100"/>
                    </div>
                    <div class="py-3">
                        <h3 class="h6 text-capitilize mb-1"><a class="text-dark" href="/detail-1">Colors of Fall</a></h3>
                        <p class="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/card.jpg" alt="card" className="w-100"/>
                    </div>
                    <div class="py-3">
                        <h3 class="h6 text-capitilize mb-1"><a class="text-dark" href="/detail-1">Ho Ho Ho</a></h3>
                        <p class="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
      <section className=" bg-white-100">
        <Container>
          <Row className="justify-content-center">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <h3 class="h2 mb-1 text-start">Become A Preferred Nonprofit Partner</h3>
                    </div>
                                          
                      <p class="text-muted text-sm text-start  mb-1">Simple per-transaction pricing means there’s no risk for you.
                        <ul>
                          <li>No contracts required</li>
                            <li>No monthly fees</li>
                            <li>No setup fees</li> 
                        </ul>
                      </p>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                  <div className="productImage">
                        <img src="/img/Image Section 4.png" alt="card" className="w-100" style={{ paddingTop: "200px" }}/>
                  </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
</>
  )
}
