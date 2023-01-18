import { useState } from "react";
import ProgressBar from "../../../../../../node_modules/react-bootstrap/ProgressBar";
// import s from '../progressbarwidth.module.css'

export default function ProgressBarFrameworks() {
  const [frameworks, setFrameworks] = useState([
    {
      language: "BootStrap 5",
      percent: "90",
      id: 0,
    },
    {
      language: "React",
      percent: "50",
      id: 1,
    },
    {
      language: "Next.js",
      percent: "33.33",
      id: 2,
    },
  ]);
  return (
    <div className="pb-5">
      {frameworks.map((frame) => {
        console.log(frame.percent);
        return (
          <div
            key={frame.id}
            className="tab-pane fade"
            id="pills-frameworks & libraries"
            role="tabpanel"
            aria-labelledby="pills-frameworks & libraries-tab"
            tabIndex="0"
          >
            <h4>{frame.language}</h4>
            <ProgressBar animated now={frame.percent} />
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}
