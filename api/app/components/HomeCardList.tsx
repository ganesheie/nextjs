import React from 'react'
import Card from './Card'
import {Teaser, TeaserData} from './Interfaces'
const HomeCardList = ({teaserData} : {teaserData :  TeaserData}) => {
  return (
    <section className="atr-sm-padding-top-32">
      <div className="wrapper atr-flex atr-sm-padding-horizontal-32 atr-md-padding-horizontal-48">
          {teaserData.map((teaser : TeaserData, index : number) => 
        (
          <Card key={index} teaser={teaser} addtionalClass={" atr-sm-margin-top-24 atr-xl-padding-right-32"}/> 
        ))}
      </div>
    </section>
  )
}
export default HomeCardList
