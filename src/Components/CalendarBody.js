import React from "react";
import CalendarBodyDay from "./CalendarBodyDay.js";

class CalendarBody extends React.Component {

	createDays() {
		const currentDate = new Date();
		const fullYear = currentDate.getFullYear();
		const getMonth = currentDate.getMonth();

  		const numberOfDays = new Date(fullYear, getMonth+1, 0).getDate()+1;
  		const firstDay = new Date(fullYear, getMonth, 1).getDay();

  		let days = [];
		  
		for(let i = 0; i < 35; i++) {

			let isBlank = false;
			let num = i;

			if((firstDay < 7 && firstDay > i) || (firstDay + numberOfDays <= i+1)) {
				isBlank = true;
				num = 0;
			}

			days.push(<CalendarBodyDay key={i} num={num} blank={isBlank}/>);
		}

  		return days;
	}

	/*
	 *  render DOM
	 */
	render() {
		return (
			<div className="calendarBody">
				{this.createDays()}
			</div>
		)
	}
}

export default CalendarBody;