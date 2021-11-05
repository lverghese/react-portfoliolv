import React from "react";
import resumeImg from '../../assets/images/Resume-1.png'
function Resume() {
    return(
        <div className="resume-wrapper">
             <img className="resume-img" src={resumeImg} alt={resumeImg} />
        </div>
       
    )
}

export default Resume;