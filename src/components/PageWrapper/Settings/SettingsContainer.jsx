import {connect} from "react-redux";
import Settings from "./Settings";

let mapStateToPops = (state) => {
    return ({
        items: state.pageWrapper.settings.items,
    });
};

let mapDispatchToProps = () => {
    return ({

    });
};

let SettingsContainer = connect(mapStateToPops, mapDispatchToProps)(Settings);

export default SettingsContainer;