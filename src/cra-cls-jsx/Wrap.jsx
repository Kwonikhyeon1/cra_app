import React from "react";

class Wrap extends React.Component {
    render () {
        return(
            <>
                <div id="wrap">
                <Gnb />
                <LastNews />
                <CloudApps />
                </div>
            </>
        );
    }
}

export default Wrap;