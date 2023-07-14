import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"

export default function ProductListBlock() {

  return (
    <>
      <section className="productListBlock py-6 mt-5">
        <Container>
          <h3 className="productListTitle">Start by Choosing Your Card Design</h3>
          <Row>
            <div className="cardItem">
              <Link href="#">
                <a>
                  <img className="img-fluid w-100" src="/img/Card2.jpg" alt="Card1" />
                </a>
              </Link>
              <div className="productDetails">
                <Row>
                  <Col xs="7" lg="7">
                    <h3 className="h6 text-uppercase">
                      <Link href="#">
                        <a className="productTitle">Calm</a>
                      </Link>
                    </h3>
                    <span className="productPrice">$15.00 USD</span>
                  </Col>
                  <Col xs="5" lg="5" className="text-center align-self-center cartBtn">
                    <Link href="#">
                      <a>BUY A CARD</a>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="cardItem">
              <Link href="#">
                <a>
                  <img className="img-fluid w-100" src="/img/Card2.jpg" alt="Card2" />
                </a>
              </Link>
              <div className="productDetails">
                <Row>
                  <Col xs="7" lg="7">
                    <h3 className="h6 text-uppercase">
                      <Link href="#">
                        <a className="productTitle">Calm</a>
                      </Link>
                    </h3>
                    <span className="productPrice">$15.00 USD</span>
                  </Col>
                  <Col xs="5" lg="5" className="text-center align-self-center cartBtn">
                    <Link href="#">
                      <a>BUY A CARD</a>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="cardItem">
              <Link href="#">
                <a>
                  <img className="img-fluid w-100" src="/img/productCart3.jpg" alt="Card3" />
                </a>
              </Link>
              <div className="productDetails">
                <Row>
                  <Col xs="7" lg="7">
                    <h3 className="h6 text-uppercase">
                      <Link href="#">
                        <a className="productTitle">Calm</a>
                      </Link>
                    </h3>
                    <span className="productPrice">$15.00 USD</span>
                  </Col>
                  <Col xs="5" lg="5" className="text-center align-self-center cartBtn">
                    <Link href="#">
                      <a>BUY A CARD</a>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="cardItem">
              <Link href="#">
                <a>
                  <img className="img-fluid w-100" src="/img/Card4.jpg" alt="Card4" />
                </a>
              </Link>
              <div className="productDetails">
                <Row>
                  <Col xs="7" lg="7">
                    <h3 className="h6 text-uppercase">
                      <Link href="#">
                        <a className="productTitle">Calm</a>
                      </Link>
                    </h3>
                    <span className="productPrice">$15.00 USD</span>
                  </Col>
                  <Col xs="5" lg="5" className="text-center align-self-center cartBtn">
                    <Link href="#">
                      <a>BUY A CARD</a>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="cardItem">
              <Link href="#">
                <a>
                  <img className="img-fluid w-100" src="/img/Card5.jpg" alt="Card5" />
                </a>
              </Link>
              <div className="productDetails">
                <Row>
                  <Col xs="7" lg="7">
                    <h3 className="h6 text-uppercase">
                      <Link href="#">
                        <a className="productTitle">Calm</a>
                      </Link>
                    </h3>
                    <span className="productPrice">$15.00 USD</span>
                  </Col>
                  <Col xs="5" lg="5" className="text-center align-self-center cartBtn">
                    <Link href="#">
                      <a>BUY A CARD</a>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="cardItem">
              <Link href="#">
                <a>
                  <img className="img-fluid w-100" src="/img/Card6.jpg" alt="Card6" />
                </a>
              </Link>
              <div className="productDetails">
                <Row>
                  <Col xs="7" lg="7">
                    <h3 className="h6 text-uppercase">
                      <Link href="#">
                        <a className="productTitle">Calm</a>
                      </Link>
                    </h3>
                    <span className="productPrice">$15.00 USD</span>
                  </Col>
                  <Col xs="5" lg="5" className="text-center align-self-center cartBtn">
                    <Link href="#">
                      <a>BUY A CARD</a>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>
          <p className="text-center loadMoreLink">
            <Link href="#">
              <a>
                LOAD MORE 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Icon/Small/Arrow Right">
                  <path id="Vector" d="M2.27161e-06 8.83332L12.5955 8.83332L9.40888 11.8208L10.6667 13L16 8L10.6667 3L9.40888 4.17918L12.5955 7.16668L2.41731e-06 7.16668L2.27161e-06 8.83332Z" fill="#FA6044"/>
                  </g>
                </svg>
              </a>
            </Link>
          </p>
        </Container>
      </section>
    </> 
  )
}
