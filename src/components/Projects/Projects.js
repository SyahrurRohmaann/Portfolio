import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import siudin from "../../Assets/Projects/si-udin.png";
import edusense from "../../Assets/Projects/edusense.png";
import smartkost from "../../Assets/Projects/smartkost.png";
import mbkm from "../../Assets/Projects/mbkm.png";
import vieladefis from "../../Assets/Projects/vieladefis.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartkost}
              isBlog={false}
              title="Smartkost"
              description="A comprehensive property management system designed to streamline room tracking, tenant billing, and digital communication for boarding house operations."
              ghLink="https://github.com/SyahrurRohmaann/smartkost"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vieladefis}
              isBlog={false}
              title="VielaDefis E-commerce"
              description="A robust retail platform featuring secure payment integration and a seamless user interface for optimized online shopping and inventory management."
              ghLink="https://github.com/SyahrurRohmaann/e-commerce_web"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edusense}
              isBlog={false}
              title="Edusense"
              description="An interactive educational monitoring tool that enables parents and teachers to track children’s learning milestones through a merit-based point system."
              ghLink="https://github.com/SyahrurRohmaann/edusense-web"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siudin}
              isBlog={false}
              title="Si Udin"
              description="A mobile-based stimulation game designed to enhance toddler cognitive development through interactive animal, shape, and sound recognition."
              ghLink="https://github.com/SyahrurRohmaann/game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mbkm}
              isBlog={false}
              title="Website MBKM"
              description="A centralized administrative portal to simplify and automate the registration, selection, and document management process for campus exchange programs."
              ghLink="https://github.com/SyahrurRohmaann/mbkm_tefa"
                 />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
