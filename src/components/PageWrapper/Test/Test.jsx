import React from "react";
import s from "./Test.module.css"

let Test = (props) => {

    let newPostComponent = React.createRef();
    let addPost = () => {
        let text = newPostComponent.current.value;
        props.addPost(text);
        newPostComponent.current.value = '';
    };
    let posts = props.state.posts.map((item) => {
        return (
            <div className={s.post}>
                <p>{item.message}</p>
            </div>
        )
    });

    return (
        <div className={s.wrapper}>
            <div>
                <textarea name="name" ref={newPostComponent} className={s.textarea}>{}</textarea>
            </div>
            <button type="submit" onClick={addPost}>Add Post</button>
            <div className={s.posts}>
                {posts}
            </div>
        </div>

    );
};

export default Test;