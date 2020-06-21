import React, { Component } from "react";

export default class Logo extends React.Component {
    render() {
        return (
            <img src={this.props.beforehover}
                     onMouseOver={e => (e.currentTarget.src =  this.props.afterhover )}
                 onMouseOut={e => (e.currentTarget.src = this.props.beforehover)}
            alt="Logo"/>
        );
    }
}