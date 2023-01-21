import { useState, useEffect } from 'react';
import Project from './project/Project';

export default function Projects () {
const [projects, setProjects] = useState(null);

useEffect(
    (() => {
        fetch('http://localhost:8000/projects')
        .then((resp) =>{
            return resp.json()
        })
        .then((data)=>{
            console.log(data);
            return setProjects(data);
        })
    }
    ), [])
    return (
      <>
      {projects && <Project projects={projects} />}
      </>
    )
}
