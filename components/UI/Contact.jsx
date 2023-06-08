import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Planet Earth 🌍</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <a href="mailto:piyushgarg.dev@gmail.com">
                    <i className="ri-mail-line"></i>
                  </a>
                </span>
                <p>
                  <a href="mailto:piyushgarg.dev@gmail.com">piyushgarg.dev@gmail.com</a>
                </p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link
                aria-label="Youtube Channel"
                href="https://youtube.com/@piyushgargdev"
                target="_blank"
              >
                <i className="ri-youtube-line"></i>
              </Link>
              <Link
                aria-label="Github Profile"
                href="https://github.com/piyushgarg-dev"
                target="_blank"
              >
                <i className="ri-github-line"></i>
              </Link>
              <Link
                aria-label="Twitter Account"
                href="https://twitter.com/piyushgarg_dev"
                target="_blank"
              >
                <i className="ri-twitter-line"></i>
              </Link>
              <Link
                aria-label="LinedIn Account"
                href="https://www.linkedin.com/in/piyushgarg195/"
                target="_blank"
              >
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
