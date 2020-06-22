import React from "react";
import {Categories} from "../QueryComponents/Categories";
import RecentPosts from "../QueryComponents/RecentPosts"

function ContainerForCategoriesAndRecentsPosts() {
    return (
        <div className="component">
            <Categories>
            </Categories>
            <RecentPosts>
            </RecentPosts>
        </div>
    )
}

export default ContainerForCategoriesAndRecentsPosts;

