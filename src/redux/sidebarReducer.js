let initialState = {
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
};

let sidebarReducer = (state = initialState, action) => {
    if (action.type === "SOME_TYPE")
    {

    }
    return state;
};

export default sidebarReducer;