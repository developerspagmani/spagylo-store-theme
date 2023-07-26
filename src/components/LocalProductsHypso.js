import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"

export default function LocalProductsHypso() {

    return (
        <section className="LocalProductsHypso">



            {/* Local Products START */}
            <div className="local_products">
                <Container>
                    <div className="local_spl_title">
                        <h3>LOCAL SPECIALS</h3>
                    </div>
                    <Row>

                        <div className="col-lg-33 local-head-img p-0">
                            <img src="/img/jug-coconut-oil-whit-coconut-put-dark-background 1.png" class="local-product-head" alt="..." />
                            <div className="text-over-local-img">
                                <h3>HYPSO LOCAL SPECIAL <br /> PRODUCTS</h3>
                                <a href="#">SHOP LOCAL</a>
                            </div>
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

            {/* Local Products END */}
        </section>
    );
}