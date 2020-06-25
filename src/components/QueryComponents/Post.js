import React from "react";
import { Query } from 'react-apollo'
import {Link} from 'react-router-dom';
import POST_WITH_GIVEN_NAME_QUERY from '../../queries/graphqlQueryForPostWithGivenName'
import {useParams} from 'react-router';
import Spinner from "react-bootstrap/Spinner";
import "./Post.css"
import Pdf from '../../../public/files/Floating_Point_Representation.pdf';


const Post = () => {
    const name = useParams();
    const category_string = name.name;
    return (
        <div className="container container_custom">
            <Query query={POST_WITH_GIVEN_NAME_QUERY} variables={{name: category_string}}>
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
                                                    <div dangerouslySetInnerHTML={{__html: blogpost.description}} />
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