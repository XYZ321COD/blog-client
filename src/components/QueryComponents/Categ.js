import React from "react";
import { Query } from 'react-apollo'
import FEED_QUERY from '../../queries/feedquery'
import ListGroup from 'react-bootstrap/ListGroup'
import Logo from "./../ReUsableComponents/GitLogo";
import {Link} from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import '../Home.css'

const Categories = () => {
        return (
        <div>
            <Query query={FEED_QUERY} id={null}>
                {({ loading, error, data }) => {
                    if (loading) return   <Spinner animation="border" variant="dark" />;
                    if (error) return <div>Error</div>;
                    const linksToRender = data.feed.categories;
                    return (
                        <div className="jumbotron jumbotron_custom">
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="text">Categories</div>
                                </ListGroup.Item>
                                <div>
                                    {linksToRender.map((category, i) => {
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

export default Categories;