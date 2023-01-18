import ProgressBarLanguage from "./languages/ProgressBarLanguage"
import ProgressBarFrameworks from "./frameworks/ProgressBarFrameworks"
export default function ProgressBarList () {
    return (
        <>
        <div className="tab-content" id="pills-tabContent">
            <ProgressBarLanguage />
        </div>
        <div className="tab-content" id="pills-tabContent">
            <ProgressBarFrameworks />
        </div>
        </>
        
    )
}