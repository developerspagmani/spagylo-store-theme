import React from "react";
import Link from "next/link";
import { Container, Row, Col, Form, Button, Badge, InputGroup } from "react-bootstrap";
import footerContent from "../data/footer_new.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer_new = () => {
  return (
    <footer className="position-relative z-index-10 d-print-none footerSection">
      {/* Services block*/}
      {/*<ServicesBlock />*/}
      <div className="bg-footer-color">
        <div className="footerWrapper">
          <Container>
            <Row>
              {footerContent &&
                footerContent.map((item, index) => (
                  <Col key={item.title} lg={item.lg || 2} className=" ">
                    {item.logo && (
                      // <div className="d-flex justify-content-center align-items-center mb-3">
                      <img className="footerLogo" src="img/Logo 1.svg" id="myPinkDIV" />
                      // </div>
                    )}



                    {item.title && (
                      <div className="fw-bold text-uppercase mb-3 footerSubTitle w-50-50">
                        {item.logo ? (
                          <div dangerouslySetInnerHTML={{ __html: item.title }} />
                        ) : (
                          item.title
                        )}
                      </div>
                    )}

                    {item.links && (
                      <ul className="list-unstyled mb-4 w-50-50 ">
                        {item.links.map((link) => (
                          <li key={link.title}>
                            <Link href={link.link}>
                              <a>
                                {link.title}
                                {link.new && (
                                  <Badge variant="info" bg="info-light" className="ms-1">
                                    New
                                  </Badge>
                                )}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.social && (
                      <div className="mb-3">
                        <ul className="list-inline">
                          {item.social.map((socialIcon) => {
                            let socialIconFA;
                            switch (socialIcon.title) {
                              case "facebook":
                                socialIconFA = faFacebook;
                                break;
                              case "instagram":
                                socialIconFA = faInstagram;
                                break;
                              case "pinterest":
                                socialIconFA = faPinterest;
                                break;
                              case "youtube":
                                socialIconFA = faYoutube;
                                break;
                              default:
                                socialIconFA = faTwitter;
                            }
                            return (
                              <li key={socialIcon.title} className="list-inline-item">
                                <a
                                  href={socialIcon.link}
                                  target="_blank"
                                  title={socialIcon.title}
                                  className="text-dark text-hover-primary"
                                >
                                  {/* <span className="d-block">{socialIcon.title}</span> */}
                                  <FontAwesomeIcon icon={socialIconFA} />
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}


                  </Col>
                ))}
            </Row>
          </Container>
        </div>
        <div className="py-4 fw-bold bg-foot-footer text-black-300">
          <Container>
            <Row className="align-items-center">
              <Col className="text-center text-md-center">
                <p className="mb-md-0 copyRights">© 2023, HYPSO. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer_new;
