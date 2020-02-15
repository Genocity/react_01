import {renderReactDom} from "./render";

let state = {
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
            items: [
                "hello"
            ],
            posts: [

            ]
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
};

export let addPost = (postMessage) => {
    if (postMessage && postMessage[0] !== " ") {
        let newPost = {
            message: postMessage,
            anotherInfo: 123
        };
        state.pageWrapper.test.posts.push(newPost);
        renderReactDom(state);
    }
};

export default state;