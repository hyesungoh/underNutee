import React, { useState } from "react";
import HomePresenter from "../presenter/HomePresenter";

import { RouteComponentProps } from "react-router";

import "pages/home/Home.scss";

const HomeContainer = ({ history }: RouteComponentProps) => {
    const [state, setState] = useState({
        loading: false,
        posts: [
            {
                id: 1,
                title: "글입니다 1",
                content:
                    "### 글 내용입니다\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd",
                created: "20201212",
                view: 10,
            },
            {
                id: 1,
                title: "글입니다 2",
                content:
                    "### 글 내용입니다 2\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n제가 한 거는\n\n",
                created: "20201212",
                view: 10,
            },
            {
                id: 1,
                title: "글입니다 3",
                content:
                    "### 글 내용입니다 3\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd",
                created: "20201212",
                view: 10,
            },
            {
                id: 1,
                title: "글입니다 4",
                content:
                    "### 글 내용입니다 4\n안녕하세요 어쩌구 저쩌구\n> 제가 한 거는\n\n 어쩌구저쩌구점ㄴㅇㅁㄴㅇ asd asd asd asd",
                created: "20201212",
                view: 10,
            },
            {
                id: 1,
                title: "글입니다 5",
                content: "# 123123\n# 1231123\n# 123 123 123\n# 123 123 123",
                created: "20201212",
                view: 10,
            },
            {
                id: 6,
                title: "asdasdasdasd5",
                content: "# 123123\n# 1231123\n# 123 123 123\n# 123 123 123",
                created: "20201212",
                view: 10,
            },
        ],
    });

    const { loading, posts } = state;
    // return <HomePresenter loading={loading} posts={posts} />;
    return <div></div>;
};

export default HomeContainer;
