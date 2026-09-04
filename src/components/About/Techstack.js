import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiSvelte,
  SiBootstrap,
  SiVite,
  SiPhp,
  SiLaravel,
  SiFlutter,
  SiSqlite,
  SiLeaflet,
} from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Git from "../../Assets/TechIcons/Git.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSvelte fontSize={"24px"} />
        <div className="tech-icons-text">Svelte</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPhp fontSize={"24px"} />
        <div className="tech-icons-text">PHP</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel fontSize={"24px"} />
        <div className="tech-icons-text">Laravel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter fontSize={"24px"} />
        <div className="tech-icons-text">Flutter</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap fontSize={"24px"} />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVite fontSize={"24px"} />
        <div className="tech-icons-text">Vite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite fontSize={"24px"} />
        <div className="tech-icons-text">SQLite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLeaflet fontSize={"24px"} />
        <div className="tech-icons-text">Leaflet</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
