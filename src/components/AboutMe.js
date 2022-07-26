import { Container, Row, Col } from "react-bootstrap";
import aboutme from "../assets/img/aboutme.png";
import phone from "../assets/img/iconphone.svg";
import home from "../assets/img/iconhome.svg";
import birthdate from "../assets/img/iconbirthdate.svg";

const AboutMe = () => {
  return (
    <section className="aboutme" id="aboutme">
      <Container>
        <div className="aboutme-bx">
          <Row>
            <Col xs={12} md={6} xl={5}>
              <img src={aboutme} alt="header img" />
            </Col>
            <Col xs={12} md={6} xl={7}>
              <h2>About Me</h2>
              <p>
                My name is Margaretha Olivia Haryono. I am 19 years old and
                currently a second-year student at Bandung Institute of
                Technology majoring in informatics engineering. I love coding
                and making websites. I want to inspire other young women to also
                pursue their dreams in the STEM-related field.
              </p>
              <Row>
                <Col xs={12} md={6} xl={4}>
                  <img className="item" src={birthdate} alt="" />
                  <p>11 April 2003</p>
                </Col>
                <Col xs={12} md={6} xl={4}>
                  <img className="item" src={home} alt="" />
                  <p>Bandung</p>
                </Col>
                <Col xs={12} md={6} xl={4}>
                  <img className="item" src={phone} alt="" />
                  <p>+62 823-3161-5557</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
