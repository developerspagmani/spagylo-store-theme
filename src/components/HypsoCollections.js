import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function HypsoCollections() {
    return (
        <section className="productListBlock">




            {/* HYPSO COLLECTIONS START */}
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
                                        <h3>Women’s
                                            Collection
                                            &
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
                                        <h3>men’s
                                            Collection
                                            &
                                            Accessories</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            {/* HYPSO COLLECTIONS END */}
        </section>
    );
}