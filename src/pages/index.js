import { Container, Row, Col } from "react-bootstrap"
import Swiper from "../components/Swiper"
import data from "../data/index.json"
import ProductListBlock from "../components/ProductListingBlock"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        dark: true,
        classes:
          "bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light",
        color: "transparent",
      },
      headerAbsolute: true,
      title: "Homepage",
    },
  }
}

export default function Home() {

  return (
    <>
      {/*<Swiper
        data={data.swiper}
        autoplay={{
          delay: 5000,
        }}
        loop
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides
        speed={1500}
        parallax
        navigation
        pagination
        className="home-full-slider h-100 "
        containerclass="container-fluid py-5"
        sectionClass="mb-2 home-full-slider-wrapper"
        eager
      />*/}
     
      <ProductListBlock />
    </> 
  )
}
