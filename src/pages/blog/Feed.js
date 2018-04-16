import React from "react";

import FlexColumnContainer from "../../components/layout/FlexColumnContainer";

import BlogPost from "../../components/BlogPost";

import mockPosts from "../../config/mockPosts.json";

const fetchMockContent = () => {
    const posts = mockPosts.map((props) => (<BlogPost key={props._id} {...props} />));
    return {
        mainContent: posts
    };
};

const Page = () => (
    <div>
        <p>I am the blog feed page</p>

        <FlexColumnContainer {...fetchMockContent()} />
    </div>
);

export default Page;