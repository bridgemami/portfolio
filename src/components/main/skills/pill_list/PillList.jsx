import Pill from '../pill/Pill';
import Nav from '../../../../../node_modules/react-bootstrap/ProgressBar';

export default function PillList () {
    return (
        <ul className="nav nav-pills mb-2 justify-content-evenly" id="pills-tab" role="tablist">
        <Pill title="Languages" active="active" />
        <Pill title= "Frameworks & Libraries" href="#pills-frameworks & libraries" />
        <Pill title= "Application" />
        <Pill title= "Command Line Tools" />
    </ul>
    )
}