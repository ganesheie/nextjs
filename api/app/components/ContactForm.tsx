"use client";
import React, { useRef, useState } from "react";
import { FormEvent } from "react";
import CountryDropDown from "./CountryDropDown";

// @ts-ignore
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  interface FormErrors {
    captcha?: string;
    name? : string
    country? : string
    email? : string
    organisation? : string
    contactreason? : string

  }
  
  const serverMessageMap = {
    error:
      "An error has occurred. Please refresh your browser. If the problem continues contact us.",
    success: "Thank you for your enquiry",
  };
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverResponse, setServerResponse] = useState<"error" | "success" | "">("");

  const nameRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const EmailAddressRef = useRef<HTMLInputElement>(null);
  const organisationRef = useRef<HTMLInputElement>(null);
  const telephoneRef = useRef<HTMLInputElement>(null);
  const contactaboutRef = useRef<HTMLSelectElement>(null);
  const contactreasonRef = useRef<HTMLTextAreaElement>(null);
  const captchaRef = useRef<ReCAPTCHA>(null);
  

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const errors: { [key: string]: string } = {};
    const token = captchaRef.current?.getValue();
    if (!token){
      errors["captcha"] = "Captcha is not clicked";
    }
    const name = nameRef.current?.value.trim() ?? '';


    if (!name) {
      errors["name"] = "Name is Required";
    }
    const country = countryRef.current?.value.trim();
    if (!country) {
      errors["country"] = "Country is Required";
    }
    const email = EmailAddressRef.current?.value.trim();
    if (!email) {
      errors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors["email"] = "Please enter a valid email address";
    }
   

    const org = organisationRef.current?.value.trim();
    if (!org) {
      errors["organisation"] = "Company is Required";
    }
    const contactreason = contactreasonRef.current?.value.trim();
    if (!contactreason) {
      errors["contactreason"] = "What can we help you with is Required";
    }

    if (Object.keys(errors).length <= 0) {
      console.log(event);
      const formData = new FormData(event.currentTarget);
      const jsonData: { [key: string]: any } = {};

      formData.forEach((value, key) => {
        jsonData[key] = value;
      });
      console.log(jsonData);

      const response = await fetch("http://localhost:8080/handleformdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      if (!response.ok) {
        setServerResponse("error");
      } else {
        setServerResponse("success");
      }
      captchaRef.current?.reset();
      setErrors({});
    } else {
      setErrors(errors);
    }
    $('html, body').animate({scrollTop: $("section").offset().top}, 750);
  }

  return (
    <>
      {Object.keys(errors).length > 0 && (
        <div
          id="contact_form_errors"
          style={{ marginTop: "20px", paddingBottom: "0px" }}
        >
          <div
            className="atr-message atr-message--error atr-sm-padding-horizontal-32  atr-sm-margin-top-24"
            id="errordetails"
          >
            <h4 className="error--title">Please Check the Following</h4>
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
      {serverResponse && (
        <div style={{ marginTop: "20px", paddingBottom: "0px" }}>
          <div className={`atr-message atr-message--${serverResponse} no-title atr-sm-padding-horizontal-32 atr-sm-padding-vertical-16`}>
            <p>{serverMessageMap[serverResponse]}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} method="POST">
        <div className="input__container atr-flex atr-sm-12">
          <input
            type="text"
            name="name"
            ref={nameRef}
            className="input atr-sm-12 atr-sm-margin-bottom-16"
            data-required="true"
            title="Name"
            id="name"
          />
          <label
            style={{ order: "-1" }}
            htmlFor="name"
            className="input__label atr-sm-12"
          >
            Name <span className="form-field-required"> * </span>
          </label>
        </div>
        <CountryDropDown countryRef={countryRef} />
        <div className="input__container atr-flex atr-sm-12">
          <input
            type="text"
            name="email"
            ref={EmailAddressRef}
            className="input atr-sm-12 atr-sm-margin-bottom-16"
            data-emailid="true"
            data-required="true"
            id="email"
            title="Email"
          />
          <label
            style={{ order: "-1" }}
            htmlFor="email"
            className="input__label atr-sm-12"
          >
            Email <span className="form-field-required"> * </span>
          </label>
        </div>
        <div className="input__container atr-flex atr-sm-12">
          <input
            type="text"
            name="organisation"
            ref={organisationRef}
            className="input atr-sm-12 atr-sm-margin-bottom-16"
            data-required="true"
            title="Company"
            id="organisation"
          />
          <label
            style={{ order: "-1" }}
            htmlFor="organisation"
            className="input__label atr-sm-12"
          >
            Company <span className="form-field-required"> * </span>
          </label>
        </div>
        <div className="input__container atr-flex atr-sm-12">
          <input
            type="text"
            name="telephone"
            ref={telephoneRef}
            className="input atr-sm-12 atr-sm-margin-bottom-16"
            title="Telephone"
          />
          <label
            style={{ order: "-1" }}
            htmlFor="telephone"
            className="input__label atr-sm-12"
          >
            Telephone
          </label>
        </div>
        <div className="input__container atr-flex atr-sm-12">
          <select
            className="input atr-sm-12 atr-sm-margin-bottom-16"
            ref={contactaboutRef}
            name="contactabout"
            title="What would you like to contact us about?"
          >
            <option value="">&nbsp;&nbsp;&nbsp;</option>
            <option value="general">I have a general query</option>
            <option value="sales">I have a sales query</option>
            <option value="report">
              I want to find out more about a report
            </option>
            <option value="extranet">I want to ask about IT/Extranet</option>
          </select>
          <label
            style={{ order: "-1" }}
            htmlFor="contactabout"
            className="input__label atr-sm-12"
          >
            What would you like to contact us about?
          </label>
        </div>
        <div className="input__container atr-flex atr-sm-12 atr-sm-margin-top-16">
          <textarea
            name="contactreason"
            ref={contactreasonRef}
            className="input atr-sm-12 atr-sm-margin-bottom-16"
            cols={100}
            rows={8}
            style={{ backgroundColor: "#f1f1f1", paddingTop: "16px" }}
            data-required="true"
            title="What can we help you with?"
            id="contactreason"
          ></textarea>
          <label
            style={{ order: "-1", transform: "translateY(0px)" }}
            htmlFor="contactreason"
            className="input__label atr-sm-12 atr-sm-margin-bottom-8"
          >
            What can we help you with?
            <span className="form-field-required">*</span>
          </label>
        </div>
        <div className="input__container atr-sm-12 atr-sm-margin-top-24">
          <ReCAPTCHA sitekey="6LdzMwgTAAAAAEEHpWldxMwiu1Yz1ctY3aXTYbpw"   ref={captchaRef} />
        </div>
        <input
          className="button button button--red atr-sm-margin-top-24"
          id="submit"
          title="submit"
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
};

export default ContactForm;
