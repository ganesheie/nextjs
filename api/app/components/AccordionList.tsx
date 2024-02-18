import React from 'react'
import Accordion from './Accordion'
interface AccordionData {
	AccordionTitle : string
	PanelBody : string
}
interface AccordionListProps{
    accordionList : AccordionData [],
    accordiontitle : string,
    accordionsubtitle : string,
    sectionClass : string,
}

const AccordionList = ({accordionList , accordiontitle , accordionsubtitle, sectionClass} : AccordionListProps) => {
  return (
    <section className={sectionClass} >
    <div className="wrapper atr-flex atr-sm-justify-content-center atr-sm-padding-horizontal-32 atr-md-padding-horizontal-48">
      {accordiontitle && (
        <h2 className={`atr-sm-12 atr-xl-8 ${accordionsubtitle ? ' atr-sm-margin-bottom-24' :'' }`}>{accordiontitle}</h2>
      )}
      {accordionsubtitle && (<p className="atr-sm-12 atr-xl-8 atr-sm-margin-top-16 atr-sm-margin-bottom-24">{accordionsubtitle}</p>)}
      {accordionList.map((accordion : AccordionData, index:number) => 
        <Accordion key={index} accordion={accordion} index={index} />
      )}
    </div>
    </section>
  )
}
export default AccordionList
