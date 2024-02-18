import React from 'react'
import Link from 'next/link'
const NavLinks = ({active}) => {
  return (
    <header className="header atr-sm-padding-vertical-32" role="banner">
               <div className="wrapper atr-flex atr-sm-padding-vertical-4 atr-sm-justify-content-space-between atr-sm-align-items-center"><Link href="/" className="header__logo"></Link> 
                  <nav className="header__nav" role="navigation">
                     <div className="header__nav-button" role="button" aria-hidden="true"><span className="header__nav-button-icon"> </span>
                     </div>
                     <ul className="atr-flex atr-sm-12 atr-sm-flex-direction-column atr-lg-flex-direction-row atr-sm-padding-vertical-48 atr-xl-padding-vertical-0 atr-sm-padding-horizontal-48 atr-xl-padding-horizontal-0">
                        <li className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${active==='business' ? 'nav__item--active' : ''}`} id="1435201282086"><Link href="/business" title="Business"> Business</Link></li>
                        <li className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${active==='developer' ? 'nav__item--active' : ''}`} id="1435202094070"><Link href="/developer" title="Developers"> Developers</Link></li>
                        <li className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${active==='api-store' ? 'nav__item--active' : ''}` } id="1435202094414"><Link href="/api-store" title="API store"> API store</Link></li>
                        <li className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${active==='about-us' ? 'nav__item--active' : ''}`} id="1435202096513"><Link href="/about-us" title="About us"> About us</Link></li>
                        <li className={`atr-sm-padding-vertical-8 atr-sm-padding-horizontal-12 ${active==='contact' ? 'nav__item--active' : ''}`} id="1435202096734"><Link href="/contact" title="Contact"> Contact</Link></li>
                        <li className="atr-sm-margin-top-16 atr-xl-margin-top-0 atr-xl-margin-left-12" id="1435201286353"><a href="https://developer.atradius.com/" title="Log in" target="_blank" className="button button--white"> Log in</a></li>
                        <li className="atr-sm-margin-top-16 atr-xl-margin-top-0 atr-xl-margin-left-12" id="1435201286400"><Link href="/register-now" title="Get started" target="_self" className="button button--red"> Get started</Link></li>
                     </ul>
                  </nav>
               </div>
            </header>
  )
}
export default NavLinks
