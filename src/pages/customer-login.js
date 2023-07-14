import { Container, Row, Col, Form, Button } from "react-bootstrap"

import Link from "next/link"

import Hero from "../components/Hero"

import data from "../data/customer-login.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
      },
      title: "Customer - Login",
    },
  }
}

export default function CustomerLogin() {
  return (
    <>
      <Hero
        title={data.subtitle}
        breadcrumbs={data.breadcrumbs}
        content={data.content}
      />

      <Container>
        <Row className="justify-content-center">
          <Col lg="5">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase mb-0">Login</h6>
              </div>
              <div className="block-body">
                <p className="lead">Already our customer?</p>
                <p className="text-muted">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo.
                </p>
                <hr />
                <Form>
                  <div className="mb-4">
                    <Form.Label htmlFor="email_1">Email</Form.Label>
                    <Form.Control id="email_1" type="text" />
                  </div>
                  <div className="mb-4">
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control id="password" type="password_1" />
                  </div>
                  <div className="mb-4">
                    <Button variant="outline-dark" type="submit">
                      <FontAwesomeIcon icon={faSignInAlt} className="me-2" />{" "}
                      Log in
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="5">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase mb-0">New account</h6>
              </div>
              <div className="block-body">
                <p className="lead">Not our registered customer yet?</p>
                <p className="text-muted">
                  With registration with us new world of fashion, fantastic
                  discounts and much more opens to you! The whole process will
                  not take you more than a minute!
                </p>
                <p className="text-muted">
                  If you have any questions, please feel free to{" "}
                  <Link href="/contact">
                    <a>contact us</a>
                  </Link>
                  , our customer service center is working for you 24/7.
                </p>
                <hr />
                <Form>
                  <div className="mb-4">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control id="name" type="text" />
                  </div>
                  <div className="mb-4">
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control id="email" type="text" />
                  </div>
                  <div className="mb-4">
                    <Form.Label htmlFor="passwordRegister">Password</Form.Label>
                    <Form.Control id="passwordRegister" type="password" />
                  </div>
                  <div className="mb-4">
                    <Button variant="outline-dark" type="submit">
                      <FontAwesomeIcon icon={faUser} className="me-2" />
                      Register
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
