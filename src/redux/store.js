import textareaDataReducer from "./textareaDataReducer";

let store = {
    _state: {
        pageWrapper: {
            header: {
                text: "hello, i was imported from state"
            },
            main: {
                path: "/main",
                items: [
                    "password 1",
                    "password 2",
                    "password 3",
                    "password 4",
                ]
            },
            settings: {
                path: "/settings",
                items: [
                    "setting 1",
                    "setting 2",
                    "setting 3",
                    "setting 4",
                ]
            },
            test: {
                path: "/test",
                posts: [

                ],
                textareaData: ""
            }
        },
        sideBar: {
            menu: {
                items: [
                    {
                        name: "Main",
                        link: "main"
                    },
                    {
                        name: "Test",
                        link: "test"
                    },
                    {
                        name: "Settings",
                        link: "settings"
                    },
                ]
            },
        },
    },
    getState() {
        return this._state;
    },
    subscribe(listener) {
        this.callSubscriber = listener;
    },
    callSubscriber() { // function that will be overridden by subscribe
    },
    dispatch(action) {
        this._state.pageWrapper.test = textareaDataReducer(
            this._state.pageWrapper.test,
            action
        );
        this.callSubscriber(this._state);
    },
};

export default store;