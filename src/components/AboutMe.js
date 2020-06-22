import React, {Component } from 'react'
import {Col} from "react-bootstrap";
import Aggregator from "./ReUsableComponents/Aggregator";
import CatAndPost from "./ReUsableComponents/ContainerForCategoriesAndRecentPosts";
export default class Aboutme extends Component {

    mainColumn() {
        return (
            <div className="container">
                <Col>
                    <div className="jumbotron jumbotron_custom">
                        AboutMe
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