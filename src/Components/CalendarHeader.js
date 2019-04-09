import React from "react";

class CalendarHeader extends React.Component {

	constructor(props) {
		super(props);
		this.dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	}

	/*
	 *  render DOM
	 */
	render() {		

		return (
			<div className="calendarHeader">
				{this.dayNames.map((title,i) =>  
					<span key={i} className="calendarHeaderDay">{title}</span>
				)}
			</div>
		)
	}
}

export default CalendarHeader;