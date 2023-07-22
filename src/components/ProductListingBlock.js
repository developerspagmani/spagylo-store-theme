import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"

export default function ProductListBlock() {

  return (
    <>
      <section className="productListBlock py-6 mt-5">

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
                            <path id="Vector" d="M2.27161e-06 8.83332L12.5955 8.83332L9.40888 11.8208L10.6667 13L16 8L10.6667 3L9.40888 4.17918L12.5955 7.16668L2.41731e-06 7.16668L2.27161e-06 8.83332Z" fill="#FA6044" />
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


        <Container>
          <Row>
            <div className="top_products">
              <div className="col-lg-12">
                <div className="hypso_top_products_title">
                  <h3>TOP PRODUCTS</h3>
                </div>

                <div class="card-group hypso-top-card">
                  <div class="card hypso-card-border">
                    <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title text-center">Mens T-shirst</h5>
                      <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                    </div>
                  </div>
                  <div class="card hypso-card-border">
                    <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title text-center">Mens T-shirst</h5>
                      <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                    </div>
                  </div>
                  <div class="card hypso-card-border">
                    <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title text-center">Mens T-shirst</h5>
                      <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                    </div>
                  </div>
                  <div class="card hypso-card-border">
                    <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title text-center">Mens T-shirst</h5>
                      <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        <Container>
          <Row>
            <div className="hypso-collections-total">
              <div className="collection-title">
                <h3>HYPSO COLLECTIONS</h3>
              </div>
              <div className="hypso-collections">

                <div className="col-lg-6">
                  <div className="poster-women">
                    <div className="women-collect-hypso">
                      <img src="/img/women-collection.png" class="hypso-women-collection " alt="..." />
                    </div>
                    <div className="collection-about-text-women">
                      <h3>Women’s <br/>
                        Collection<br/>
                        &<br/>
                        Accessories</h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="poster-men">
                    <div className="men-collect-hypso">
                      <img src="/img/Mask group (1).png" class="hypso-men-collection" alt="..." />
                    </div>
                    <div className="collection-about-text-men">
                      <h3>men’s<br/>
                        Collection<br/>
                        &<br/>
                        Accessories</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>

        <div className="poster_men_women">
          <div className="hypso-banner-middle">
            <div className="poster_container">
              <div className="poster_row">
                <div className="left_img">
                  <img src="/img/Lady Image.png" class="hypso-women-banner" alt="..." />
                </div>
                <div className="heading_wrapper">
                  <div className="buy-sell-title">
                    <h3>BUY & SELL PRODUCTS ON <span className="hypso-blue">HYPSO</span></h3>
                    <p>FROM YOUR LOCAL STORES</p>

                  </div>
                </div>
                <div className="right_img">
                  <div className="hypso-style-men">
                    <img src="/img/Men Image.png" class="hypso-men-banner" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="local_products">
          <Container>
            <div className="local_spl_title">
              <h3>LOCAL SPECIALS</h3>
            </div>
            <Row>

              <div className="col-lg-33 local-head-img p-0">
                {/* <div className="local-head-img"> */}
                <img src="/img/jug-coconut-oil-whit-coconut-put-dark-background 1.png" class="local-product-head" alt="..." />
                <div className="text-over-local-img">
                  <h3>HYPSO LOCAL SPECIAL <br/> PRODUCTS</h3>
                  <a href="#">SHOP LOCAL</a>
                </div>

                {/* </div> */}
              </div>



              <div className="col-lg-34">
                <div class="local_spl_product_list">
                  <div class="col-22">
                    <div class="card b-none">
                      <img src="/img/image 1.jpg" class="card-img-top" alt="..." />
                      <p class="text-center local-description pt-11">Homemade Chocolate</p>
                    </div>
                  </div>
                  <div class="col-22">
                    <div class="card b-none">
                      <img src="/img/image 2.jpg" class="card-img-top" alt="..." />
                      <p class="text-center local-description pt-11">Coconut Oil</p>
                    </div>
                  </div>
                  <div class="col-22">
                    <div class="card b-none">
                      <img src="/img/image 4.jpg" class="card-img-top" alt="..." />
                      <p class="text-center local-description pt-11">Hair Herbal Powder</p>
                    </div>
                  </div>
                  <div class="col-22">
                    <div class="card b-none">
                      <img src="/img/image 5.jpg" class="card-img-top" alt="..." />
                      <p class="text-center local-description pt-11">Lemon pickle</p>
                    </div>
                  </div>
                  <div class="col-22">
                    <div class="card b-none">
                      <img src="/img/image 6.jpg" class="card-img-top" alt="..." />
                      <p class="text-center local-description pt-11">coriander powder</p>
                    </div>
                  </div>
                  <div class="col-22">
                    <div class="card b-none">
                      <img src="/img/image 7.jpg" class="card-img-top" alt="..." />
                      <p class="text-center local-description pt-11">Khara Mixture</p>
                    </div>
                  </div>
                </div>
              </div>

            </Row>  
          </Container>
        </div>




      </section>
    </>
  )
}
