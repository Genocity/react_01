import React from "react";
import s from "./Test.module.css"
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../redux/textareaDataReducer";

let Test = (props) => {


    let posts = props.state.posts.map((item) => {
        return (
            <div className={s.post}>
                <p>{item.message}</p>
            </div>
        )
    });

    let onSendMessage = () => {
        let temp = addPostActionCreator();
        props.dispatch(temp);
    };

    let onTextareaChange = (e) => {
        let textareaData = e.target.value;
        props.dispatch(updatePostMessageActionCreator(textareaData));
    };
    
    return (
        <div className={s.wrapper}>
            <div>
                <textarea
                    name="name"
                    onChange={onTextareaChange}
                    className={s.textarea}
                    value={props.state.textareaData}
                />
            </div>
            <button
                type="submit"
                onClick={onSendMessage}
                className={s.addPost}
            >Add Post</button>

            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
};

export default Test;