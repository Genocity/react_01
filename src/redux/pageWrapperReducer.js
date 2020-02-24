const ADD_POST = 'ADD_POST';
const UPDATE_POST_MESSAGE = "UPDATE_POST_MESSAGE";

let initialState = {
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
        posts: [],
        textareaData: ""
    }
};

let pageWrapperReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.test.textareaData && state.test.textareaData[0] !== " ") {
                let newPost = {
                    message: state.test.textareaData,
                    anotherInfo: "unused info"
                };
                return {
                    ...state,
                    test: {
                        ...state.test,
                        posts: [...state.test.posts, newPost],
                        textareaData: "",
                    },
                };
            } else {
                return state;
            }
        case UPDATE_POST_MESSAGE:
            return {
                ...state,
                test: {
                    ...state.test,
                    textareaData: action.textareaData
                }
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const updatePostMessageActionCreator = (textareaData) => ({
    type: UPDATE_POST_MESSAGE,
    textareaData: textareaData
});

export default pageWrapperReducer;