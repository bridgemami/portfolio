import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from './data/projects.json'

export default function Projects() {
  return (
  <section>
    <h2>Projects</h2>
    <div className="row justify-content-evenly">  
    {projectData && projectData.map((data)=>{
      return (
        <Card style={{ width: "18rem" }} key={data.id}>
            <Card.Img
              variant="top"
              src={data.image}
              alt={`${data.alt}`}
            />
            {/* fix image link */}
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Button variant="primary"
              href={data.link}
              target="_blank"
            rel="noreferrer"
              >Visit</Button>
            </Card.Body>
          </Card>
      )
    })}
    </div>
    </section>);
}
