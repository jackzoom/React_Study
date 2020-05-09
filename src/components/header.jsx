import React from "react";
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="dis-flex">
                <div className="header-title">{this.props.title}</div>
                <div className="header-nav">{this.props.links}</div>
            </div>
        )
    }
}