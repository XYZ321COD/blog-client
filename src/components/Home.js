import React, {Component} from 'react'
import './Home.css'
import Aggregator from "./ReUsableComponents/Aggregator"
import CatAndPost from './ReUsableComponents/ContainerForCategoriesAndRecentPosts'
export default class Home extends Component {
    mainColumn() {
        return (
            <div className="jumbotron jumbotron_custom">
                <h2> Hello :) </h2>
                <div className="text_welcome"> My name is Michał and I'm a computer science student at the bachelor level. During my studies, I had worked with FPGA team of Jagiellonian University and I had the opportunity to participate in a research project.
                    I have also worked as a commercial C++ software engineer. At this moment I am mainly interested in image recognition and deep learning.
                    As you probably guessed my homepage is also a blog - WOW.<br/>
                    I will occasionally blog about new things I learn.
                </div>
                <div className='text'> Programming languages I worked with </div>
                <ul className="text_welcome">
                    <li>C++ (C++11 - C++17)</li>
                    <li>Python</li>
                    <li>JavaScript (React, Nodejs)</li>
                    <li>Mathematica</li>
                </ul>
                <div className='text'> Technologies I have worked on </div>
                <ul className="text_welcome">
                    <li>Deep Learning (PyTorch, Keras, Tensorflow)</li>
                    <li>Machine Learning</li>
                    <li>Databases (MySQL)</li>
                    <li>Content Management System (Strapi)</li>
                    <li>REST APIs (Apollo GraphQL)</li>
                </ul>
                <div className='text'> Other Interests</div>
                <ul className="text_welcome">
                    <li>Philosophy of Existentialism</li>
                    <li>Evolutionary processes</li>
                </ul>
                <div className="text_welcome">
                    Actually my webpage was created by me. Using React as frontend framework. Strapi as backend and Apollo which provides connectivity between my frontend and backend.
                </div>
            </div>

        )
    }

    render() {
        return (
            <Aggregator firstFunction={this.mainColumn} secondFunction={CatAndPost}/>
        )
    }
}

