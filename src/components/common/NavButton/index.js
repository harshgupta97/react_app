import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { onNavigate } from '../../../actions/navigation';

class AppNavButton extends Component {
    render() {
        const { href, title, style } = this.props;
        return (
            <Link to={href} onClick={() => this.props.onNavigate({ title: `${title}`, route: `${href}/create` })} className={style}>{title} </Link>
        )
    }
}

const mapStateToProps = state => ({
    nav: state.nav
});

const mapDispatchToProps = {
    onNavigate
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavButton);
