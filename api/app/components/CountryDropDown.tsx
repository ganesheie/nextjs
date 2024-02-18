import React, { useRef } from "react";

const CountryDropDown = ({ countryRef }) => {
  return (
    <div
      className="input__container atr-flex atr-sm-12"
      data-required="true"
      title="country"
    >
      <select
        className="input atr-sm-12 atr-sm-margin-bottom-16"
        ref={countryRef}
        name="country"
        data-required="true"
        title="Country"
        id="country"
      >
        <option value="">&nbsp;&nbsp;&nbsp;</option>
        <option className="input__label atr-sm-12" value="Australia">
          Australia
        </option>
        <option className="input__label atr-sm-12" value="Austria">
          Austria
        </option>
        <option className="input__label atr-sm-12" value="Belgium">
          Belgium
        </option>
        <option className="input__label atr-sm-12" value="Brazil">
          Brazil
        </option>
        <option className="input__label atr-sm-12" value="Bulgaria">
          Bulgaria
        </option>
        <option className="input__label atr-sm-12" value="Canada">
          Canada
        </option>
        <option className="input__label atr-sm-12" value="China">
          China
        </option>
        <option className="input__label atr-sm-12" value="Croatia">
          Croatia
        </option>
        <option className="input__label atr-sm-12" value="Czech Republic">
          Czech Republic
        </option>
        <option className="input__label atr-sm-12" value="Denmark">
          Denmark
        </option>
        <option className="input__label atr-sm-12" value="Estonia">
          Estonia
        </option>
        <option className="input__label atr-sm-12" value="Finland">
          Finland
        </option>
        <option className="input__label atr-sm-12" value="France">
          France
        </option>
        <option className="input__label atr-sm-12" value="Germany">
          Germany
        </option>
        <option className="input__label atr-sm-12" value="Greece">
          Greece
        </option>
        <option className="input__label atr-sm-12" value="Hong Kong SAR">
          Hong Kong SAR
        </option>
        <option className="input__label atr-sm-12" value="Hungary">
          Hungary
        </option>
        <option className="input__label atr-sm-12" value="Iceland">
          Iceland
        </option>
        <option className="input__label atr-sm-12" value="India">
          India
        </option>
        <option className="input__label atr-sm-12" value="Indonesia">
          Indonesia
        </option>
        <option className="input__label atr-sm-12" value="Ireland">
          Ireland
        </option>
        <option className="input__label atr-sm-12" value="Italy">
          Italy
        </option>
        <option className="input__label atr-sm-12" value="Japan">
          Japan
        </option>
        <option className="input__label atr-sm-12" value="Latvia">
          Latvia
        </option>
        <option className="input__label atr-sm-12" value="Lithuania">
          Lithuania
        </option>
        <option className="input__label atr-sm-12" value="Luxembourg">
          Luxembourg
        </option>
        <option className="input__label atr-sm-12" value="Malaysia">
          Malaysia
        </option>
        <option className="input__label atr-sm-12" value="Mexico">
          Mexico
        </option>
        <option className="input__label atr-sm-12" value="Netherlands">
          Netherlands
        </option>
        <option className="input__label atr-sm-12" value="New Zealand">
          New Zealand
        </option>
        <option className="input__label atr-sm-12" value="Norway">
          Norway
        </option>
        <option className="input__label atr-sm-12" value="Philippines">
          Philippines
        </option>
        <option className="input__label atr-sm-12" value="Poland">
          Poland
        </option>
        <option className="input__label atr-sm-12" value="Portugal">
          Portugal
        </option>
        <option className="input__label atr-sm-12" value="Romania">
          Romania
        </option>
        <option className="input__label atr-sm-12" value="Saudi Arabia">
          Saudi Arabia
        </option>
        <option className="input__label atr-sm-12" value="Singapore">
          Singapore
        </option>
        <option className="input__label atr-sm-12" value="Slovakia">
          Slovakia
        </option>
        <option className="input__label atr-sm-12" value="Slovenia">
          Slovenia
        </option>
        <option className="input__label atr-sm-12" value="South Africa">
          South Africa
        </option>
        <option className="input__label atr-sm-12" value="South Korea">
          South Korea
        </option>
        <option className="input__label atr-sm-12" value="Spain">
          Spain
        </option>
        <option className="input__label atr-sm-12" value="Sweden">
          Sweden
        </option>
        <option className="input__label atr-sm-12" value="Switzerland">
          Switzerland
        </option>
        <option className="input__label atr-sm-12" value="Taiwan">
          Taiwan
        </option>
        <option className="input__label atr-sm-12" value="Thailand">
          Thailand
        </option>
        <option className="input__label atr-sm-12" value="Turkey">
          Turkey
        </option>
        <option className="input__label atr-sm-12" value="United Arab Emirates">
          United Arab Emirates
        </option>
        <option className="input__label atr-sm-12" value="USA">
          USA
        </option>
        <option className="input__label atr-sm-12" value="United Kingdom">
          United Kingdom
        </option>
        <option className="input__label atr-sm-12" value="Vietnam">
          Vietnam
        </option>
        <option value="Other">Other</option>
      </select>
      <label
        style={{ order: "-1" }}
        htmlFor="country"
        className="input__label atr-sm-12"
      >
        {" "}
        Country <span className="form-field-required"> * </span>{" "}
      </label>
    </div>
  );
};

export default CountryDropDown;
