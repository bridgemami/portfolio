import React from 'react';
import bigHeadShot from "../../../images/DSC06519-cropped_400px.webp";
import smallHeadShot from "../../../images/DSC06519-cropped_300px.webp"
export default function Jumbotron (props) {
    return (
        <section className="d-flex flex-wrap justify-content-center">
    <picture className=" rounded-circle rounded-5 my-3">
      <source media="(min-width:720px)" srcSet={bigHeadShot} className="rounded-circle rounded-5" />
     {/* <source media="(min-width:360px)" srcset="./images/DSC06519-cropped_360px.jpg"> */}
      <img src={smallHeadShot} alt='Headshot of Michael Bridgeman' className="rounded-circle rounded-5 mx-auto d-block"/>
    </picture>
    <h2 className="text-center align-self-center align-items-center ps-5">{props.name}<br />{props.title}</h2>
    {/* <div className="offset-md-2"></div> */}
  </section>
    )
}