// ! External
import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import styled, { withTheme, ThemeProvider } from "styled-components";

// ! Internal
// import asyncComponent from "./hoc/asyncComponent";
import Layout from "./hoc/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { theme } from "./Theme";
import Project1 from "./Pages/Project/Project1";
import Project2 from "./Pages/Project/Project2";
import Project3 from "./Pages/Project/Project3";

// ! Example async component...?
// const asyncCheckout = asyncComponent(() => {
//   return import('./containers/Checkout/Checkout');
// });

class App extends Component {
    state = {
        showWorksFilter: false
    };

    // ! Methods
    handleShowWorksFilter = () => {
        this.setState({ showWorksFilter: !this.state.showWorksFilter });
        console.log("handleShowWorksFilter Called");
    };

    render() {
        return (
            <Div>
                <ThemeProvider theme={theme}>
                    <Layout
                        theme={theme}
                        showWorksFilter={this.state.showWorksFilter}
                        toggleShowWorksFilter={this.handleShowWorksFilter}
                    >
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/project1" component={Project1} />
                            <Route path="/project2" component={Project2} />
                            <Route path="/project3" component={Project3} />
                            {/*<Route path="/project4" component={Project4} />
                          <Route path="/project5" component={Project5} />
                            <Route path="/project6" component={Project6} />
                              <Route path="/project7" component={Project7} />
                                <Route path="/project8" component={Project8} />
                    <Route path="/contact" component={contact} />*/}
                            <Route path="/about" component={About} />
                            <Redirect to="/" />
                        </Switch>
                    </Layout>
                </ThemeProvider>
            </Div>
        );
    }
}

export default withRouter(withTheme(App));

const Div = styled.div`
    box-sizing: border-box;
`;
