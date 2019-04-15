import React from "react";
import { connect } from "react-redux";
import { closeReminderPopup, addReminder } from "../actions/postActions";
import PropTypes from "prop-types";

class ReminderPopup extends React.Component {

	constructor(props) {
		super(props);
		
		this.popupCloseClickHandler = this.popupCloseClickHandler.bind(this);
		this.saveReminder = this.saveReminder.bind(this);
		
		this.saveReminderTime = null;
	}

	static STYLE_VISIBLE = {display: 'block'};
	static STYLE_HIDDEN = {display: 'none'};

	popupCloseClickHandler() {
		this.props.closeReminderPopup();
	}

	saveReminder() {
		const reminderTime = this.saveReminderTime.getTime();
		localStorage.setItem('reminder ' + reminderTime, reminderTime);
		this.popupCloseClickHandler();
		this.props.addReminder(reminderTime);
	}

	/*
	 *  render DOM
	 */
	render() {
		const currentDate = new Date();
		const currentday = currentDate.getDate();
		const currentTime = currentDate.getTime();
		const daysOffset = this.props.newReminder - currentday;
		const newTime = this.saveReminderTime = new Date(currentTime + daysOffset * 86400000);

		  
		return (
			<div className="reminderPopup" style={this.props.newReminder ? ReminderPopup.STYLE_VISIBLE : ReminderPopup.STYLE_HIDDEN}>
				<span onClick={this.popupCloseClickHandler}>close</span>
				<h4>Add New Reminder To:</h4>
				<h4>{newTime.toLocaleString()}</h4>
				<p className="reminderPopupSaveReminder" onClick={this.saveReminder}>Save reminder</p>
			</div>
		)
	}
}

ReminderPopup.propType = {
	closeReminderPopup: PropTypes.func.isRequired,
	addReminder: PropTypes.func.isRequired,
	newReminder: PropTypes.number
};

const mapStataeToProps = state => ({
	newReminder: state.reminders.newReminder
});

export default connect (mapStataeToProps, { closeReminderPopup, addReminder })(ReminderPopup);