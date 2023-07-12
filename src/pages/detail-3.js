import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"

import Breadcrumbs from "../components/Breadcrumbs"
import DetailSimilar from "../components/DetailSimilar"
import DetailTabs from "../components/DetailTabs"
import DetailMain from "../components/DetailMain"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

import productData from "../data/dummyproduct.json"
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css"
import InnerImageZoom from "react-inner-image-zoom"
import useWindowSize from "../hooks/UseWindowSize"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Homepage",
    },
  }
}

export default function Detail3() {
  const [lightBoxOpen, setLightBoxOpen] = useState(false)

  const size = useWindowSize()

  const images = productData.img.detailVariant

  return (
    <>
      <section className="product-details">
        <div className="container">
          <Row>
            <Col
              lg={{ span: 6, order: 1 }}
              xl={7}
              xs={{ order: 2 }}
              className="pt-4"
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  role="button"
                  className="d-block mb-4 bg-transparent border-0"
                  onClick={() =>
                    size.width > 1200 && setLightBoxOpen(!lightBoxOpen)
                  }
                >
                  <InnerImageZoom
                    hideHint
                    src={image.img}
                    zoomSrc={image.img}
                    alt={image.alt}
                    zoomType="hover"
                    className="cursor-pointer"
                  />
                </div>
              ))}

              <Lightbox
                open={lightBoxOpen}
                close={() => setLightBoxOpen(false)}
                slides={images?.map((image) => ({
                  alt: image.alt,
                  src: image.img,
                }))}
              />
            </Col>
            <Col
              lg={{ span: 6, order: 2 }}
              xl={5}
              xs={{ order: 1 }}
              className=" ps-lg-5 pt-4"
            >
              <Breadcrumbs
                links={productData.breadcrumbs}
                className="justify-content-start"
              />
              <div className="sticky-top" style={{ top: "100px" }}>
                <DetailMain product={productData} />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <DetailTabs product={productData} />

      <DetailSimilar />
    </>
  )
}
