import React from "react";
import Typed from "react-typed"

function Home(props) {

    return(
        <div className="header-wrapper">
            <div className="main-info">
                {/*PROFILE PIC*/}
                <h1>Logan Verghese</h1>
                { props.title && <h1>{props.title}</h1>}
                <h2>
                <Typed 
                    className="typed-text"
                    strings=
                    {[props.subTitle]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
               </h2>
            </div>

        </div>

    )
}

export default Home;