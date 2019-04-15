import { SHOW_REMINDER_POPUP, CLOSE_REMINDER_POPUP, ADD_REMINDER, DELETE_REMINDER } from "../actions/types";

const initialState = {
	reminders: {
		newReminder: null,
		remindersList: []
	}
}

export default function(state = initialState, action) {

	switch (action.type) {

		case SHOW_REMINDER_POPUP:
			return {
				...state,
				newReminder: action.payload
			}

		case CLOSE_REMINDER_POPUP:
			return {
				...state,
				newReminder: null
			}

		case ADD_REMINDER:

			// state.remindersList.push(action.payload);

			return {
				...state,
				remindersList: action.payload
			}

		case DELETE_REMINDER:

			function deleteReminder(item) {
				return item !== action.payload;
			}

			return {
				...state,
				remindersList: state.remindersList.filter(deleteReminder)
			}

		default:
			return state;

	}
}