import React from "react";
import Categories from "../QueryComponents/Categ";
import RecentPosts from "../QueryComponents/RecentPosts"

function CatsAndRecentPosts() {
    return (
        <div className="component">
            <Categories>
            </Categories>
            <RecentPosts>
            </RecentPosts>
        </div>
    )
}

export default CatsAndRecentPosts;

