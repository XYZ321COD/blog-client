import React from "react";
import { Query } from 'react-apollo'
import CATEGORIES_QUERY from '../../queries/graphqlQueryForAllCategories'
import ListGroup from 'react-bootstrap/ListGroup'
import Logo from "./../ReUsableComponents/GitLogo";
import {Link} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "./Categories.css"
const Categories = () => {
        return (
        <div>
            <Query query={CATEGORIES_QUERY} id={null}>
                {({ loading, error, data }) => {
                    if (loading) return   <Spinner animation="border" variant="dark" />;
                    if (error) return <div>Error</div>;
                    const categories = data.feed.categories;
                    return (
                        <div className="jumbotron jumbotron_custom">
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="text">Popular categories </div>
                                </ListGroup.Item>
                                <div>
                                    {categories.map((category, i) => {
                                        const stringLink = "./categories/" + category.name;
                                        return (
                                            <ListGroup.Item>
                                                <Logo beforehover={require("../../resources/cookie-cartoon-png-1.png")}
                                                      afterhover={require("../../resources/cookie-cartoon-png-1.png")}/>
                                                {' '}
                                                <Link to={stringLink} className="link"> {category.name} </Link>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </div>
                            </ListGroup>
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};
const CategoriesMain = () => {
    return (
        <div>
            <Query query={CATEGORIES_QUERY} id={null}>
                {({ loading, error, data }) => {
                    if (loading) return   <Spinner animation="border" variant="dark" />;
                    if (error) return <div>Error</div>;
                    const categories = data.feed.categories;
                    return (
                        <div className="jumbotron jumbotron_custom">
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="text">All categories </div>
                                </ListGroup.Item>
                                <div>
                                    {categories.map((category, i) => {
                                        const stringLink = "./categories/" + category.name;
                                        return (
                                            <ListGroup.Item>
                                                <Logo beforehover={require("../../resources/cookie-cartoon-png-1.png")}
                                                      afterhover={require("../../resources/cookie-cartoon-png-1.png")}/>
                                                {' '}
                                                <Link to={stringLink} className="link"> {category.name} </Link>
                                            </ListGroup.Item>
                                        );
                                    })}
                                </div>
                            </ListGroup>
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};
export {
    Categories,
    CategoriesMain,
}