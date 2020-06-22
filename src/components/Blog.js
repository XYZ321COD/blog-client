import React  from 'react'
import { CategoriesMain }from "./QueryComponents/Categories"
import Aggregator from "./ReUsableComponents/Aggregator";
import CategoriesAndRecentPosts from "./ReUsableComponents/ContainerForCategoriesAndRecentPosts";

function BlogCategories() {
    return (
        <div>
            <CategoriesMain>
            </CategoriesMain>
        </div>
    )
}
function Blog () {
        return (
            <Aggregator firstFunction={BlogCategories} secondFunction={CategoriesAndRecentPosts}/>
        )
}

export default Blog;