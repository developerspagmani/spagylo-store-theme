import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import bannerData from "../data/banner-home.json"; // Update the path to the actual location of your JSON file

export default function BannerHome() {
  const { imgSrc, title, subtitle, buttonLabel, svg } = bannerData;

  return (
    <>
      <section className="BannerHome">
        {/* BANNER START */}
        <div className="banner">
          <div className="banner_bg">
            <Container>
              <Row>
                <div className="col-lg-6 banner-image">
                  <div className="banner_circle_img">
                    <img src={imgSrc} className="banner_circle" alt="paper-top" />
                  </div>
                </div>
                <div className="col-lg-6 banner-head-main">
                  <div className="banner_bold_title">
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                    <div className="button_local">
                      <a href="#" className="shop_local">
                        {buttonLabel}
                        {svg && <span dangerouslySetInnerHTML={{ __html: svg }} />}
                      </a>
                    </div>
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        {/* BANNER END */}
      </section>
    </>
  );
}
