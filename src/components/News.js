import React, {Component } from 'react'
import {Col} from 'react-bootstrap'
import './Home.css'
import Aggregator from "./ReUsableComponents/Aggregator";
import CatAndPost from "./ReUsableComponents/CategoriesAndPosts";

export default class News extends Component {
    mainColumn() {
        return(
            <div className="container">
                <Col>
                    <div className="jumbotron jumbotron_custom">
                        News
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