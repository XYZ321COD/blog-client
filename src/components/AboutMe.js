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
                        For now, there is nothing here :(. 
                        But why don't you check-out my Home-page to get to know me better :)?
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