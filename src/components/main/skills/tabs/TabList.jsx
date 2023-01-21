import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgressBarApplications from '../progress_bar/ProgressBarApplications';
import ProgressBarCommandLineTools from '../progress_bar/ProgressBarCommandLineTools';
import ProgressBarFrameworks from '../progress_bar/ProgressBarFrameworks';
import ProgressBarLanguage from '../progress_bar/ProgressBarLanguage';

export default function TabList() {
  return (
    <Tabs
      defaultActiveKey="languages"
      id="tabs"
      className="mb-3"
      justify
    >
      <Tab eventKey="languages" title="Languages">
      <ProgressBarLanguage />
      </Tab>
      <Tab eventKey="frameworks" title="Frameworks/Libraries">
        <ProgressBarFrameworks />
      </Tab>
      <Tab eventKey="application" title="Applications">
        <ProgressBarApplications />
      </Tab>
      <Tab eventKey="commandLineTools" title="Command Line Tools">
        <ProgressBarCommandLineTools />
      </Tab>
    </Tabs>
  );
}
