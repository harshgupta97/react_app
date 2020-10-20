import React, { Component } from "react";
import { connect } from 'react-redux';
import AppHeader from "./Header";

class AppHeaderContainer extends Component {
    render() {
        const { nav } = this.props;
        return (
            <AppHeader title={nav.current.title} route={nav.current.route} />
        )
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps, {})(AppHeaderContainer);