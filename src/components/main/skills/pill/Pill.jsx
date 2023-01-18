
export default function Pill (props) {
    const lowerCase = props.title.toLowerCase();
return (
    <li className="nav-item" role="presentation">
        {console.log(lowerCase)}
        <button className={`nav-link ${props.active}`} id= {`pills-${lowerCase}-tab`} data-bs-toggle="pill" data-bs-target={`#pills-${lowerCase}`} type="button" role="tab" aria-controls={`pills-${lowerCase}`} aria-selected="true">{props.title}</button>
      </li>
)
}