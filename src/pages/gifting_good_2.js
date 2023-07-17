import { Container, Row, Col, Button, Card } from "react-bootstrap"
import ContactFormNew from "../components/ContactFormNew"
import TopBarNew from "../components/Header/topBarNew"
import Banner from "../components/Banner"
import Logo from "../components/Logo"
import ImageAndTextBlock from "../components/ImageAndTextBlock"
import StepsWithIcon from "../components/StepsWithIcon"
import ThreeImageBlock from "../components/ThreeImageBlock"
import NumberIconBlock from "../components/NumberIconBlock"
import TextAndImageBlock from "../components/TextAndImageBlock"
import TextAndFormBlock from "../components/TextAndFormBlock"

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

export default function Home1() {
    return (
      <>
      {/* Top Bar */}
        
                <TopBarNew/>
                <Logo/>
                 <Banner/> 
                <ImageAndTextBlock/> 
                <StepsWithIcon/>
                <ThreeImageBlock/>  
                <NumberIconBlock/>
                <TextAndImageBlock/>
                <TextAndFormBlock/>
                </>
    )
}