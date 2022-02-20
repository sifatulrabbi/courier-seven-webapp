import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { brand, allLinks } from "../assets";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  function copyMobile() {
    navigator.clipboard.writeText("01882970400");
  }

  return (
    <Container fluid className="bg-gray py-5">
      <Container className="container-lg h-100">
        <Row className="g-4 mb-3">
          <Col md="5" lg="5" className="text-center text-md-start mb-3">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={brand} alt="Courier 007" height="45px" />
              <span className="text-primary fw-bolder h5">Courier 007</span>
            </Link>
          </Col>
          <Col md="2" lg="2" className="text-center text-md-start mb-3">
            <Nav className="flex-column">
              <h6>Site links</h6>
              {allLinks.map((link) => (
                <Nav.Link
                  key={v4()}
                  href={link.link}
                  className="p-1 link-secondary"
                >
                  <small>{link.name}</small>
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          <Col
            md="3"
            className="d-flex flex-column align-items-center align-items-md-start mb-3"
          >
            <h6>Contact us</h6>
            <small className="text-secondary mb-3">
              Some house, Dhanmondi, Dhaka - 1205
            </small>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="copy-number-tooltip">Copy number</Tooltip>}
            >
              <Button
                variant="white"
                className="btn p-0 text-start text-secondary"
                onClick={copyMobile}
                style={{ width: "max-content" }}
              >
                <small>Call: 01882970400</small>
              </Button>
            </OverlayTrigger>
          </Col>
          <Col md="2" lg="2" className="d-flex flex-column align-items-center">
            <Button className="w-100 mb-3" style={{ maxWidth: "120px" }}>
              Login
            </Button>
            <Button
              variant="outline-primary"
              className="w-100"
              style={{ maxWidth: "120px" }}
            >
              Register
            </Button>
          </Col>
        </Row>
        <div className="w-100 divider" style={{ height: 1 }} />
        <Container
          fluid
          className="pt-2   d-flex flex-column flex-md-row align-items-center"
          style={{ justifyContent: "space-between", gridGap: "2rem" }}
        >
          <small className="text-secondary">
            &copy; {new Date().getFullYear()} Courier 007, Bangladesh
          </small>
          <Nav>
            <Nav.Link href="/" target="_blank" className="p-0 px-3">
              <FaFacebook style={{ fontSize: "1.3rem" }} />
            </Nav.Link>
            <Nav.Link href="/" target="_blank" className="p-0 px-3">
              <FaInstagram style={{ fontSize: "1.3rem" }} />
            </Nav.Link>
            <Nav.Link href="/" target="_blank" className="p-0 px-3">
              <FaEnvelope style={{ fontSize: "1.3rem" }} />
            </Nav.Link>
          </Nav>
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
