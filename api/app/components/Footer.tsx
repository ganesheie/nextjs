import React from 'react'

const Footer = () => {
  return (
    <>
    <hr className="wrapper" />
    <footer className="atr-sm-padding-vertical-48 atr-lg-padding-vertical-64" role="contentinfo">
      <div className="wrapper atr-flex atr-sm-align-items-center atr-sm-flex-direction-column">
          <div className="atr-sm-margin-bottom-24">
            <a href="https://www.linkedin.com/company/atradius" className="atr-sm-margin-horizontal-6" title="LinkedIn" target="_blank"> 
              <img alt="LinkedIn" src="/img/icons/linkedin.svg" height="32" width="32"/> 
            </a> 
            <a href="https://www.youtube.com/user/atradiusgroup" className="atr-sm-margin-horizontal-6" title="Youtube" target="_blank">
              <img alt="Youtube (API)" src="/img/icons/youtube.svg" height="32" width="32" /> 
            </a>
          </div>
          <div className="atr-flex atr-sm-align-items-center atr-sm-margin-bottom-24 atr-sm-flex-direction-column atr-lg-flex-direction-row">
            <a className="text--small link--underline" href="https://group.atradius.com/gdpr.html" title="GDPR" target="_blank">GDPR</a> 
            <span className="vr atr-sm-margin-horizontal-8 atr-md-hide" aria-hidden="true"></span> 
            <a className="text--small link--underline" href="https://group.atradius.com/privacy-statement.html" title="Privacy Statement" target="_blank">Privacy Statement</a> 
            <span className="vr atr-sm-margin-horizontal-8 atr-md-hide" aria-hidden="true"></span> 
            <a className="text--small link--underline" href="https://group.atradius.com/cookie-information.html" title="Cookie Information" target="_blank">Cookie Information</a> 
            <span className="vr atr-sm-margin-horizontal-8 atr-md-hide" aria-hidden="true"></span> 
            <a className="text--small link--underline" href="https://group.atradius.com/security.html" title="Phishing &amp; Security" target="_blank">Phishing &amp; Security</a> 
            <span className="vr atr-sm-margin-horizontal-8 atr-md-hide" aria-hidden="true"></span> 
            <a className="text--small link--underline" href="https://group.atradius.com/legal-notice.html" title="Legal Notice" target="_blank">Legal Notice</a> <span className="vr atr-sm-margin-horizontal-8 atr-md-hide" aria-hidden="true"></span> 
            <a className="text--small link--underline" href="https://group.atradius.com/supplier-information.html" title="Supplier Information" target="_blank">Supplier Information</a> 
            <span className="vr atr-sm-margin-horizontal-8 atr-md-hide" aria-hidden="true"></span> 
            <a className="text--small link--underline" href="https://group.atradius.com/atradius-customer-service-charter.html" title="Customer Service Charter" target="_blank">Customer Service Charter</a> 
            <span className="vr atr-sm-margin-horizontal-8 atr-md-hide" aria-hidden="true"></span> 
            <a className="text--small link--underline" href="https://group.atradius.com/disclaimer.html" title="Disclaimer" target="_blank">Disclaimer</a>
            </div>
            <p className="text--xsmall">© Atradius N.V. 2004 - 2024</p>
         </div>
      </footer>
    </>
  )
}

export default Footer
