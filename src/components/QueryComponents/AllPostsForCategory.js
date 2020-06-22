import React from "react";
import { Query } from 'react-apollo'
import ALL_POST_FOR_CATEGORY_QUERY from '../../queries/graphqlQueryAllPostForCategory'
import ListGroup from 'react-bootstrap/ListGroup'
import Logo from "./../ReUsableComponents/GitLogo";
import {Link} from "react-router-dom";
import {useParams} from 'react-router';
import Spinner from 'react-bootstrap/Spinner'
import "./AllPostsForCategory.css"
const Posts = () => {
    const name = useParams();
    const category_string = name.name;
    return (
        <div className="container container_custom">
            <Query query={ALL_POST_FOR_CATEGORY_QUERY} variables={{category: category_string}}>
                {({ loading, error, data }) => {
                    if (loading) return   <Spinner animation="border" variant="dark" />;
                    if (error) return <div>Error</div>;
                    const linksToRender = data.feed2.blogposts;
                    return (
                        <div className="jumbotron jumbotron_custom">
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h3 className="text">Posts for category  <span className="span2">{category_string}</span> </h3>
                                </ListGroup.Item>
                                <div>
                                    {linksToRender.map((blogpost, i) => {
                                        const post_name ="../posts/"+ blogpost.name;
                                        return (
                                            <ListGroup.Item>
                                                <Logo beforehover={require("../../resources/cookie-cartoon-png-1.png")}
                                                      afterhover={require("../../resources/cookie-cartoon-png-1.png")}/>
                                                {' '}
                                                <Link to={post_name} className="link"> {blogpost.name} </Link>
                                                <div className="desc"> {blogpost.description.substring(0,50)}....</div>
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

export default Posts;