import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import siudin from "../../Assets/Projects/si-udin.png";
import edusense from "../../Assets/Projects/edusense.png";
import smartkost from "../../Assets/Projects/smartkost.png";
import alagance from "../../Assets/Projects/alagance.webp";
import umanage from "../../Assets/Projects/umanage.webp";
import umkmgis from "../../Assets/Projects/umkm-gis.webp";

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
              imgPath={alagance}
              isBlog={false}
              title="Alagance E-Commerce"
              description="A decoupled luxury retail platform: React (Vite) storefront on a Laravel REST API, with Xendit payment gateway and webhook callbacks, real-time multi-currency pricing, guest order tracking, and an admin backoffice for products, orders, shipping, and sales analytics."
              ghLink="https://github.com/SyahrurRohmaann/e-commerce_web"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umanage}
              isBlog={false}
              title="Uwang — Personal Finance PWA"
              description="An offline-first personal finance PWA built with Svelte 5 and Dexie (IndexedDB): every transaction, budget, and report is computed on-device with no backend. Covers multi-wallet cash flow, a six-month trend chart, category insights, debt tracking, split bills, and installable offline use."
              ghLink="https://github.com/SyahrurRohmaann/UManage"
              demoLink="https://syahrurrohmaann.github.io/UManage/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={umkmgis}
              isBlog={false}
              title="SPK Lokasi AHP-GIS"
              description="A spatial decision support system for choosing MSME business locations in Jember. Criteria weights come from expert interviews and are validated with an AHP Consistency Ratio below 0.1, then scored candidates are ranked and mapped on Leaflet with buffer-zone competitor analysis."
              ghLink="https://github.com/SyahrurRohmaann/UMKM-GIS"
            />
          </Col>

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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
