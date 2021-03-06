import React, { useState } from "react";
import { useQueryClient } from "react-query";

import { IBlog } from "types";
import PeopleProfile from "components/Library/PeopleProfile";
import { useMutation } from "react-query";
import { getBlogsByCategory } from "api/blog/fetch";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/user";
import SuggestBlogCard from "./SuggestBlogCard";

interface IList {
    blogs: IBlog[];
}

const List = ({ blogs }: IList) => {
    const categories: string[] = [
        "최신업데이트순",
        "입학순",
        "졸업순",
        "인기순",
    ];

    const [category, setCategory] = useState<string>(categories[0]);
    const currentUser = useRecoilValue(currentUserState);

    const queryClient = useQueryClient();

    const changeCategory = useMutation(
        (value: string) => getBlogsByCategory(value),
        {
            onSuccess: (data) => {
                queryClient.setQueryData("blogs", data);
            },
        }
    );

    const CanMakeBlog = () => {
        if (!currentUser.data) return false;

        if (currentUser.data?.graduationYear !== "0") {
            if (!currentUser.data?.isBlog) return true;
        }

        return false;
    };

    const reducingCategory = (tempCategory: string): string => {
        switch (tempCategory) {
            case "최신업데이트순":
                return "user.lastModifiedDate,ASC";
            case "입학순":
                return "user.entranceYear,ASC";
            case "졸업순":
                return "user.graduationYear,ASC";
            case "인기순":
                return "popular";
            default:
                return "";
        }
    };

    const onCategoryClick = (tempCategory: string) => {
        setCategory(tempCategory);
        const formatedCategory = reducingCategory(tempCategory);
        changeCategory.mutate(formatedCategory);
    };

    return (
        <div className="library__peoples">
            <div className="peoples__category">
                <span>{category}</span>

                <div className="peoples__category--content">
                    {categories.map((tempCategory, index) => (
                        <span
                            key={index}
                            onClick={() => {
                                onCategoryClick(tempCategory);
                            }}
                        >
                            {tempCategory}
                        </span>
                    ))}
                </div>
            </div>

            <div className="peoples__list">
                {CanMakeBlog() ? <SuggestBlogCard /> : null}
                {blogs.map((blog, index) => (
                    <PeopleProfile
                        key={index}
                        blogId={blog.id}
                        name={blog.user.name}
                        entranceYear={blog.user.entranceYear}
                        profileImageUrl={blog.profile.name}
                        content={blog.content}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
