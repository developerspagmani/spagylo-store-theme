import React, { useState, useRef, useEffect } from "react"

import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css"
import InnerImageZoom from "react-inner-image-zoom"
import { Row, Col } from "react-bootstrap"

import { Swiper, SwiperSlide } from "swiper/react"
import useWindowSize from "../hooks/UseWindowSize"

const SwiperGallery = ({ data, vertical }) => {
  const [lightBoxOpen, setLightBoxOpen] = useState(false)
  const [domLoaded, setDomLoaded] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const gallerySwiperRef = useRef(null)
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const slideTo = (index) => {
    setActiveSlide(index)
    if (
      gallerySwiperRef.current !== null &&
      gallerySwiperRef.current.swiper !== null
    ) {
      gallerySwiperRef.current.swiper.slideToLoop(index)
    }
  }

  let sliderColumns = { xs: 12 },
    sliderClass = "detail-carousel",
    thumbsColumns = { xs: 12 },
    thumbsClass = ""

  if (vertical) {
    sliderColumns = { xs: 12, md: 10 }
    ;(sliderClass = "detail-carousel order-md-2"), (thumbsColumns = { md: 2 })
    thumbsClass = "d-none d-md-block pe-0 order-md-1"
  }

  const sliderParams = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    onSlideChange: (e) => setActiveSlide(e.realIndex),
  }

  const size = useWindowSize()
  return (
    <>
      <Row>
        <Col className={sliderClass} {...sliderColumns}>
          <div className="ribbon ribbon-info">Fresh</div>
          <div className="ribbon ribbon-primary">Sale</div>
          {domLoaded && (
            <Swiper {...sliderParams} ref={gallerySwiperRef}>
              {data.map((item, index) => (
                <SwiperSlide key={index} onClick={() => setLightBoxOpen(true)}>
                  <div
                    style={{
                      pointerEvents: size.width < 1200 ? "none" : "auto",
                    }}
                  >
                    <InnerImageZoom
                      hideHint
                      src={item.img}
                      zoomSrc={item.img}
                      alt={item.alt}
                      zoomType="hover"
                      className="cursor-pointer"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Col>

        <Col className={thumbsClass} {...thumbsColumns}>
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => slideTo(index)}
              className={`detail-thumb-item mb-3 ${
                activeSlide === index ? "active" : ""
              }`}
            >
              <img className="img-fluid" src={item.img} alt={item.alt} />
            </button>
          ))}
        </Col>
        <Lightbox
          open={lightBoxOpen}
          close={() => setLightBoxOpen(false)}
          slides={data?.map((image) => ({
            alt: image.alt,
            src: image.img,
          }))}
          index={activeSlide}
        />
      </Row>
    </>
  )
}

export default SwiperGallery
