import React from "react";
import { connect } from "react-redux";
import { deleteReminder } from "../actions/postActions";
import PropTypes from "prop-types";

class RemindersList extends React.Component {

	constructor(props) {
        super(props);
        
        console.log(this.props);
    }
    
    // renderList() {
        
    // }

	/*
	 *  render DOM
	 */
	render() {
		// const currentDate = new Date();
		// const currentday = currentDate.getDate();
		// const currentTime = currentDate.getTime();
		// const daysOffset = this.props.newReminder - currentday;
		// const newTime = this.saveReminderTime = new Date(currentTime + daysOffset * 86400000);

        const list = this.props.remindersList;
        let newList = [];

        console.log("RENDER LIST " , this.props);

        for (let i; i < list.length; i++){
            newList.push(<h1>TEszt</h1>);
        }
		  
		return (
			<div className="remindersList">
                {this.props.remindersList}
            </div>
		)
	}
}

RemindersList.propType = {
	deleteReminder: PropTypes.func.isRequired,
	remindersList: PropTypes.array
};

const mapStataeToProps = state => ({
	remindersList: state.reminders.remindersList
});

export default connect (mapStataeToProps, { deleteReminder })(RemindersList);