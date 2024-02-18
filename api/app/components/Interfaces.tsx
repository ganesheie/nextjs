export interface AccordionData {
	AccordionTitle : string
	PanelBody : string
}
export interface AccordionProps {
  accordion: AccordionData ; 
  index: number;
}
export interface AccordionListProps{
    accordionList : AccordionData [],
    accordiontitle : string,
    accordionsubtitle : string,
    sectionClass : string,
}
export interface Button {
  URL : String,
  LinkText : String
}
export interface Teaser {
  TeaserTitle : string,
  APIBody : string
  TeaserButton : Button 
}
export interface TeaserData {
  teaser : Teaser [], 
}