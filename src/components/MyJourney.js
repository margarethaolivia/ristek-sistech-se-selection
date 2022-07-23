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
                        <p>Yayasan Generasi Maju Berkarya</p>
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
                <Tab.Pane eventKey="second">
                  <div className="achievement">
                    <VerticalTimeline lineColor="#fff">
                      <VerticalTimelineElement
                        contentStyle={{
                          background: "#2a2a2a",
                          color: "#fff",
                        }}
                        date="Mar 2022"
                        dateClassName={"text-align-left"}
                      >
                        <h3>Best Staff for Web Development Division</h3>
                        <p>Aku Masuk ITB 2022</p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        contentStyle={{
                          background: "#2a2a2a",
                          color: "#fff",
                        }}
                        date="Jun 2021"
                      >
                        <h3>
                          Kode With Klossy Scholars for Web Development Camp
                        </h3>
                        <p>Kode With Klossy</p>
                      </VerticalTimelineElement>

                      <VerticalTimelineElement
                        contentStyle={{
                          background: "#2a2a2a",
                          color: "#fff",
                        }}
                        date="Dec 2020"
                        dateClassName={"text-align-left"}
                      >
                        <h3>Most Advance Computer Science Final Project</h3>
                        <p>Generation Girl's Winter Club Program</p>
                      </VerticalTimelineElement>
                    </VerticalTimeline>
                  </div>
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
