import React from 'react'
import HomeSection2 from './HomeSection2'

const HomeSection2List = ({Section3Teasers}) => {
  return (
  <section className="atr-sm-padding-top-64">
	<div className="wrapper atr-flex atr-sm-padding-horizontal-32 atr-md-padding-horizontal-48 atr-xl-padding-right-0 atr-xl-padding-left-16">
    {Section3Teasers.map((teaser, index) => (
      <HomeSection2 key={index} teaser={teaser}  teaserclass={index === Section3Teasers.length - 1 ? '8' : '4'} />
    ))}

  </div>
  </section>
  )
}

export default HomeSection2List
