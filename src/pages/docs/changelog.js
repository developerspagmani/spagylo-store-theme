import React from "react"

import { Container, Row, Col, Card } from "react-bootstrap"

import DocsNav from "../../components/Docs/DocsNav"
import Breadcrumbs from "../../components/Breadcrumbs"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Docs - Changelog",
    },
  }
}

const Changelog = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <Container>
          <Breadcrumbs
            links={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Documentation",
                link: "/docs/introduction",
              },
              {
                name: "Changelog",
                active: true,
              },
            ]}
            className="justify-content-center"
          />

          <div className="hero-content pb-5 text-center">
            <h1 className="hero-heading">Changelog</h1>
          </div>
        </Container>
      </section>

      <Container fluid>
        <Row className="px-xl-5">
          <Col lg="2">
            <DocsNav />
          </Col>
          <Col lg="10" xl="8" className="docs-content">
            <div id="version2.0.2" className="docs-item">
              <h5 className="text-uppercase mb-4">Version 2.0.2</h5>
              <div className="docs-desc">
                <p className="text-muted">October 2, 2022</p>
              </div>
              <div className="mt-5">
                <Card className="bg-gray-100 border-0">
                  <Card.Body className="py-4">
                    <pre className="card-text">
                      {"-"} <strong>update:</strong> Updated to NextJS 12.3.1,
                      React 18.2.0, FontAwesome 6, Leaflet 1.8.0, React Select
                      5.4.0,{"\n"} Swiper 8.3.2, React Bootstrap 2.5.0, React
                      Leaflet 4.0.2, React Parallax 3.5.1 and many more
                      {"\n"}
                      {"-"} <strong>new:</strong> Converted from React Magnifier
                      to React Inner Image Zoom for React 18 support (see docs{" "}
                      <a href="https://github.com/laurenashpole/react-inner-image-zoom">
                        here
                      </a>
                      ){"\n"}
                      {"-"} <strong>new:</strong> Converted from React Image
                      Lightbox to Yet Another React Lightbox for React 18
                      support (see docs{" "}
                      <a href="https://yet-another-react-lightbox.com/">here</a>
                      ){"\n"}
                      {"-"} <strong>new:</strong> Converted from next-react-svg
                      to @svgr/webpack support{"\n"}
                      {"-"} <strong>improvement:</strong> Removed Next Compose
                      Plugins and transformed next.config.js to native Nextjs
                      code
                    </pre>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div id="version2.0.1" className="docs-item">
              <h5 className="text-uppercase mb-4">Version 2.0.1</h5>
              <div className="docs-desc">
                <p className="text-muted">April 25, 2022</p>
              </div>
              <div className="mt-5">
                <Card className="bg-gray-100 border-0">
                  <Card.Body className="py-4">
                    <pre className="card-text">
                      {"-"} <strong>fixed:</strong> Added Font Awesome styles to
                      _app.js instead of auto import
                    </pre>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div id="version2.0.0" className="docs-item">
              <h5 className="text-uppercase mb-4">Version 2.0.0</h5>
              <div className="docs-desc">
                <p className="text-muted">November 11, 2021</p>
              </div>
              <div className="mt-5">
                <Card className="bg-gray-100 border-0">
                  <Card.Body className="py-4">
                    <pre className="card-text">
                      {"-"} <strong>update:</strong> Updated to Bootstrap 5
                      {"\n"}
                      {"-"} <strong>new:</strong> Converted from ReactStrap to
                      React Bootstrap package (see docs{" "}
                      <a href="https://react-bootstrap.github.io/components/alerts">
                        here
                      </a>
                      ){"\n"}
                      {"-"} <strong>new:</strong> Font Awesome React component
                      (see usage{" "}
                      <a href="https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react">
                        here
                      </a>
                      ){"\n"}
                      {"-"} <strong>new:</strong> Header component is split to
                      multiple components for better readiblity (
                      <code>src/components/Header</code>){"\n"}
                      {"-"} <strong>updated packages:</strong> NPM update,
                      Next.js (12.0.0), Swiper (7.0.6), Sass 1.38.1
                      {"\n"}- <strong>improved:</strong> Removed Swiper react
                      wrapper (ReactIdSwiper). Using Swiper.js's react component
                    </pre>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div id="version1.0.0" className="docs-item">
              <h5 className="text-uppercase mb-4">Version 1.0.0</h5>
              <div className="docs-desc">
                <p className="text-muted">February 9, 2021</p>
              </div>
              <div className="mt-5">
                <Card className="bg-gray-100 border-0">
                  <Card.Body className="py-4"> Initial Release</Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Changelog
