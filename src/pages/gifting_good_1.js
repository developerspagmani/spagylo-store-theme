import { Container, Row, Col, Button, Card, Form } from "react-bootstrap"
import ContactFormNew from "../components/ContactFormNew"
import TopBarNew from "../components/Header/topBarNew"
import Logo from "../components/Logo"
import Banner from "../components/Banner"
import items from "../data/non-profit_banner_data.json"
import HolidayCardProcessBlock from "../components/HolidayCardProcessBlock"
import HelpBlock from "../components/HelpBlock"
import TextAndLogo from "../components/TextAndLogo"
import { useState, useEffect } from "react";




export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const cities = ["Chennai", "Coimbatore", "Trichy", "Erode"];
  const [selectedCities, setSelectedCities] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleCitySelection = (city) => {
    setSelectedCities((prevSelectedCities) =>
      prevSelectedCities.includes(city)
        ? prevSelectedCities.filter((c) => c !== city)
        : [...prevSelectedCities, city]
    );
  };



  const [showSideOptions, setShowSideOptions] = useState(false);

  const handleFilterButtonClick = () => {
    setShowSideOptions((prevShowSideOptions) => !prevShowSideOptions);
  };

  // Use useEffect to set the initial state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && window.innerWidth <= 1440) {
        setShowSideOptions(true);
      } else {
        setShowSideOptions(false);
      }
    };

    handleResize(); // Call it initially to set the state on page load

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);

  return (
    <>
      <section className=" pb-5 bg-white-100" >

        <div className="listing-page-banner">
          <div className="listing-women-banner-img">
            <img src="img/young-indian-woman-wearing-sari 1.png" className="banner_women" alt="women-banner" />
          </div>
          <div className="listing-women-banner-img-circle">
            <img src="img/young-indian-woman-wearing-sari (1) 1.png" className="banner_women-circle" alt="women-banner-circle" />
          </div>
        </div>

        <Container>
          <Row>
            <div className="city-name-title">
              <h2 className="city-name">Coimbatore Sellers</h2>
            </div>
          </Row>
        </Container>


        <div className="women-row">
          <Col xl="3" md="3" sm="3" className="w-000">
            {showSideOptions && (
              <div className="side-options">
                <h6 className="select-cities">Select City</h6>
                <button className="drop-check" onClick={toggleDropdown}>
                  All Cities{" "}
                  {showDropdown ? <span className="uparrowcity">&#x25B2;</span> : <span className="downarrowcity">&#x25BC;</span>}
                </button>
                {showDropdown && (
                  <div className="dropdown">
                    {cities.map((city) => (
                      <Form.Check
                        key={city}
                        type="checkbox"
                        label={city}
                        className="check-box"
                        id={city}
                        checked={selectedCities.includes(city)}
                        onChange={() => handleCitySelection(city)}
                      />
                    ))}
                  </div>
                )}

                <div className="selected-city-card">
                  {selectedCities.map((city) => (
                    <h6 key={city}>
                      {city} <svg className="x-close" onClick={() => handleCitySelection(city)} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="zondicons:close-solid" clip-path="url(#clip0_1205_319)">
                          <path id="Vector" d="M1.17232 6.82808C0.790284 6.45909 0.485555 6.01771 0.275919 5.5297C0.0662831 5.04168 -0.0440618 4.5168 -0.0486771 3.98569C-0.0532924 3.45457 0.0479144 2.92785 0.249038 2.43626C0.450162 1.94468 0.747174 1.49807 1.12274 1.1225C1.49832 0.74693 1.94492 0.449917 2.43651 0.248794C2.92809 0.0476703 3.45481 -0.0535365 3.98593 -0.0489212C4.51705 -0.044306 5.04193 0.0660389 5.52994 0.275675C6.01796 0.485311 6.45934 0.79004 6.82832 1.17208C7.55696 1.92649 7.96013 2.9369 7.95102 3.98569C7.94191 5.03447 7.52123 6.03772 6.7796 6.77936C6.03797 7.52099 5.03472 7.94166 3.98593 7.95078C2.93714 7.95989 1.92673 7.55671 1.17232 6.82808ZM4.56032 4.00008L5.69232 2.86808L5.12832 2.30408L4.00032 3.43608L2.86832 2.30408L2.30432 2.86808L3.43632 4.00008L2.30432 5.13208L2.86832 5.69608L4.00032 4.56408L5.13232 5.69608L5.69632 5.13208L4.56432 4.00008H4.56032Z" fill="#F46800" />
                        </g>
                        <defs>
                          <clipPath id="clip0_1205_319">
                            <rect width="8" height="8" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </h6>
                  ))}
                </div>
                <div className="filter-city-filter">
                  <div className="filter-city">
                    <a href="#" className="filter-city-btn">Filter</a>
                  </div>
                </div>
                <div className="filter-below"></div>

                <div className="category-collections">
                  <div className="category-collections-title">
                    <h5>
                      Category
                    </h5>
                  </div>
                  <div className="category-collections-list">
                    <a href="#">Men’s Collections</a>
                    <a href="#">Women’s Collections</a>
                    <a href="#">Kids Collections</a>
                    <a href="#">Accessories</a>
                  </div>
                </div>
              </div>
            )
            }
          </Col>

          <Col xl="9" md="9" sm="12">
            <div className="women-collection-three">
              <div className="hypso-womencollection-title">
                <h3>Women’s collections</h3>
              </div>
              <div className="women-collection">

                <div class="card-group hypso-women-card">
                  <Col xl="4" md="6" sm="6" >
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                  <Col xl="4" md="6" sm="6">
                    <div class="card hypso-card-women-border">
                      <img src="/img/tshirt.jpg" class="hypso-card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title text-center">Mens T-shirst</h5>
                        <p class="card-price text-center"><small class="text-muted">Rs. 250.00</small></p>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            </div>
          </Col>
        </div>
        <div className="fixed-filter">
          <button onClick={handleFilterButtonClick}>
            Filter{" "}
            {showSideOptions ? (
              <span className="downarrowfilter">&#x25BC;</span>
            ) : (
              
              <span className="uparrowfilter">&#x25B2;</span>
            )}
          </button>
        </div>
      </section>
    </>
  )
}