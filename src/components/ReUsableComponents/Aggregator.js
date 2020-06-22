import React, {Component} from 'react'
import Col from 'react-bootstrap/Col';
import './Aggregator.css'

export default class Aggregator  extends Component {

    state = {
        windowHeight: undefined,
        windowWidth: undefined
    };

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
        if(this.state.windowWidth < 767) {
            return(
                <div class="container">
                    <Col className="column_custom">
                        {this.props.firstFunction()}
                        {this.props.secondFunction()}
                    </Col>
                </div>
            )
        }
        return (
            <div class="container">
                <Col>
                    {this.props.firstFunction()}
                </Col>
                <Col xs={4}>
                    {this.props.secondFunction()}
                </Col>
            </div>
        )
    }
}

