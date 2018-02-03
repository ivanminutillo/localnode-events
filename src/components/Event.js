import React from "react"
import Calendar from './svg/Calendar'
import Bookmark from './svg/Bookmark'

const DAYS_OF_WEEK = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
]

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
]

export default ({ event }) => {
  let startDate = new Date(event.start.dateTime)

  let day = DAYS_OF_WEEK[startDate.getDay()]
  let month = MONTHS[startDate.getMonth()]
  let date = startDate.getDate()
  let hours = startDate.getHours() % 12
  let minutes = startDate.getMinutes()
  let AMPM = startDate.getHours() < 12 ? `AM` : `PM`

  if (minutes <= 10) {
    minutes = `0${minutes}`
  }
  let displayStartDate = `${day}, ${month} ${date} at ${hours}:${minutes}${AMPM}`
  return (
    <div className='event'>
      <h4 className='event_summary'>
        <span><Bookmark width='30' heigth='30' style={{ width: `30px` }} /></span>
        {event.summary}</h4>
      <h6 className='event_description'>{event.description}</h6>
      <p className='event_date'>
        <span><Calendar style={{ width: `30px` }} /></span>
        {displayStartDate}</p>
      <p className='event_location'>{event.location}</p>
    </div>
  )
}
