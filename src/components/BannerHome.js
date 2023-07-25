import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"

export default function BannerHome() {

  return (
    <>
      <section className="productListBlock">


        {/*BANNER START */}
        <div className="banner">
          <div className="banner_bg">
            <Container>
              <Row>
                <div className="col-lg-6 banner-image">
                  <div className="banner_circle_img">
                    <img src="/img/Mask group.png" class="banner_circle" alt="paper-top" />
                  </div>
                </div>
                <div className="col-lg-6 banner-head-main">
                  <div className="banner_bold_title">
                    <h3>BUY PRODUCTS ON HYPSO</h3>
                    <p>FROM YOUR LOCAL STORES</p>
                    <div className="button_local">
                      <a href="#" className="shop_local">SHOP LOCAL
                        <svg className="arrow-left" width="16" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Icon/Small/Arrow Right">
                            <path id="Vector" d="M2.27161e-06 8.83332L12.5955 8.83332L9.40888 11.8208L10.6667 13L16 8L10.6667 3L9.40888 4.17918L12.5955 7.16668L2.41731e-06 7.16668L2.27161e-06 8.83332Z" fill="#FFF" />
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        {/*BANNER END */}




      </section>
    </>
  )
}
