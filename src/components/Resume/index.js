import React from "react";
import resumeImg from '../../assets/images/Resume-1.png'
function Resume() {
    return(
        <div className="resume-wrapper">
            <div className="main-info">
             <img className="resume-img" src={resumeImg} alt={resumeImg} />
             <div className="text-center m-top-50">
             <a className="resumeButton line-btn-dark btn-icon btn-radius" href={resumeImg} title="" download>Download Resume</a>
            </div>
            </div>
        </div>
       
    )
}

export default Resume;