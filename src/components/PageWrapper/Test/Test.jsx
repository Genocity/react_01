import React from "react";
import s from "./Test.module.css"

let Test = (props) => {
    let posts = props.posts.map((item) => {
        return (
            <div className={s.post}>
                <p>{item.message}</p>
            </div>
        )
    });

    let onSendMessage = () => {
        props.addPost();
    };

    let onTextareaChange = (e) => {
        let textareaData = e.target.value;
        props.updatePostMessage(textareaData);
    };

    return (
        <div className={s.wrapper}>
            <div>
                <textarea
                    name="name"
                    onChange={onTextareaChange}
                    className={s.textarea}
                    value={props.textareaData}
                />
            </div>
            <button
                type="submit"
                onClick={onSendMessage}
                className={s.addPost}>Add Post
            </button>

            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
};

export default Test;