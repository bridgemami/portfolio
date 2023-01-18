// import s from './skills.module.css';
import PillList from './pill_list/PillList';
import ProgressBarList from './progress_bar/ProgressBarList';

import Title from './title/Title';
export default function Skills () {
    return (
    <section className="mt-5 container-fluid">
   <div className="row">
    <Title title="My Skills" />
    </div>
    <div className="row">
    <PillList />
    <ProgressBarList />
    </div>
              
  </section>
    )
}