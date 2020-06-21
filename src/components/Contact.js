import React, {Component} from 'react'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Home.css'
import Aggregator from "./ReUsableComponents/Aggregator";
import CatAndPost from "./ReUsableComponents/CategoriesAndPosts";

export default class Contact extends Component {

    mainColumn() {
        return(
        <div className="container">
            <Col>
                <div className="jumbotron jumbotron_custom">
                    <h1> Hello :) </h1>
                    <h2> If you have any questions, you can contact me via:</h2>
                    <div> Mail: michalznalezniak@gmail.com</div>
                    <Link href="https://www.linkedin.com/in/micha%C5%82-znale%C5%BAniak-b17b81182/"> LinkedIn </Link>
                </div>
            </Col>
        </div>
        )
    }


    render() {
        return (
            <Aggregator firstFunction={this.mainColumn} secondFunction={CatAndPost}/>
        )
    }
}


