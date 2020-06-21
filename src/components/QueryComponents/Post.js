import React from "react";
import { Query } from 'react-apollo'
import FEED_QUERY3 from '../../queries/feed3query'
import {useParams} from 'react-router';
import Spinner from "react-bootstrap/Spinner";
import "./Post.css"

const Post = () => {
    const name = useParams();
    const category_string = name.name;
    return (
        <div className="container container_custom">
            <Query query={FEED_QUERY3} variables={{name: category_string}}>
                {({ loading, error, data }) => {
                    if (loading) return   <Spinner animation="border" variant="dark" />;
                    if (error) return <div>Error</div>;
                    const linksToRender = data.feed3.blogpost;
                    return (
                        <div className="jumbotron jumbotron_custom">
                                <div>
                                    {linksToRender.map((blogpost, i) => {
                                        return (
                                                <div className="post_text">
                                                    <h2> {blogpost.name} </h2>
                                                    <p> Posted on <span className="span">{blogpost.createdAt.substring(0,10)}</span> by Michał :)</p>
                                                    <p> {blogpost.description}</p>
                                                </div>
                                        );
                                    })}
                                </div>
                        </div>
                    );
                }}
            </Query>
        </div>

);
};

export default Post