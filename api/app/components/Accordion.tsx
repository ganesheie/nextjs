
import React from 'react'
import RenderRichTextContent from './RenderRichTextContent'
interface AccordionData {
	AccordionTitle : string
	PanelBody : string
}
interface AccordionProps {
  accordion: AccordionData ; 
  index: number;
}

const Accordion = ({ accordion, index }: AccordionProps) => {
  return (
    <div className="accordion accordion--closed atr-sm-12 atr-xl-8 ${index==0 ? 'atr-sm-margin-top-24' : ''}">
		  	<div className="accordion__header atr-sm-padding-16">
				<span className="accordion__header-number atr-sm-margin-right-16" aria-hidden="true">{++index}</span>
				<h4>{accordion.AccordionTitle}</h4>
			</div>
			<div className="accordion__content atr-sm-padding-horizontal-24 atr-sm-padding-bottom-24">
			<div className="atr-xl-margin-left-48"> <RenderRichTextContent content={accordion.PanelBody} /> </div> 
			</div>
	  </div>
  )
}
export default Accordion
