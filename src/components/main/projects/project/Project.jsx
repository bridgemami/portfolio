import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Project({ projects }) {
  return (
        <div className="row justify-content-evenly">
        {projects.map((project) => {
        return (
          <Card style={{ width: "18rem" }} key={project.id}>
            <Card.Img
              variant="top"
              src={`${project.image}`}
              alt={`${project.alt}`}
            />
            {/* fix image link */}
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.description}</Card.Text>
              {/* add link<Button variant="primary">Visit</Button> */}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
