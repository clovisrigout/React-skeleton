import AppDispatcher from '../AppDispatcher.js';
import UserActionTypes from '../constants/UserActionTypes.js';


class UserActionCreator {

	static createUser(id, username) {
		AppDispatcher.dispatch({
			actionType: UserActionTypes.CREATE_USER,
			id: id,
			username: username
		});
	}

}
export default UserActionCreator;