import React from "react";
import * as ui from "./ErrorDisplayerUI";

const ErrorDisplayer = ({ retry }: any) => {
    return (
        <ui.ErrorWrapper>
            <ui.message>Error!</ui.message>
            <ui.button onClick={retry}>Try Again</ui.button>
        </ui.ErrorWrapper>
    );
};

export default ErrorDisplayer;
