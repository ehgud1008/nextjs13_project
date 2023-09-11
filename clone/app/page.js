import React from "react";
import Feed from "@components/Feed";

import Form from "@components/Form";
import Profile from "@components/Profile";
import PromptCard from "@components/PromptCard";
import Provider from "@components/Provider";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Project
                <br className="max-md:hidden" />
                <span className="orange_gradient">NextJS13 & React 18</span>
            </h1>
            <p className="desc text-center">
                프로젝트임
            </p>

        <Feed></Feed>
        </section>
    )
}

export default Home;