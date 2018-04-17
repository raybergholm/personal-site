import React from "react";

import FlexColumnContainer from "../../components/layout/FlexColumnContainer";
import BlogPost from "../../components/BlogPost";
import BlogSidebar from "../../components/layout/BlogSidebar";

import mockPosts from "../../config/mockPosts.json";

const fetchMockContent = () => {
  const posts = mockPosts.map((props) => (<BlogPost key={props._id} {...props} />));
  return {
    mainContent: posts,
    rightContent: (<BlogSidebar />)
  };
};

const Page = () => (
  <div id="main-content-section">
    <FlexColumnContainer {...fetchMockContent()} />
  </div>
);

export default Page;