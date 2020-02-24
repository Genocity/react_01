import {connect} from "react-redux";
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../redux/pageWrapperReducer";
import Test from "./Test";

let mapStateToProps = (state) => {
    return ({
        posts: state.pageWrapper.test.posts,
        textareaData: state.pageWrapper.test.textareaData
    });
};

let mapDispatchToProps = (dispatch) => {
    return ({
        addPost: () => dispatch(addPostActionCreator()),
        updatePostMessage: (textareaData) => {
            dispatch(updatePostMessageActionCreator(textareaData))
        }
    });
};

let TestContainer = connect(mapStateToProps, mapDispatchToProps)(Test);

export default TestContainer;