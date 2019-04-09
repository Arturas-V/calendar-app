import React from "react";

class CalendarBody extends React.Component {

	createDays() {
		const currentDate = new Date();
		const fullYear = currentDate.getFullYear();
		const getMonth = currentDate.getMonth();

  		const numberOfDays = new Date(fullYear, getMonth+1, 0).getDate();
  		const firstDay = new Date(fullYear, getMonth, 1).getDay();

  		let days = [];
  		let key = 0;
  		let remainingDays = 35;

  		if(firstDay < 7) {
  			for(let i = 0; i < firstDay; i++) {
	  			days.push(<div key={key} className="calendarBodyDay calendarBodyDayBlank"> </div>);
	  				key++;
	  				remainingDays--;
	  		}
  		}  		

  		for(let i = 0; i < numberOfDays; i++) {
  			days.push(<div key={key} className="calendarBodyDay">{i+1}</div>);
  			key++;
  			remainingDays--;
  		}

  		for(let i = 0; i < remainingDays; i++) {
  			days.push(<div key={key} className="calendarBodyDay calendarBodyDayBlank"> </div>);
  			key++;
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