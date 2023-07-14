import { Container, Row, Col, Button, Card } from "react-bootstrap"
import ContactFormNew from "../components/ContactFormNew"
import TopBar from "../components/topBar"
import Banner from "../components/Banner/Banner"
import Logo from "../components/Logo/Logo"
import ImageAndTextBlock from "../components/ImageAndTextBlock/ImageAndTextBlock"
import StepsWithIcon from "../components/StepsWithIcon"
import ThreeImageBlock from "../components/ThreeImageBlock"
import NumberIconBlock from "../components/NumberIconBlock"

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
        
                <TopBar/>
                <Logo/>
                 <Banner/> 
                <ImageAndTextBlock/> 
                <StepsWithIcon/>
                <ThreeImageBlock/>  
                <NumberIconBlock/>

                
     {/* <section className="pt6 pb-5 bg-gray-100" style={{ paddingTop: "200px" }}>
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>How it Works for Nonprofits</h3>              
            </Col>
          </Row>
          <Row className="justify-content-center">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Icon1.png"alt="create Icon 1"/>
                    </div>
                    <div className="py-2">
                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="/detail-1">Create</a></h3>
                        <p style={{fontSize:"18px"}} className="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Icon2.png"alt="create Icon"/>
                    </div>
                    <div className="py-2">
                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="/detail-1">Create</a></h3>
                        <p style={{fontSize:"18px"}} className="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Icon3.png"alt="create Icon"/>
                    </div>
                    <div className="py-2">
                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark" href="/detail-1">Create</a></h3>
                        <p className="text-muted text-sm mb-1">custom designs for your organization, or let us design them for you.</p>
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-6 pb-5" style={{ paddingTop: "200px" }}>
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>Client Holiday Cards</h3>              
            </Col>
          </Row>
          <Row className="justify-content-around">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Card1.jpg" alt="card" className="w-100"/>
                    </div>
                    <div className="py-3">
                        <h3 className="h6 text-capitilize mb-1"><a className="text-dark" href="/detail-1">Harmony</a></h3>
                        <p className="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Rectangle 8.jpg" alt="card" className="w-100"/>
                    </div>
                    <div className="py-3">
                        <h3 className="h6 text-capitilize mb-1"><a className="text-dark" href="/detail-1">Colors of Fall</a></h3>
                        <p className="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <img src="/img/Card3.jpg" alt="card" className="w-100"/>
                    </div>
                    <div className="py-3">
                        <h3 className="h6 text-capitilize mb-1"><a className="text-dark" href="/detail-1">Ho Ho Ho</a></h3>
                        <p className="text-muted text-sm mb-1 text-uppercase">God’s Love We Deliver</p>
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
       </section>
      <section className="pt-6 pb-5 bg-gray-100">
        <Container>
          <Row>
            <Col xl="8" className="mx-auto text-center mb-5">
              <h3>How it Works for Supporters</h3>              
            </Col>
          </Row>
          <Row className="justify-content-center">
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                    <div className="productImage">
                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 40 50" fill="none">
                              <path d="M2.00586 10.3347V0H19.7843V47.4488H8.35989V10.3347H2.00586Z" fill="#4D55F5"/>
                              <path d="M33.5178 47.9688C31.5923 47.9688 30.0092 47.4055 28.7683 46.2788C27.5702 45.1089 26.9712 43.6789 26.9712 41.9889C26.9712 40.2557 27.5702 38.804 28.7683 37.6341C30.0092 36.4641 31.5923 35.8791 33.5178 35.8791C35.4004 35.8791 36.9408 36.4641 38.1389 37.6341C39.3797 38.804 40.0002 40.2557 40.0002 41.9889C40.0002 43.6789 39.3797 45.1089 38.1389 46.2788C36.9408 47.4055 35.4004 47.9688 33.5178 47.9688Z" fill="#4D55F5"/>
                              <path d="M0 12.366V2.03125H17.7784V49.4801H6.35403V12.366H0Z" fill="#FA6044"/>
                              <path d="M31.5119 50C29.5864 50 28.0033 49.4367 26.7624 48.3101C25.5644 47.1401 24.9653 45.7102 24.9653 44.0202C24.9653 42.2869 25.5644 40.8353 26.7624 39.6653C28.0033 38.4953 29.5864 37.9104 31.5119 37.9104C33.3946 37.9104 34.935 38.4953 36.133 39.6653C37.3739 40.8353 37.9943 42.2869 37.9943 44.0202C37.9943 45.7102 37.3739 47.1401 36.133 48.3101C34.935 49.4367 33.3946 50 31.5119 50Z" fill="#FA6044"/>
                            </svg>
                              </a></h3>
                    </div>
                    <div className="py-2">                        
                        <p style={{fontSize:"18px"}} className="text-muted text-sm mb-1">Supporters select a card design, write a personal message and choose a donation amount</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                <div className="productImage">
                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="52" height="50" viewBox="0 0 52 50" fill="none">
                            <path d="M2.45789 38.7775C3.90631 37.6313 4.56662 37.1007 4.43882 37.1856C8.61369 33.7472 11.8939 30.9243 14.2796 28.717C16.7078 26.5096 18.7527 24.1961 20.4141 21.7765C22.0755 19.3569 22.9062 17.001 22.9062 14.7087C22.9062 12.9683 22.5015 11.6099 21.6921 10.6336C20.8827 9.65722 19.6686 9.16905 18.0497 9.16905C16.4309 9.16905 15.1529 9.78457 14.2157 11.0156C13.3211 12.2042 12.8738 13.9022 12.8738 16.1095H2.33008C2.41528 12.5013 3.18209 9.48743 4.63052 7.06781C6.12154 4.6482 8.05988 2.86533 10.4455 1.7192C12.8738 0.573066 15.5576 0 18.4971 0C23.5665 0 27.3793 1.2947 29.9354 3.88411C32.534 6.47352 33.8333 9.84824 33.8333 14.0083C33.8333 18.5504 32.2784 22.7741 29.1685 26.6794C26.0587 30.5423 22.0968 34.3203 17.2829 38.0134H34.5362V46.8641H2.45789V38.7775Z" fill="#4D55F5"/>
                            <path d="M45.5457 48.0102C43.6287 48.0102 42.0524 47.4583 40.817 46.3547C39.6242 45.2085 39.0278 43.8077 39.0278 42.1522C39.0278 40.4542 39.6242 39.0322 40.817 37.886C42.0524 36.7399 43.6287 36.1668 45.5457 36.1668C47.4201 36.1668 48.9537 36.7399 50.1466 37.886C51.382 39.0322 51.9997 40.4542 51.9997 42.1522C51.9997 43.8077 51.382 45.2085 50.1466 46.3547C48.9537 47.4583 47.4201 48.0102 45.5457 48.0102Z" fill="#4D55F5"/>
                            <path d="M0.127808 40.7672C1.57623 39.6211 2.23655 39.0905 2.10874 39.1754C6.28361 35.737 9.56387 32.9141 11.9495 30.7067C14.3777 28.4994 16.4226 26.1859 18.084 23.7662C19.7454 21.3466 20.5762 18.9907 20.5762 16.6984C20.5762 14.958 20.1714 13.5996 19.362 12.6233C18.5526 11.647 17.3385 11.1588 15.7197 11.1588C14.1008 11.1588 12.8228 11.7743 11.8856 13.0053C10.991 14.1939 10.5437 15.8919 10.5437 18.0993H0C0.0852015 14.4911 0.852015 11.4772 2.30044 9.05756C3.79147 6.63795 5.7298 4.85508 8.11544 3.70894C10.5437 2.56281 13.2275 1.98975 16.167 1.98975C21.2365 1.98975 25.0492 3.28445 27.6053 5.87386C30.2039 8.46327 31.5032 11.838 31.5032 15.998C31.5032 20.5401 29.9483 24.7638 26.8385 28.6691C23.7286 32.532 19.7667 36.31 14.9529 40.0031H32.2061V48.8538H0.127808V40.7672Z" fill="#FA6044"/>
                            <path d="M43.2156 49.9999C41.2986 49.9999 39.7224 49.4481 38.4869 48.3444C37.2941 47.1983 36.6977 45.7975 36.6977 44.1419C36.6977 42.444 37.2941 41.0219 38.4869 39.8758C39.7224 38.7296 41.2986 38.1566 43.2156 38.1566C45.09 38.1566 46.6237 38.7296 47.8165 39.8758C49.0519 41.0219 49.6696 42.444 49.6696 44.1419C49.6696 45.7975 49.0519 47.1983 47.8165 48.3444C46.6237 49.4481 45.09 49.9999 43.2156 49.9999Z" fill="#FA6044"/>
                          </svg>
                        </a></h3>
                    </div>
                    <div className="py-2">                        
                        <p style={{fontSize:"18px"}} className="text-muted text-sm mb-1">They upload the names and addresses of the people they want to receive cards</p>
                    </div>
                </div>
              </Col>
              <Col xl="3" lg="3" md="4" xs="6">
                <div className="product text-center">
                <div className="productImage">
                        <h3 className="h6 text-uppercase mb-1"><a className="text-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="54" height="50" viewBox="0 0 54 50" fill="none">
                            <path d="M2.91346 14.1812C3.08428 9.64494 4.57903 6.14732 7.3977 3.6884C10.2164 1.22947 14.0386 0 18.8645 0C22.0676 0 24.8008 0.55114 27.0643 1.65342C29.3705 2.7557 31.1001 4.26073 32.2532 6.16852C33.449 8.07631 34.0469 10.2173 34.0469 12.5914C34.0469 15.3895 33.3422 17.6789 31.9329 19.4595C30.5235 21.1977 28.8793 22.3847 27.0002 23.0207V23.275C29.4345 24.0805 31.3563 25.416 32.7657 27.2814C34.175 29.1468 34.8797 31.5421 34.8797 34.4674C34.8797 37.0959 34.2604 39.4277 33.0219 41.4626C31.8261 43.4552 30.0538 45.0238 27.7049 46.1685C25.3987 47.3132 22.6441 47.8855 19.4411 47.8855C14.3162 47.8855 10.2164 46.6349 7.14145 44.1335C4.10925 41.6322 2.50774 37.859 2.33691 32.814H12.971C13.0137 34.6794 13.5475 36.1632 14.5725 37.2655C15.5974 38.3254 17.0922 38.8553 19.0567 38.8553C20.7223 38.8553 22.0035 38.389 22.9003 37.4563C23.8399 36.4812 24.3097 35.2093 24.3097 33.6407C24.3097 31.6057 23.6477 30.1431 22.3238 29.2528C21.0426 28.3201 18.9713 27.8537 16.1099 27.8537H14.06V19.0143H16.1099C18.288 19.0143 20.039 18.6539 21.3629 17.9332C22.7295 17.1701 23.4128 15.8347 23.4128 13.9269C23.4128 12.4006 22.9858 11.2136 22.1316 10.3657C21.2775 9.51775 20.103 9.0938 18.6083 9.0938C16.9854 9.0938 15.7683 9.58135 14.9568 10.5564C14.1881 11.5315 13.7397 12.7398 13.6116 14.1812H2.91346Z" fill="#4D55F5"/>
                            <path d="M47.5296 48.0127C45.6078 48.0127 44.0277 47.4616 42.7892 46.3593C41.5934 45.2146 40.9954 43.8156 40.9954 42.1622C40.9954 40.4663 41.5934 39.0461 42.7892 37.9014C44.0277 36.7568 45.6078 36.1844 47.5296 36.1844C49.4087 36.1844 50.9462 36.7568 52.142 37.9014C53.3805 39.0461 53.9997 40.4663 53.9997 42.1622C53.9997 43.8156 53.3805 45.2146 52.142 46.3593C50.9462 47.4616 49.4087 48.0127 47.5296 48.0127Z" fill="#4D55F5"/>
                            <path d="M0.576541 16.1685C0.747369 11.6322 2.24212 8.13463 5.06078 5.6757C7.87945 3.21677 11.7017 1.9873 16.5276 1.9873C19.7306 1.9873 22.4639 2.53844 24.7274 3.64072C27.0335 4.743 28.7632 6.24803 29.9163 8.15583C31.1121 10.0636 31.71 12.2046 31.71 14.5787C31.71 17.3768 31.0053 19.6662 29.596 21.4468C28.1866 23.185 26.5424 24.372 24.6633 25.008V25.2623C27.0976 26.0679 29.0194 27.4033 30.4288 29.2687C31.8381 31.1341 32.5428 33.5294 32.5428 36.4547C32.5428 39.0832 31.9235 41.415 30.685 43.4499C29.4892 45.4425 27.7169 47.0111 25.368 48.1558C23.0618 49.3005 20.3072 49.8728 17.1042 49.8728C11.9793 49.8728 7.87944 48.6222 4.80454 46.1208C1.77234 43.6195 0.170828 39.8463 0 34.8013H10.634C10.6768 36.6667 11.2106 38.1505 12.2356 39.2528C13.2605 40.3127 14.7553 40.8426 16.7198 40.8426C18.3854 40.8426 19.6666 40.3763 20.5634 39.4436C21.503 38.4685 21.9728 37.1966 21.9728 35.628C21.9728 33.593 21.3108 32.1304 19.9869 31.2401C18.7057 30.3074 16.6344 29.841 13.773 29.841H11.7231V21.0016H13.773C15.9511 21.0016 17.7021 20.6413 19.026 19.9205C20.3926 19.1574 21.0759 17.822 21.0759 15.9142C21.0759 14.3879 20.6489 13.2009 19.7947 12.353C18.9406 11.5051 17.7661 11.0811 16.2714 11.0811C14.6485 11.0811 13.4314 11.5687 12.6199 12.5437C11.8512 13.5188 11.4028 14.7271 11.2747 16.1685H0.576541Z" fill="#FA6044"/>
                            <path d="M45.1927 50C43.2709 50 41.6907 49.4489 40.4522 48.3466C39.2564 47.2019 38.6585 45.8029 38.6585 44.1495C38.6585 42.4537 39.2564 41.0334 40.4522 39.8887C41.6907 38.7441 43.2709 38.1717 45.1927 38.1717C47.0718 38.1717 48.6093 38.7441 49.8051 39.8887C51.0436 41.0334 51.6628 42.4537 51.6628 44.1495C51.6628 45.8029 51.0436 47.2019 49.8051 48.3466C48.6093 49.4489 47.0718 50 45.1927 50Z" fill="#FA6044"/>
                          </svg>
                        </a></h3>
                    </div>
                    <div className="py-2">                        
                        <p style={{fontSize:"18px"}} className="text-muted text-sm mb-1">Cards are sent automatically. No addressing, stamping, or trips to the post office necessary.</p>
                    </div>
                </div>
              </Col>
          </Row>
        </Container>
      </section> */}
      {/* <section className="pt-6 pb-1 bg-white-100">
        <Container>
        <Row>
          <Col lg="6"  style={{backgroundColor: "#ffffff",}}>
            <div className=" text-start text-black ">
              <h2 >
              Become a Preferred Nonprofit Partner
              </h2>
              <p style={{fontSize:"18px"}} className="lead mb-4  text-black">
                Simple per-transaction pricing means there’s no risk for you.
                <ul>
                    <li>No contracts required</li>
                    <li> No monthly fees</li>
                    <li>No setup fees</li>
                </ul>
              </p>
              <p className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  <Button style= {{backgroundColor:"#FA6044"}} >
                  Request a demo
                  </Button>  
              </p>
            </div>
          </Col>
          <Col  lg="6"
            className="position-relative split-screen-column align-items-center align-items-lg-end"
            style={{
               backgroundColor: "#ffffff",
            }}
          >
            <img src="/img/Image Section 4.png" className="bg-image" style={{width: "550px", height: "414px" }}/>             
          </Col>
        </Row>
      </Container>
    </section>
    <section>
        <Container>
          <Row>
            <Col md="5">
              <h6 className=" text-primary">Request a Demo</h6>
              <p className=" h2 p-2">Get More Info</p>
              <p style={{fontSize:"18px"}} className="text-left">
              Inquire for more information about how your nonprofit can participate in the Gifting Good Holiday Card program.
              </p>
            </Col>
            <Col md="7" className="mb-5  mb-md-0">
              <ContactFormNew />
            </Col>
          </Row>
        </Container>
      </section>  */}
      </>
    )
}