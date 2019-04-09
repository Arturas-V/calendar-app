import React from "react";
import CalendarHeader from './CalendarHeader.js';
import CalendarBody from './CalendarBody.js';


class Main extends React.Component {

	/*
	 *  render DOM
	 */
	render() {
		return (
			<div className="calendarContainer">
			    <CalendarHeader />
			    <CalendarBody />
			</div>
		)
	}
}

export default Main;