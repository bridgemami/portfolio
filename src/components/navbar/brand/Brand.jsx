import Navbar from "../../../../node_modules/react-bootstrap/Navbar";
import logo from "../../../images/michaelCrop_no_background_100px.png";

export default function Brand () {
    return (
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Michael Bridgeman Logo" />
        </Navbar.Brand>
    )
}