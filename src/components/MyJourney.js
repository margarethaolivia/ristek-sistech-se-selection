import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const MyJourney = () => {
  return (
    <section className="myjourney" id="myjourney">
      <Container>
        <Row>
          <Col size={12}>
            <h2>My Journey</h2>
            <Tab.Container id="mj-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 mt-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Achievement</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="experience">
                    <VerticalTimeline lineColor="#fff">
                      <VerticalTimelineElement
                        contentStyle={{
                          background: "#2a2a2a",
                          color: "#fff",
                        }}
                        date="Jun 2022 - present"
                        dateClassName={"text-align-left"}
                      >
                        <h3>Website Back-End Staff</h3>
                        <p>Wisuda Juli ITB 2022</p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        contentStyle={{
                          background: "#2a2a2a",
                          color: "#fff",
                        }}
                        date="Apr 2022 - Jun 2022"
                      >
                        <h3>CS101 Teaching Assistant</h3>
                        <p>Generation Girl Summer Club 2022</p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        contentStyle={{
                          background: "#2a2a2a",
                          color: "#fff",
                        }}
                        date="Dec 2021 - Mar 2022"
                        dateClassName={"text-align-left"}
                      >
                        <h3>Web Development Staff</h3>
                        <p>Aku Masuk ITB 2022</p>
                      </VerticalTimelineElement>
                    </VerticalTimeline>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="section">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyJourney;
