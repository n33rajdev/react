import { makeObservable, observable, computed, action, flow, autorun, runInAction } from "mobx"

class UserStore {

    userInfo = {
        id: 'cs117',
        name: 'code',
        subject: ['Math', 'Hindi', 'English']

    }


    constructor() {
        makeObservable(this, {
            userInfo: observable,
            updateUserName: action,
            addSubject: action,
            totalSubject: computed
        })
        runInAction(this.myRunInAction);
        autorun(this.myAutoRun);
    }

    get totalSubject() {
        console.log('Inside total subject');

        return this.userInfo.subject.length;
    }

    updateUserName = (name) => {
        this.userInfo.name = name;
        console.log('Inside update user');
    }

    addSubject = (subject) => {
        console.log('Inside add subject');
    }

    myAutoRun = () => {
        console.log('My autorun called');
    }

    myRunInAction = () => {
        console.log('My RunInAction called');
    }
}

export default UserStore;