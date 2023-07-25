import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link"

export default function BuySellHypso() {

    return (
        <section className="productListBlock">
            {/* Buy & Sell products on HYPSO START*/}
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
            {/* Buy & Sell products on HYPSO END */}
        </section>
    );
}