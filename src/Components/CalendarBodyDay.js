import React from "react";
import { connect } from "react-redux"
import { showReminderPopup } from "../actions/postActions";
import PropTypes from "prop-types";

class CalendarBodyDay extends React.Component {

	constructor(props) {
		super(props);

		this.dayClickHandler = this.dayClickHandler.bind(this);
	}

	static styleName = "calendarBodyDay";
	static blankStyleName = "calendarBodyDayBlank ";

	dayClickHandler() {
		this.props.showReminderPopup(this.props.num);
	}

	/*
	 *  render DOM
	 */
	render() {
		return (
			<div onClick={(e) => this.dayClickHandler(e)} className={this.props.blank ? CalendarBodyDay.blankStyleName + CalendarBodyDay.styleName : CalendarBodyDay.styleName}>{this.props.num ? this.props.num : " "}</div>
		)
	}
}

CalendarBodyDay.propType = {
	showReminderPopup: PropTypes.func.isRequired,
	newReminder: PropTypes.number
};

const mapStataeToProps = state => ({
	newReminder: state.reminders.newReminder
});

export default connect (mapStataeToProps, { showReminderPopup })(CalendarBodyDay);