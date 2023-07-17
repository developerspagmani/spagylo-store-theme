import { Row, Col, Container, Button } from "react-bootstrap"


export default function Banner({ data }) {
  return (
    <section className="Banner">
      <div className="bg_paper">
        <Container>
          <Row>
            <Col lg="6" md="6" xs="12">
              <div className="banner">
                <h4>{data.left_content.sub_heading}</h4>
                <h1>{data.left_content.heading}</h1>
                <p>{data.left_content.description}</p>
                <a href={data.left_content.button_url}>{data.left_content.button_label}</a>
              </div>
            </Col>
            <Col lg="6" md="6" xs="12">
              <div className="banner">
                <img className="w-100" src={data.right_content.img_url} alt={data.right_content.img_name} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <img
        src="./img/paper_bottom.png"
        class="paper_bottom"
        alt="paper-bottom"
      />
    </section>
  )
}
