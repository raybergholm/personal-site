import React from "react";

import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import Footer from "../components/Footer";

const content = {
    
};

const Homepage = () => (
    <div>
        <Header />
        <PageContainer content={content}/>
        <Footer />
    </div>
);

export default Homepage;