const ADD_POST = 'ADD_POST';
const UPDATE_POST_MESSAGE = "UPDATE_POST_MESSAGE";

let textareaDataReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_POST:
            if (state.textareaData && state.textareaData[0] !== " ") {
                let newPost = {
                    message: state.textareaData,
                    anotherInfo: "unused info"
                };
                state.posts.push(newPost);
            }
            state.textareaData = "";
            return state;

        case UPDATE_POST_MESSAGE:
            state.textareaData = action.textareaData;
            return state;
    }
    return state;
};

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const updatePostMessageActionCreator = (textareaData) => ({
    type: UPDATE_POST_MESSAGE,
    textareaData: textareaData
});

export default textareaDataReducer;