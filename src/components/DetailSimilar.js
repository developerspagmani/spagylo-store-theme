import { Row, Col, Container } from "react-bootstrap"

import Product from "./Product"

import { Row, Col, Container, Button } from "react-bootstrap"
import products from "../data/products.json"

const DetailSimilar = (props) => {
  return (
    <section className="my-5">
      <Container>
        <header className="text-center">
          <h6 className="text-uppercase mb-5">You might also like</h6>
        </header>

        <Row>
          {products.slice(0, 6).map((value, index) => (
            <Col xl="2" lg="2" md="4" xs="6" key={index}>
              <Product data={value} onlyViewButton />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default DetailSimilar
