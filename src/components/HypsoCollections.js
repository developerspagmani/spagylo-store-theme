import { Container, Row, Col } from "react-bootstrap";

import hypsoCollectionsData from "../data/hypso-collections.json"; // Update the path to the actual location of your JSON file

export default function HypsoCollections() {
  const { women, men } = hypsoCollectionsData;

  return (
    <section className="HypsoCollections">
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
                    <img
                      src={women.imgSrc}
                      className="hypso-women-collection"
                      alt="..."
                    />
                  </div>
                  <div className="collection-about-text-women">
                    <h3>{women.title}</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="poster-men">
                  <div className="men-collect-hypso">
                    <img
                      src={men.imgSrc}
                      className="hypso-men-collection"
                      alt="..."
                    />
                  </div>
                  <div className="collection-about-text-men">
                    <h3>{men.title}</h3>
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
