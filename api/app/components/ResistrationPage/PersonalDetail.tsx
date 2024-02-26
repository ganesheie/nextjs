import React, { useRef, useState } from 'react'
import MailToLinkComponent from './MailToLinkComponent'
import '/public/css/checkbox.css'
// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';

const PersonalDetail = ({ handleClick }: { handleClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>, nextform: string) => void }) => {
    
    interface FormErrors {
        captcha?: string;
        firstName? : string
        lastName ? : string
        email? : string
        telephone? : string
        jobTitle ? : string
        termsandcond? : string
    }
    const [errors, setErrors] = useState<FormErrors>({});
    const doEmptyCheck = (field : string, value : string | null | undefined, errors: { [key: string]: string }, validationMessage : string) => {
        if (!value){
            errors[field] = validationMessage;
        }
    }

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const telephoneRef = useRef<HTMLInputElement>(null);
    const jobTitleRef = useRef<HTMLInputElement>(null);
    const termsandcondRef = useRef<HTMLInputElement>(null);
    const captchaRef = useRef<ReCAPTCHA>(null);
    
    const validateFormFields =  (event: React.MouseEvent<HTMLInputElement, MouseEvent>, nextform: string) => {
        const errors: { [key: string]: string } = {};
        doEmptyCheck("firstName" , firstNameRef.current?.value.trim() , errors,"First Name");
        doEmptyCheck("lastName" , lastNameRef.current?.value.trim() , errors,"Last Name");
        doEmptyCheck("email" , emailRef.current?.value.trim() , errors,"Email");
        doEmptyCheck("telephone" , telephoneRef.current?.value.trim() , errors,"Telephone");
        doEmptyCheck("jobTitle" , jobTitleRef.current?.value.trim() , errors,"Job Title");
        doEmptyCheck("termsandcond" , termsandcondRef.current?.value.trim() , errors,"I agree to terms and conditions");
        doEmptyCheck("captcha" , captchaRef.current?.getValue() , errors,"I am not a robot");
        setErrors(errors);
        if (Object.keys(errors)){
            firstNameRef.current?.scrollIntoView({ behavior: 'smooth' });
        }else{
            handleClick(event,nextform);
        }    

    };
  
   

  return (
    <section className="atr-sm-padding-vertical-32 atr-xl-padding-vertical-32 atr-sm-padding-horizontal-32"> 
	<div className="wrapper atr-flex atr-xl-justify-content-center"> 
		<article className="atr-xl-7">
            <h2 className="atr-sm-margin-bottom-4">Developer Personal Details:</h2>
            <p> Introduction Text </p>
            <div className="atr-sm-margin-top-16" id="ckeditor-content">
                <p>If you are new to Atradius APIs and do not have an Atradius User ID, please complete the self-registration below. For all other requests, please <MailToLinkComponent  /> <br /> <br />Please provide us with the <strong>personal details of the person who will Develop the APIs.</strong> These details will be used to create a <strong>Developer trial account</strong>. Details of the organisation who wants access to the APIs can be provided under &ldquo;Who is API Access for?&rdquo; if it differs from the Developer organisation. &nbsp;</p>
            </div>
            {Object.keys(errors).length > 0 && (
            <div id="contact_form_errors" style={{marginTop: "20px", paddingBottom :"0px"}}> 
                <div className="atr-message atr-message--error atr-sm-padding-horizontal-32  atr-sm-margin-top-24" id="errordetails">
                    <h4 className="error--title">Please check the followings</h4>
                    <ul className="atr-sm-padding-top-8 atr-sm-padding-left-32">
                    {Object.keys(errors).map((key, index) => (
                        <li key={index} className="className='atr-sm-padding-top-4">
                        <a href={`#${key}`}> {errors[key]} </a>
                        </li>
                    ))}     
                    </ul> 
                </div>
            </div>
            )}
            <form  method="post" name="Registration">
                <div className="input__container atr-flex atr-sm-12"> 
			        <input  autoComplete="none" type="text" name="firstName" id="firstName" ref={firstNameRef} className="input atr-sm-12 atr-sm-margin-bottom-16" data-required="true" title="First Name"  maxLength={33}/>
			        <label htmlFor="firstName" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}>First Name <span className="form-field-required"> * </span> </label>  
			    </div>
		  		<div className="input__container atr-flex atr-sm-12">
		        	<input  autoComplete="none" type="text" name="lastName" id="lastName" ref={lastNameRef} className="input atr-sm-12 atr-sm-margin-bottom-16"  data-required="true"  title="Last Name" maxLength={33}/>
		        	<label htmlFor="lastName" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}>Last Name <span className="form-field-required"> * </span> </label>
		    	</div>
			    <div className="input__container atr-flex atr-sm-12">
			        <input  autoComplete="none" type="text" name="email" id="email" ref={emailRef} className="input atr-sm-12 atr-sm-margin-bottom-16" data-emailid="true" data-required="true" title="Email"  maxLength={100} />
			        <label htmlFor="email" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}> Email  <span className="form-field-required"> * </span> </label>
			    </div>
			    <div className="input__container atr-flex atr-sm-12">
			        <input  autoComplete="none" type="text" name="telephone" id="telephone" ref={telephoneRef} className="input atr-sm-12 atr-sm-margin-bottom-16" data-required="true" title="Telephone"  maxLength={25} />
			        <label htmlFor="telephone" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}>Telephone <span className="form-field-required"> * </span> </label>
			    </div>
			     <div className="input__container atr-flex atr-sm-12">
			        <input  autoComplete="none" type="text" name="jobTitle" id="jobTitle" ref={jobTitleRef} className="input atr-sm-12 atr-sm-margin-bottom-16" data-required="true"  title="Job Title" maxLength={35}/>
			        <label htmlFor="jobtitle" className="input__label atr-sm-12 smalllabel" style={{order : "-1"}}>Job Title <span className="form-field-required"> * </span> </label>
			    </div>
                <div className="atr-flex atr-sm-12 atr-sm-margin-top-16">    
                    <label className="container termsandcond" htmlFor="termsandcond">
                    <input type="checkbox" name="termsandcond" id="termsandcond" ref={termsandcondRef}  value="true" className="atr-sm-margin-bottom-40" data-required='true' title="Terms and Condtion"  />
                        <span className="checkmark blue"></span>
                        <span className="input__label atr-sm-margin-left-8 atr-sm-margin-top-4" >
                            <p>I&#39;ve read and accept the&nbsp;<a href="https://login-app.atradius.com/atr-identity/faces/Legal?locale=en_GB" target="_blank">terms and conditions</a></p>
                        </span> 
                        <span className="form-field-required"> * </span>
                    </label>
                </div>
                <div className="input__container atr-sm-12 atr-sm-margin-top-24">
                    <ReCAPTCHA sitekey="6LdzMwgTAAAAAEEHpWldxMwiu1Yz1ctY3aXTYbpw"   ref={captchaRef} />
                </div>
        


                <input className="button button--red button--wide atr-sm-margin-top-24" id="submit" title="submit" type="button" value="Submit" onClick= {(event) => validateFormFields(event, "OrgSearch")} />
            </form>
        </article>
	</div>
</section> 
  )
}

export default PersonalDetail;
