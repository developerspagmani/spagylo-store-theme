import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function TopProductHome() {
    return (
        <section className="productListBlock">
            {/* TOP PRODUCTS START */}
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
            {/* TOP PRODUCTS END */}
        </section>
    );
}
