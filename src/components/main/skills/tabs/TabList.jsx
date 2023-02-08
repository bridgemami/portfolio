import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import s from "./tablist.module.css";
import './override.css'
import ProgressBarApplications from "../progress_bar/ProgressBarApplications";
import ProgressBarCommandLineTools from "../progress_bar/ProgressBarCommandLineTools";
import ProgressBarFrameworks from "../progress_bar/ProgressBarFrameworks";
import ProgressBarLanguage from "../progress_bar/ProgressBarLanguage";

export default function TabList() {
  const [key, setKey] = useState("languages");
  return (
    <Tabs
      active={key}
      onSelect={(k) => setKey(k)}
      id="tabs"
      className={`mb-3 ${s.white}`}
      justify
      variant="pills"
    >
      <Tab eventKey="languages" title="Languages" tabClassName={s.white}>
        <ProgressBarLanguage />
      </Tab>
      <Tab
        eventKey="frameworks"
        title="Frameworks/Libraries"
        tabClassName={s.white}
      >
        <ProgressBarFrameworks />
      </Tab>
      <Tab eventKey="application" title="Applications" tabClassName={s.white}>
        <ProgressBarApplications />
      </Tab>
      <Tab
        eventKey="commandLineTools"
        title="Command Line Tools"
        tabClassName={s.white}
      >
        <ProgressBarCommandLineTools />
      </Tab>
    </Tabs>
  );
}
