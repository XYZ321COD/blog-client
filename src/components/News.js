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
function News () {
        return (
            <Aggregator firstFunction={BlogCategories} secondFunction={CategoriesAndRecentPosts}/>
        )
}

export default News;