import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";

function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Portfolio</h2>
            <Row>
              <Project
                name="Password Generator"
                imgPath={require("../components/assets/images/Password-generator.png")}
                linkURL="https://gannim1986.github.io/week3/"
              />
            </Row>
            <Row>
              <Project
                name="weatherapp"
                imgPath={require("../components/assets/images/weatherapp.jpg")}
                linkURL="https://gannim1986.github.io/weatherapp/"
              />
            </Row>
            <Row>
              <Project
                name="note-taker"
                imgPath={require("../components/assets/images/note-taker.png")}
                linkURL="https://daily-note-taker.herokuapp.com/"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;