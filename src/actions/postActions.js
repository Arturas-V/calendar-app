import { SHOW_REMINDER_POPUP, CLOSE_REMINDER_POPUP, ADD_REMINDER, DELETE_REMINDER } from "./types";

export const showReminderPopup = (reminder) => dispatch => {
	dispatch({
		type: SHOW_REMINDER_POPUP,
		payload: reminder
	});
}

export const closeReminderPopup = () => dispatch => {
	dispatch({
		type: CLOSE_REMINDER_POPUP,
		payload: null
	});
}

export const addReminder = (reminder) => dispatch => {
	dispatch({
		type: ADD_REMINDER,
		payload: reminder
	});
}

export const deleteReminder = (reminder) => dispatch => {
	dispatch({
		type: DELETE_REMINDER,
		payload: reminder
	})
}