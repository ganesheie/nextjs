import React from 'react'
import '/public/css/train.css'

const TrainStep = () => {
return (
    <section className="section--bg atr-sm-padding-vertical-16 atr-xl-padding-top-48 atr-xl-padding-bottom-16">
	    <div className="wrapper">
            <ul className="atr-train">
                <li className="atr-train__step atr-train__step--active"> 
                <div className="atr-train__step-icon"></div> 
                <p className="atr-train__step-title">Developer Personal Details</p>
            </li>
            <li className="atr-train__step atr-train__step--disabled">
            <div className="atr-train__step-icon"></div> 
                <p className="atr-train__step-title">Developer Organisation Search</p>
            </li>
            <li className="atr-train__step atr-train__step--disabled" >
            <div className="atr-train__step-icon"></div> 
            <p className="atr-train__step-title">Developer Organisation Search Results</p>
            </li>
            <li className="atr-train__step atr-train__step--disabled">
            <div className="atr-train__step-icon"></div> 
            <p className="atr-train__step-title">Who is the API Access for?</p>
            </li>
            <li className="atr-train__step atr-train__step--disabled" >
            <div className="atr-train__step-icon"></div> 
            <p className="atr-train__step-title">API Access Organisation Search</p>
            </li>
            <li className="atr-train__step atr-train__step--disabled">
            <div className="atr-train__step-icon"></div> 
            <p className="atr-train__step-title">API Access Orgainsation Search Results</p>
            </li>
            <li className="atr-train__step atr-train__step--disabled">
            <div className="atr-train__step-icon"></div> 
            <p className="atr-train__step-title">Summary</p>
            </li>
            </ul>
        </div> 
    </section>
  )
}

export default TrainStep;
