import {connect} from "react-redux";
import Main from "./Main";

let mapStateToProps = (state) => {
    return ({
        items: state.pageWrapper.main.items,
    });
};

let mapDispatchToProps = () => {
    return ({

    });
};

let MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;