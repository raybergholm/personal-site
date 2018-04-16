import React from "react";

import FlexColumnContainer from "../../components/layout/FlexColumnContainer";

const fetchMockContent = () => {

    return {
        mainContent: {},
        rightContent: {}
    };
};

const Page = () => (
    <div>
        <p>I am the blog feed page</p>

        <FlexColumnContainer {...fetchMockContent()} />
    </div>
);

export default Page;