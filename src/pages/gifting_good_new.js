import { Container, Row, Col, Button, Card } from "react-bootstrap"
import ContactFormNew from "../components/ContactFormNew"
import TopBarNew from "../components/Header/topBarNew"
import Banner from "../components/Banner"
import Logo from "../components/Logo"
import HolidayCardProcessBlock from "../components/HolidayCardProcessBlock"
import items from "../data/banner_data.json"

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
        <TopBarNew/>
        <Logo/>
        <Banner items={items}/> 
        <HolidayCardProcessBlock/>
        
      </>
    )
}