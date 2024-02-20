import React from 'react'
import MailToLinkComponent from './MailToLinkComponent'

const PersonalDetail = () => {
  return (
    <section className="atr-sm-padding-vertical-32 atr-xl-padding-vertical-32 atr-sm-padding-horizontal-32"> 
	<div className="wrapper atr-flex atr-xl-justify-content-center"> 
		<article className="atr-xl-7">
            <h2 className="atr-sm-margin-bottom-4">Developer Personal Details:</h2>
            <p> Introduction Text </p>
            <div className="atr-sm-margin-top-16" id="ckeditor-content">
                <p>If you are new to Atradius APIs and do not have an Atradius User ID, please complete the self-registration below. For all other requests, please <MailToLinkComponent  /> <br /> <br />Please provide us with the <strong>personal details of the person who will Develop the APIs.</strong> These details will be used to create a <strong>Developer trial account</strong>. Details of the organisation who wants access to the APIs can be provided under &ldquo;Who is API Access for?&rdquo; if it differs from the Developer organisation. &nbsp;</p>
            </div>
            <form  method="post" name="Registration">
                <div className="input__container atr-flex atr-sm-12"> 
			        <input  autoComplete="none" type="text" name="firstName" id="firstName" className="input atr-sm-12 atr-sm-margin-bottom-16" data-required="true" title="First Name"  maxLength="33"/>
			        <label htmlFor="name" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}>First Name <span className="form-field-required"> * </span> </label>  
			    </div>
		  		<div className="input__container atr-flex atr-sm-12">
		        	<input  autoComplete="none" type="text" name="lastName" id="lastName" className="input atr-sm-12 atr-sm-margin-bottom-16"  data-required="true"  title="Last Name" maxLength="33"/>
		        	<label htmlFor="organisation" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}>Last Name <span className="form-field-required"> * </span> </label>
		    	</div>
			    <div className="input__container atr-flex atr-sm-12">
			        <input  autoComplete="none" type="text" name="email" id="email" className="input atr-sm-12 atr-sm-margin-bottom-16" data-emailid="true" data-required="true" title="Email"  maxLength="100" />
			        <label htmlFor="email" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}> Email  <span className="form-field-required"> * </span> </label>
			    </div>
			    <div className="input__container atr-flex atr-sm-12">
			        <input  autoComplete="none" type="text" name="telephone" id="telephone" className="input atr-sm-12 atr-sm-margin-bottom-16" data-required="true" title="Telephone"  maxLength="25" />
			        <label htmlFor="telephone" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}>Telephone <span className="form-field-required"> * </span> </label>
			    </div>
			     <div className="input__container atr-flex atr-sm-12">
			        <input  autoComplete="none" type="text" name="jobTitle" id="jobTitle" className="input atr-sm-12 atr-sm-margin-bottom-16" data-required="true"  title="Job Title" maxLength="35"/>
			        <label htmlFor="jobtitle" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}>Job Title <span className="form-field-required"> * </span> </label>
			    </div>
                <div className="atr-flex atr-sm-12 atr-sm-margin-top-16">    
                    <label className="container termsandcond">
                    <input type="checkbox" name="termsandcond" id="termsandcond"  value="true" className="atr-sm-margin-bottom-40" data-required='true' title="Terms and Condtion"  />
                        <span className="checkmark blue"></span>
                        <span className="input__label atr-sm-margin-left-8 atr-sm-margin-top-4" >
                            <p>I&#39;ve read and accept the&nbsp;<a href="https://login-app.atradius.com/atr-identity/faces/Legal?locale=en_GB" target="_blank">terms and conditions</a></p>
                        </span> 
                        <span className="form-field-required"> * </span>
                    </label>
                </div>
                <input className="button button--red button--wide atr-sm-margin-top-24" id="submit" title="submit" type="button" value="Submit" />
            </form>
        </article>
	</div>
</section>
  )
}

export default PersonalDetail;
