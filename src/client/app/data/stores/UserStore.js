import AppDispatcher from '../AppDispatcher.js';
import UserActionTypes from '../constants/UserActionTypes.js';

import { EventEmitter } from "events"; 

class UserStore extends EventEmitter {

  constructor() {
    super();
    this.user = {};
  }

  handleActions(action) {
    switch (action.actionType) {
      case UserActionTypes.CREATE_USER:
        console.log("UserStore recieved an action for CREATE_USER")
        this.createUser(action.id, action.username)
        this.emitChange()
        break;
    }
  }

  createUser(id, username) {
    var newUser = {
      id: id,
      username: username
    }
    this.user = newUser
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

const userStore = new UserStore();

AppDispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
