import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>About Me</h2>
            <Row>
              <Col size="sm-12">
                <img
                  className="img-fluid profile-pic float-left"
                  src={require("../components/assets/images/me.png.jpg")}
                  alt="Me"
                />
                <div className="bio">
                  <p>
                    Hello! I currently work as a asistant store manager at Rite Aid.
                  </p>
                  <p>
                    I am a lifelong learner and always looking to expand my
                    knowledge and skill set. I decided to become a coding
                    bootcamp student to learn full-stack development. 
                    And persue a career as a front end Developer.
                    Currently i have earned knowledge in HTML, CSS, Javascript and React.
                    And for backend i have learned Node.js Express.js MySQL
                  </p>
                  <p>
                    In my spare time (if I’ll even have any while in the
                    bootcamp), I enjoy traveling and eating my way through
                    anywhere I travel to.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default About;