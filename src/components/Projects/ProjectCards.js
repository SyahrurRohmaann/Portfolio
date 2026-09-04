import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={`${props.title} screenshot`}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
        <div className="project-card-actions">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${props.title} source code on GitHub`}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* Demo button only renders for non-blog cards that have a live URL. */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the live ${props.title} demo`}
            >
              <BsBoxArrowUpRight /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
