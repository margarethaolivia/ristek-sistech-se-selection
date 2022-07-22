import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const AboutMe = () => {
  return (
    <section className="skill" id="aboutme">
      <Container>
        <div className="skill-bx">
          <Row>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="header img" />
            </Col>
            <Col xs={12} md={6} xl={7}>
              <h2>About Me</h2>
              <p>
                My name is Margaretha Olivia Haryono. I am 19 years old and
                currently a second year student at Bandung Institute of
                Technology majoring in informatics engineering. I love coding
                and making website. I want to inspire other young women to also
                pursue their dreams in the STEM related field.
              </p>
              <Row>
                <Col xs={12} md={6} xl={4}>
                  <img className="item" src={navIcon2} alt="" />
                  <p>11 April 2003</p>
                </Col>
                <Col xs={12} md={6} xl={4}>
                  <img className="item" src={navIcon2} alt="" />
                  <p>Bandung</p>
                </Col>
                <Col xs={12} md={6} xl={4}>
                  <img className="item" src={navIcon2} alt="" />
                  <p>+62 823-3161-5557</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default AboutMe;
