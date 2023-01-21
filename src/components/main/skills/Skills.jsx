// import s from './skills.module.css';
import TabList from './tabs/TabList';
import Title from './title/Title';

export default function Skills () {
    return (
    <section className="mt-5 container-fluid">
   <div className="row">
    <Title title="My Skills" id="skills"/>
    </div>
    <div className="row">
    <TabList />
    </div>
              
  </section>
    )
}