import React from "react";
import { Query } from 'react-apollo'
import RECENT_POSTS_QUERY from '../../queries/grapqlQueryForRecentPosts'
import ListGroup from 'react-bootstrap/ListGroup'
import Logo from "./../ReUsableComponents/GitLogo";
import './RecentPosts.css'
import {Link} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
const RecentPosts = () => {
    return (
        <div>
            <Query query={RECENT_POSTS_QUERY} id={null}>
                {({ loading, error, data }) => {
                    if (loading) return   <Spinner animation="border" variant="dark" />;
                    if (error) return <div>Error</div>;
                    const linksToRender = data.feed4.blogposts;
                    return (
                        <div className="jumbotron jumbotron_custom">
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <div className="text">Recent posts</div>
                                </ListGroup.Item>
                                <div>
                                    {linksToRender.map((blogpost, i) => {
                                        const stringLink = "../posts/"+ blogpost.name;

                                        return (
                                            <ListGroup.Item>
                                                <Logo beforehover={require("../../resources/cookie-cartoon-png-1.png")}
                                                      afterhover={require("../../resources/cookie-cartoon-png-1.png")}/>
                                                {' '}
                                                <Link to={stringLink} className="link"> {blogpost.name} </Link>
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

export default RecentPosts;