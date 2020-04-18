import React from "react";

function Conatiner(props) {
    return <div className={`container${props.fluid ? '-fluid' :""}`} {...props} />;
}

export default Conatiner;
