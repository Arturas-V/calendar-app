import React from "react";
import CalendarHeader from './CalendarHeader.js';
import CalendarBody from './CalendarBody.js';
import ReminderPopup from "./ReminderPopup.js";
import RemindersList from "./RemindersList.js"


class Main extends React.Component {

	/*
	 *  render DOM
	 */
	render() {
		return (
			<React.Fragment>
				<ReminderPopup />
				<div className="calendarContainer">
					<CalendarHeader />
					<CalendarBody />
				</div>
				<RemindersList />
			</React.Fragment>
		)
	}
}

export default Main;