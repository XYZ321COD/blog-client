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
                    <li> Package, dependency and environment management tools </li>
                        <ul>
                            <li> Web apps Front-end management - npm </li>
                            <li> Package management and environment management in data science projects - conda</li>
                            <li> creation, deployment of applications and accelerating them by GPU - docker </li>

                        </ul>
                    <li>Deep Learning </li>
                    <ul>
                        <li> PyTorch</li>
                        <li> Keras </li>
                        <li> TensorFlow </li>
                    </ul>
                    <li>Machine Learning</li>
                    <li>Databases</li>
                    <ul>
                        <li> MySQL</li>
                        <li> PostgreSQL </li>
                        <li> Request and deliver data to web apps - Apollo GraphQL </li>
                        <li> Data access, migrations and visual data management - Prisma </li>

                    </ul>
                    <li>Content Management System </li>
                    <ul>
                        <li> Strapi</li>
                    </ul>
                </ul>
                <div className='text'> Other Interests</div>
                <ul className="text_welcome">
                    <li>Philosophy of Existentialism</li>
                    <li>Evolutionary processes</li>
                </ul>
                <div className="text_welcome">
                    Actually my web-page was a little project of mine. I decided that I will use React as frontend framework. On the client-side, I used Apollo GraphQL queries. Prisma allowed me to connect to my database and translate my graphQL queries to classical database language such as PostgreSQL
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

