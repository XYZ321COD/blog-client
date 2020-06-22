import React, {Component} from 'react'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Contact.css'
import Aggregator from "./ReUsableComponents/Aggregator";
import CatAndPost from "./ReUsableComponents/ContainerForCategoriesAndRecentPosts";

export default class Contact extends Component {

    mainColumn() {
        return(
            <Col>
                <div className="jumbotron jumbotron_custom">
                    <h2 > Hello :) </h2>
                    <div className="text_welcome"> If you have any questions about my posts or cool projects offers that belong to my interests you can contact me via:</div>
                    <div className="text_welcome"> Mail: michalznalezniak@gmail.com</div>
                    <Link href="https://www.linkedin.com/in/micha%C5%82-znale%C5%BAniak-b17b81182/"> LinkedIn </Link>
                </div>
            </Col>
        )
    }


    render() {
        return (
            <Aggregator firstFunction={this.mainColumn} secondFunction={CatAndPost}/>
        )
    }
}


