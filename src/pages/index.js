import { Container, Row, Col } from "react-bootstrap"

import CardLookbook from "../components/CardLookbook"
import Swiper from "../components/Swiper"

import data from "../data/index.json"
import Link from "next/link"


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
      title: "Homepage",
    },
  }
}

export default function Home() {
  return (
    <>
      <Swiper
        data={data.swiper}
        autoplay={{
          delay: 5000,
        }}
        loop
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        speed={1500}
        parallax
        navigation
        pagination
        className="home-full-slider h-100 "
        containerclass="container-fluid py-5"
        sectionClass="mb-2 home-full-slider-wrapper"
        eager
      />
      {/*<section>
        <Container fluid className="g-2">
          <Row className="g-2">
            {data.lookbook.map((card, index) => {
              const columns = index < 2 ? { md: 6 } : { lg: 4 }
              const type = index < 2 ? "big" : "small"
              return (
                <Col {...columns} key={index}>
                  <CardLookbook data={card} cardType={type} />
                </Col>
              )
            })}
          </Row>
        </Container>
          </section> */}

      <section className="productListBlock py-6">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3 className="text-uppercase">Start by Choosing Your Card Design</h3>
            </Col>
          </Row>

          <Row>
            <Col xs="6" lg="6">
              <div className="mb-4">
                <Link href="#">
                  <a>
                    <img className="img-fluid w-100" src="/img/Card2.jpg" alt="Card1" />
                  </a>
                </Link>
                <div className="py-2">
                  <Row>
                    <Col xs="6" lg="6">
                      <h3 className="h6 text-uppercase mb-1">
                        <Link href="#">
                          <a className="text-dark">Calm</a>
                        </Link>
                      </h3>
                      <span className="text-muted">$15.00 USD</span>
                    </Col>
                    <Col xs="6" lg="6" className="text-end align-self-center">
                      <Link href="#">
                        <a className="btn btn-sm">BUY A CARD</a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs="6" lg="6">
              <div className="mb-4">
                <Link href="#">
                  <a>
                    <img className="img-fluid w-100" src="/img/Card2.jpg" alt="Card2" />
                  </a>
                </Link>
                <div className="py-2">
                  <Row>
                    <Col xs="6" lg="6">
                      <h3 className="h6 text-uppercase mb-1">
                        <Link href="#">
                          <a className="text-dark">Calm</a>
                        </Link>
                      </h3>
                      <span className="text-muted">$15.00 USD</span>
                    </Col>
                    <Col xs="6" lg="6" className="text-end align-self-center">
                      <Link href="#">
                        <a className="btn btn-sm">BUY A CARD</a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs="6" lg="6">
              <div className="mb-4">
                <Link href="#">
                  <a>
                    <img className="img-fluid w-100" src="/img/Card3.jpg" alt="Card3" />
                  </a>
                </Link>
                <div className="py-2">
                  <Row>
                    <Col xs="6" lg="6">
                      <h3 className="h6 text-uppercase mb-1">
                        <Link href="#">
                          <a className="text-dark">Calm</a>
                        </Link>
                      </h3>
                      <span className="text-muted">$15.00 USD</span>
                    </Col>
                    <Col xs="6" lg="6" className="text-end align-self-center">
                      <Link href="#">
                        <a className="btn btn-sm">BUY A CARD</a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs="6" lg="6">
              <div className="mb-4">
                <Link href="#">
                  <a>
                    <img className="img-fluid w-100" src="/img/Card4.jpg" alt="Card4" />
                  </a>
                </Link>
                <div className="py-2">
                  <Row>
                    <Col xs="6" lg="6">
                      <h3 className="h6 text-uppercase mb-1">
                        <Link href="#">
                          <a className="text-dark">Calm</a>
                        </Link>
                      </h3>
                      <span className="text-muted">$15.00 USD</span>
                    </Col>
                    <Col xs="6" lg="6" className="text-end align-self-center">
                      <Link href="#">
                        <a className="btn btn-sm">BUY A CARD</a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs="6" lg="6">
              <div className="mb-4">
                <Link href="#">
                  <a>
                    <img className="img-fluid w-100" src="/img/Card5.jpg" alt="Card5" />
                  </a>
                </Link>
                <div className="py-2">
                  <Row>
                    <Col xs="6" lg="6">
                      <h3 className="h6 text-uppercase mb-1">
                        <Link href="#">
                          <a className="text-dark">Calm</a>
                        </Link>
                      </h3>
                      <span className="text-muted">$15.00 USD</span>
                    </Col>
                    <Col xs="6" lg="6" className="text-end align-self-center">
                      <Link href="#">
                        <a className="btn btn-sm">BUY A CARD</a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs="6" lg="6">
              <div className="mb-4">
                <Link href="#">
                  <a>
                    <img className="img-fluid w-100" src="/img/Card6.jpg" alt="Card6" />
                  </a>
                </Link>
                <div className="py-2">
                  <Row>
                    <Col xs="6" lg="6">
                      <h3 className="h6 text-uppercase mb-1">
                        <Link href="#">
                          <a className="text-dark">Calm</a>
                        </Link>
                      </h3>
                      <span className="text-muted">$15.00 USD</span>
                    </Col>
                    <Col xs="6" lg="6" className="text-end align-self-center">
                      <Link href="#">
                        <a className="btn btn-sm">BUY A CARD</a>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
          <p className="text-center">
            LOAD MORE <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Icon/Small/Arrow Right">
            <path id="Vector" d="M2.27161e-06 8.83332L12.5955 8.83332L9.40888 11.8208L10.6667 13L16 8L10.6667 3L9.40888 4.17918L12.5955 7.16668L2.41731e-06 7.16668L2.27161e-06 8.83332Z" fill="#FA6044"/>
            </g>
            </svg>
          </p>
        </Container>
      </section>
    </> 
  )
}
