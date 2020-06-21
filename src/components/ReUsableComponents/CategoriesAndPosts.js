import ListGroup from "react-bootstrap/ListGroup";
import Logo from "./GitLogo";
import {Link} from "react-router-dom";
import React from "react";
import Categories from "../QueryComponents/Categ";
import RecentPosts from "../QueryComponents/RecentPosts"
import Agregator from "../ReUsableComponents/Aggregator"

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

