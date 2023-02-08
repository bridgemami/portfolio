import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from "./data/projects.json";
import s from "./projects.module.css";
import Title from "../skills/title/Title";

export default function Projects() {
  return (
    <section className="container" id="projects">
      <Title title="My Projects" />
      <div className={`row justify-content-evenly`}>
        {projectData &&
          projectData.map((data) => {
            return (
              <Card key={data.id} className={`col-sm-6 ${s.container}`}>
                <a href={data.link} target="_blank" rel="noreferrer">
                  <Card.Img
                    variant="top"
                    src={data.image}
                    alt={`${data.alt}`}
                    className={s.image}
                  />
                </a>
                {/* fix image link */}
                <Card.Body className={s.body}>
                  <a href={data.link} target="_blank" rel="noreferrer">
                    <Card.Title className={s.title}>{data.title}</Card.Title>
                  </a>
                  <Card.Text className={s.text}>{data.description}</Card.Text>
                  <div className={s.button}>
                    <Button
                      variant="link"
                      className={s.buttonColor}
                      href={data.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </section>
  );
}
