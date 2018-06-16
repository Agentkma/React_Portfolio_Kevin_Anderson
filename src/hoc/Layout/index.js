import React, { Component } from "react";

// import Aux from '../Aux/Aux';
// import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import NavDrawer from "../../components/Navigation/NavDrawer";

class Layout extends Component {
    state = {
        showNavDrawer: false
    };

    navDrawerClosedHandler = () => {
        this.setState({ showNavDrawer: false });
    };

    navDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showNavDrawer: !prevState.showNavDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.navDrawerToggleHandler} />
                <NavDrawer
                    open={this.state.showNavDrawer}
                    closed={this.navDrawerClosedHandler}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);
