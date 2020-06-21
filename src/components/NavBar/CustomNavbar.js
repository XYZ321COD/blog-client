import React, { Component } from "react";
import {Navbar, Nav, NavItem,NavDropdown } from 'react-bootstrap';
import './CustomNavBar.css';
import Logo from '../ReUsableComponents/GitLogo';



export default class CustomNavbar extends Component {
    state = {
        windowHeight: undefined,
        windowWidth: undefined
    }

    handleResize = () => this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
    });

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
    render() {
        if(this.state.windowWidth < 720) {
            return (
            <nav className="navbar navbar-dark navbar-custom  ">
                <Navbar.Brand class="navbar-brand" className="ml-auto" href="/.">
                    <Logo beforehover={require("../../resources/CoffeeCup.png")}
                          afterhover={require("../../resources/CoffeeCup.png")}/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <NavDropdown class="dropdown-toggle" title="Menu" className="px-4" href="./about"
                                 id="downdrop1">
                        <NavDropdown.Item href="/./about/Resume">Resume</NavDropdown.Item>
                        <NavDropdown.Item href="/./about/Aboutme">About me</NavDropdown.Item>
                        <NavDropdown.Item href="/./works">Works</NavDropdown.Item>
                        <NavDropdown.Item href="/./contact">Contact</NavDropdown.Item>


                    </NavDropdown>
                </Nav>
            </nav>
            )
            }
        else {
            return (
                <nav class="navbar navbar-dark navbar-custom">
                    <Navbar.Brand class="navbar-brand" className="ml-3 px-4" href="/.">
                        <Logo beforehover={require("../../resources/CoffeeCup.png")}
                              afterhover={require("../../resources/CoffeeCup.png")}/>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link class="navbar-link" className="px-4" href="/.">Home</Nav.Link>
                        <NavDropdown class="dropdown-toggle" title="About" className="px-4" href="./about"
                                     id="downdrop1">
                            <NavDropdown.Item href="/./about/Resume">Resume</NavDropdown.Item>
                            <NavDropdown.Item href="/./about/Aboutme">About me</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="px-4" href="/./works">Blog</Nav.Link>
                        <Nav.Link className="px-4" href="/./works">Papers</Nav.Link>

                    </Nav>
                    <Nav className="ml-auto">
                        <Navbar.Brand className="px-3" target="_blank" href="https://github.com/XYZ321COD">
                            <Logo beforehover={require("../../resources/GitHub-Mark-Light-32px.png")}
                                  afterhover={require("../../resources/GitHub-Mark-32px.png")}/>
                        </Navbar.Brand>
                        <Navbar.Brand className="px-3" href="/./contact">
                            <Logo beforehover={require("../../resources/MessMe.png")}
                                  afterhover={require("../../resources/MessMe2.png")}/>
                        </Navbar.Brand>
                    </Nav>
                </nav>
            )
        }
        }

}

