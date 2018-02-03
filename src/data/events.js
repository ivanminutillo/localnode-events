let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=AIzaSyBZiJsopvYiDkBIg_NY4PiHrjir1odPgsQ`

export default {
  general: makeGoogleCalendarURL(`4ukd6mrt6phrklv0btqka73d2s@group.calendar.google.com`),
}
