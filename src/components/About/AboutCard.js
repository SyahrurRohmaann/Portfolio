import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mohammad Syahrur Rohman</span>{" "}
            from <span className="purple">Pasuruan, Indonesia</span>.
            <br />
            I’m currently studying at a{" "}
            <span className="purple">Polytechnic state of Jember.</span> 
            <br />currently pursuing a degree in{" "}
            <span className="purple">Informatics Engineering</span> 
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manhwa 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime 🍿
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don’t wait for a seat at the table; build your own and let your results do the talking."{" "}
          </p>
          <footer className="blockquote-footer">Syahrur</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
