import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import Product from "./Product"

const SwiperProducts = ({ products, ...props }) => {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const sliderParams = {
    spaceBetween: 0,
    modules: [Pagination],
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
    pagination:
      props.pagination !== undefined
        ? {
            clickable: true,
            dynamicBullets: true,
          }
        : false,
  }

  return (
    <>
      {domLoaded && (
        <div className="position-relative w-100">
          <Swiper {...sliderParams} className="product-slider">
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="product-slider-item">
                  <Product
                    key={index}
                    data={product}
                    showQuickView={false}
                    onlyViewButton={true}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  )
}

export default SwiperProducts
