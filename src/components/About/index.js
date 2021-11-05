import React from "react";
import profilePic from '../../assets/images/profile.png'
function About(props) {

    return(
        <div className="header-wrapper">
            <div className="main-info">
                <img className="profile-pic" src={profilePic} alt="about-me"></img>
                
                { props.title && <h1>{props.title}</h1>}
                <div class="bioText">
                    <p>
                        My name is Logan Verghese and I am currently a student in UCF's Coding 
                        Boot Camp. In my last semester of my Associates Degree, I decided that
                        software development is the career path I want to take and I will do anything 
                        in my power to work towards that.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default About;